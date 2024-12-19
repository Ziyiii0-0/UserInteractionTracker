import { isFromPopup } from './utils/util'

const originalAddEventListener = EventTarget.prototype.addEventListener

// Add this at the top of the file
const DEBOUNCE_DELAY = 150 // 300ms
let lastClickTimestamp = 0
const TimeOut = 30000
function generateHtmlSnapshotId() {
  const url = window.location.href
  const timestamp = new Date().toISOString()
  return `html_${hashCode(url)}_${timestamp}`
}
function hashCode(str: string) {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0
  }
  console.log('Hash value before return:', hash)
  return hash.toString()
}
function generateSelector(element: Element): string {
  if (element.id) {
    return `#${element.id}`
  }

  let path = []
  let current = element

  while (current && current !== document.body && current.parentElement) {
    let selector = current.tagName.toLowerCase()

    if (current.className && typeof current.className === 'string') {
      selector += '.' + current.className.trim().replace(/\s+/g, '.')
    }

    let sibling = current
    let nth = 1
    while (sibling.previousElementSibling) {
      sibling = sibling.previousElementSibling
      if (sibling.tagName === current.tagName) {
        nth++
      }
    }
    if (nth > 1) {
      selector += `:nth-of-type(${nth})`
    }

    path.unshift(selector)
    current = current.parentElement
  }

  return path.join(' > ')
}

function captureInteraction(
  eventType: string,
  target: any,
  timestamp: string,
  selector: string,
  url: string
) {
  function findClickableParent(element: HTMLElement | null, depth: number = 0): HTMLElement | null {
    if (!element || depth >= 5) return null
    if (element.hasAttribute('data-clickable-id')) {
      return element
    }
    return findClickableParent(element.parentElement, depth + 1)
  }

  const clickableElement = findClickableParent(target as HTMLElement)
  const clickableId = clickableElement
    ? clickableElement.getAttribute('data-clickable-id') || ''
    : ''

  // Generate new HTML snapshot ID
  const currentSnapshotId = generateHtmlSnapshotId()

  // Create a serializable version of the target
  const serializedTarget = {
    tagName: target.tagName,
    className: target.className,
    id: target.id,
    innerText: target.innerText || target.value || '',
    outerHTML: target.outerHTML
  }

  const data = {
    eventType,
    timestamp: timestamp,
    target: serializedTarget, // Replace direct DOM element with serializable object
    targetOuterHTML: target.outerHTML,
    targetClass: target.className,
    targetId: target.id,
    targetText: target.innerText || target.value || '',
    htmlSnapshotId: currentSnapshotId,
    selector: selector || '',
    clickableId: clickableId || '',
    url: url || '',
    htmlContent: document.documentElement.outerHTML
  }

  return data
}

// Monkey patch addEventListener
EventTarget.prototype.addEventListener = function (type, listener, options) {
  // console.log('[Monkey Patch] Adding event listener for type:', type);

  if (type === 'click' && listener) {
    const wrappedListener = async function (event) {
      const target = event.target as HTMLElement
      if (isFromPopup(target)) {
        if (typeof listener === 'function') {
          listener.call(this, event)
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent.call(listener, event)
        }
        return
      }
      // Add debouncing logic
      const now = Date.now()
      if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
        console.log('[Monkey Patch] Debouncing click event')
        return
      }
      lastClickTimestamp = now

      console.log('[Monkey Patch] Click detected on:', event.target)
      console.log(event.currentTarget)
      const timestamp = new Date().toISOString()
      const anchor = target.closest('a')
      if (
        anchor &&
        anchor.href &&
        anchor.tagName.toLowerCase() === 'a' &&
        !anchor.href.startsWith('javascript:')
      ) {
        event.preventDefault()
        event.stopPropagation()
        const targetHref = anchor.href
        try {
          const screenshotComplete = new Promise((resolve, reject) => {
            function handleMessage(event: MessageEvent) {
              if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
                window.removeEventListener('message', handleMessage)
                if (event.data.success) {
                  resolve(void 0)
                } else {
                  reject(new Error(event.data.error || 'Screenshot failed'))
                }
              }
            }
            window.addEventListener('message', handleMessage)

            // Add timeout
            setTimeout(() => {
              window.removeEventListener('message', handleMessage)
              reject(new Error('Screenshot timeout'))
            }, TimeOut)
          })

          const interactionComplete = new Promise((resolve, reject) => {
            function handleMessage1(event: MessageEvent) {
              if (
                event.data.type === 'INTERACTION_COMPLETE' &&
                event.data.timestamp === timestamp
              ) {
                window.removeEventListener('message', handleMessage1)
                if (event.data.success) {
                  resolve(void 0)
                } else {
                  reject(new Error(event.data.error || 'Interaction failed'))
                }
              }
            }
            window.addEventListener('message', handleMessage1)

            // Add timeout
            setTimeout(() => {
              window.removeEventListener('message', handleMessage1)
              reject(new Error('Interaction timeout'))
            }, TimeOut)
          })
          const data = captureInteraction(
            'click_a',
            event.target,
            timestamp,
            generateSelector(event.target),
            window.location.href
          )
          window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*')
          window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*')
          // Wait for screenshot to complete
          await screenshotComplete
          await interactionComplete
          window.location.href = targetHref
        } catch (error) {
          console.error('Error:', error)
          window.location.href = targetHref
        }
        return
      }

      try {
        // Create a promise to wait for screenshot completion
        const screenshotComplete = new Promise((resolve, reject) => {
          function handleMessage(event: MessageEvent) {
            if (event.data.type === 'SCREENSHOT_COMPLETE' && event.data.timestamp === timestamp) {
              window.removeEventListener('message', handleMessage)
              if (event.data.success) {
                resolve(void 0)
              } else {
                reject(new Error(event.data.error || 'Screenshot failed'))
              }
            }
          }
          window.addEventListener('message', handleMessage)

          // Add timeout
          setTimeout(() => {
            window.removeEventListener('message', handleMessage)
            reject(new Error('Screenshot timeout'))
          }, TimeOut)
        })
        const data = captureInteraction(
          'click_b',
          event.target,
          timestamp,
          generateSelector(event.target),
          window.location.href
        )
        // Request screenshot
        window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*')
        window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*')
        const interactionComplete = new Promise((resolve, reject) => {
          function handleMessage1(event: MessageEvent) {
            if (event.data.type === 'INTERACTION_COMPLETE' && event.data.timestamp === timestamp) {
              window.removeEventListener('message', handleMessage1)
              if (event.data.success) {
                resolve(void 0)
              } else {
                reject(new Error(event.data.error || 'Interaction failed'))
              }
            }
          }
          window.addEventListener('message', handleMessage1)

          // Add timeout
          setTimeout(() => {
            window.removeEventListener('message', handleMessage1)
            reject(new Error('Interaction timeout'))
          }, TimeOut)
        })
        // Wait for screenshot to complete
        await screenshotComplete
        await interactionComplete
        // Execute original listener after screenshot is captured
        if (typeof listener === 'function') {
          listener.call(this, event)
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent.call(listener, event)
        }
      } catch (error) {
        console.error('Error capturing screenshot:', error)
        // Execute original listener even if screenshot fails
        if (typeof listener === 'function') {
          listener.call(this, event)
        } else if (listener && typeof listener.handleEvent === 'function') {
          listener.handleEvent.call(listener, event)
        }
      }
    }

    // Call the original addEventListener with the wrapped listener
    return originalAddEventListener.call(this, type, wrappedListener, options)
  } else {
    // Call the original addEventListener for non-click events
    return originalAddEventListener.call(this, type, listener, options)
  }
}

console.log('[Monkey Patch] addEventListener successfully patched.')

// Function to handle clicks on <a> tags
function handleAnchorClicks() {
  document.addEventListener(
    'click',
    async function (event) {
      // Add debouncing logic
      const now = Date.now()
      if (now - lastClickTimestamp < DEBOUNCE_DELAY) {
        console.log('[Monkey Patch] Debouncing anchor click event')
        return
      }
      lastClickTimestamp = now

      const target = event.target as HTMLElement

      // Find the closest <a> tag in case of nested elements inside the <a>
      const anchor = target.closest('a')

      if (anchor && anchor.tagName.toLowerCase() === 'a' && anchor.href) {
        console.log('[Intercepted] Click on <a> tag:', anchor.href)
        if (!anchor.href.startsWith('javascript:')) {
          event.preventDefault()
          event.stopPropagation()
          const timestamp = new Date().toISOString()
          const targetHref = anchor.href

          try {
            // 监听截图完成的消息
            const screenshotComplete = new Promise((resolve, reject) => {
              function handleMessage(event: MessageEvent) {
                if (
                  event.data.type === 'SCREENSHOT_COMPLETE' &&
                  event.data.timestamp === timestamp
                ) {
                  window.removeEventListener('message', handleMessage)
                  if (event.data.success) {
                    resolve(void 0)
                  } else {
                    reject(new Error(event.data.error || 'Screenshot failed'))
                  }
                }
              }
              window.addEventListener('message', handleMessage)

              // 添加超时处理
              setTimeout(() => {
                window.removeEventListener('message', handleMessage)
                reject(new Error('Screenshot timeout'))
              }, TimeOut) // 3秒超时
            })

            // 发送截图请求
            window.postMessage({ type: 'CAPTURE_SCREENSHOT', timestamp: timestamp }, '*')
            const data = captureInteraction(
              'click_c',
              event.target,
              timestamp,
              generateSelector(target),
              window.location.href
            )
            window.postMessage({ type: 'SAVE_INTERACTION_DATA', data: data }, '*')
            const interactionComplete = new Promise((resolve, reject) => {
              function handleMessage1(event: MessageEvent) {
                if (
                  event.data.type === 'INTERACTION_COMPLETE' &&
                  event.data.timestamp === timestamp
                ) {
                  window.removeEventListener('message', handleMessage1)
                  if (event.data.success) {
                    resolve(void 0)
                  } else {
                    reject(new Error(event.data.error || 'Interaction failed'))
                  }
                }
              }
              window.addEventListener('message', handleMessage1)

              // Add timeout
              setTimeout(() => {
                window.removeEventListener('message', handleMessage1)
                reject(new Error('Interaction timeout'))
              }, TimeOut)
            })
            // 等待截图完成
            await screenshotComplete
            await interactionComplete

            // 截图确认完成后再跳转
            window.location.href = targetHref
          } catch (error) {
            console.error('Error capturing screenshot:', error)
            window.location.href = targetHref
          }
        }
      }
    },
    true
  ) // Use capture phase to intercept the event earlier
}

// Call the function to handle <a> tag clicks
handleAnchorClicks()