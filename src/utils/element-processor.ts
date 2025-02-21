declare global {
  interface Window {
    clickable_recipes: any
    input_recipes: any
  }
}

export function processElement(
  element: any,
  recipe: any,
  parentName = '',
  nthChild = 0,
  document = globalThis.document,
  window = globalThis.window
) {
  // console.log("processing element: ", element, recipe);
  // Create a new element using the DOM API
  let tagName = recipe.tag_name || element.tagName.toLowerCase()
  // Handle underscored tags
  if (tagName.endsWith('_')) {
    tagName = tagName.slice(0, -1)
  }
  const newElement = document.createElement(tagName)

  // Extract text content based on the recipe
  let elementText = ''
  if (recipe.text_selector) {
    const textElement = element.querySelector(recipe.text_selector)
    if (textElement) {
      elementText = textElement.innerText || textElement.textContent || ''
    }
  } else if (recipe.text_js) {
    elementText = recipe.text_js(element)
    if (elementText === '' || elementText === undefined) {
      // console.log('text js does not detect text for element ', element)
    }
  } else if (recipe.add_text) {
    elementText = element.innerText || element.textContent || ''
  }
  if (elementText == null) {
    console.log(element)
    console.log(elementText)
  }
  elementText = elementText.replace(/\s+/g, ' ').trim()
  if (recipe.text_format) {
    elementText = recipe.text_format.replace('{}', elementText)
  } else if (recipe.text_format) {
    elementText = recipe.text_format
  }

  if (elementText && recipe.add_text) {
    newElement.textContent = elementText
  }

  // Build the node attributes
  let elementName = ''
  if (recipe.name) {
    if (recipe.name === 'from_text') {
      if (!elementText) {
        // console.log('elementText is empty', recipe, element)
        // debugger
      }
      elementName = parentName ? parentName + '.' : ''
      if (!elementText) {
        // console.log("element text not found");
        elementName = ''
      } else {
        elementName += elementText.toLowerCase().replace(/[^\w]+/g, '_')
      }
    } else if (recipe.name === 'from_nth_child') {
      elementName = parentName ? parentName + '.' : ''
      elementName += nthChild.toString()
    } else {
      elementName = parentName ? parentName + '.' : ''
      elementName += recipe.name
    }
    newElement.setAttribute('name', elementName)
    parentName = elementName
  }

  if (recipe.generate_metadata) {
    const metaobj = recipe.generate_metadata(element)
    const metadata = JSON.stringify(metaobj.data)
    const metaname = metaobj.name

    element.setAttribute('data-element-meta-name', metaname)
    element.setAttribute('data-element-meta-data', metadata)
    // console.log('metadata generated: ', metadata, ' with name: ', metaname)
  }

  // Handle clickables and inputs
  if (recipe.clickable) {
    if (!recipe.name) {
      throw new Error('clickable element must have a name')
    }
    // handle click_selector
    let click_element: Element | null
    if (recipe.click_selector) {
      click_element = element.querySelector(recipe.click_selector)
    } else {
      click_element = element
    }
    if (click_element) {
      click_element.setAttribute('data-clickable-id', elementName)
    } else {
      // console.log('click-element not found', element, recipe)
    }
    if (!window.clickable_recipes) {
      window.clickable_recipes = {}
    }
    window.clickable_recipes[elementName] = recipe
  }

  if (recipe.fetch_url) {
    element.setAttribute('data-fetch-url', recipe.fetch_url)
  }

  if (tagName === 'input') {
    const inputType = element.getAttribute('type')
    if (['text', 'number'].includes(inputType)) {
      newElement.setAttribute('value', element.value)
      element.setAttribute('data-input-id', elementName)
    } else if (inputType === 'checkbox') {
      newElement.setAttribute('checked', element.checked.toString())
    } else if (inputType === 'radio') {
      newElement.setAttribute('checked', element.checked.toString())
      element.setAttribute('data-clickable-id', elementName)
    }
    if (!window.input_recipes) {
      window.input_recipes = {}
    }
    window.input_recipes[elementName] = recipe
  }
  // **Handle select elements**
  if (tagName === 'select') {
    // Tag the select element with data-select-id
    element.setAttribute('data-select-id', elementName)

    const selectId = element.getAttribute('id')

    const nameId = element.getAttribute('name')

    const tag = element.parentElement?.querySelector('span.a-button-dropdown span.a-button-text')
    const newTag = document.createElement('span')
    newTag.textContent = tag.textContent
    const tagName = elementName + '.open_drop_down_list'
    newTag.setAttribute('name', tagName)
    tag.setAttribute('data-clickable-id', tagName) // Tag actual DOM option element

    newElement.appendChild(newTag)

    const options = document.querySelectorAll('a[id^="' + selectId + '"]')
    options.forEach(async (option) => {
      const optionValue = option.textContent.trim() || option.querySelector('input').value
      const optionName = elementName + '.' + optionValue
      const newOption = document.createElement('a')
      newOption.textContent = option.textContent
      newOption.setAttribute('value', optionValue)
      newOption.setAttribute('name', optionName)
      newOption.setAttribute('selected', option.getAttribute('aria-selected'))
      option.setAttribute('data-clickable-id', optionName) // Tag actual DOM option element
      newElement.appendChild(newOption)
    })
  }
  // Copy specified attributes
  const attrsToCopy = [
    'alt',
    'title',
    'type',
    'value',
    'role',
    'aria-label',
    'aria-hidden',
    'aria-selected'
  ]
  attrsToCopy.forEach((attr) => {
    const value = element.getAttribute(attr)
    if (value) {
      newElement.setAttribute(attr, value)
    }
  })
  if (recipe.keep_attr) {
    // console.log("attributes to keep: ", recipe.keep_attr);
    for (const key of recipe.keep_attr) {
      const value = element.getAttribute(key)
      // console.log(key, value)
      if (value) {
        newElement.setAttribute(key, value)
      }
    }
  }
  if (recipe['class']) {
    newElement.setAttribute('class', recipe['class'])
  }
  if (recipe['id']) {
    newElement.setAttribute('id', recipe['id'])
  }

  // Override attributes if specified
  if (recipe.override_attr) {
    for (const key in recipe.override_attr) {
      newElement.setAttribute(key, recipe.override_attr[key](element))
    }
  }

  // Process children
  if (recipe.children && recipe.children.length > 0) {
    for (const childRecipe of recipe.children) {
      const selector = childRecipe.direct_child
        ? `:scope > ${childRecipe.selector}`
        : childRecipe.selector
      let childElements
      if (childRecipe.use_root) {
        childElements = document.querySelectorAll(selector)
        // console.log('use root for ', childElements)
      } else childElements = element.querySelectorAll(selector)
      childElements.forEach((childElement: any, index: number) => {
        const childNode = processElement(
          childElement,
          childRecipe,
          parentName,
          index,
          document,
          window
        )
        newElement.appendChild(childNode)
        if (childRecipe.insert_split_marker) {
          const every = childRecipe.insert_split_marker_every || 1
          if (index % every == 0) {
            const splitMarker = document.createElement('split-marker')
            newElement.appendChild(splitMarker)
            // console.log("inserting split marker 1");
          }
        }
        if (childRecipe.insert_split_marker) {
          // console.log("inserting split marker 2");
          const splitMarker = document.createElement('split-marker')
          newElement.appendChild(splitMarker)
        } else {
          // console.log('no split marker')
        }
      })
    }
  }

  // Handle empty messages
  if (recipe.empty_message && newElement.children.length === 0) {
    const emptyTextNode = document.createTextNode(recipe.empty_message)
    newElement.appendChild(emptyTextNode)
  }

  return newElement
}
