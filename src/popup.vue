<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  data_collector_secret_id,
  interaction_status_url,
  rationale_status_url,
  purchase_status_url,
  every_week_info_url
} from './config'
import { shouldExclude } from './utils/util'
import { NButton, NInput, NDivider, NProgress, NTooltip } from 'naive-ui'
// State management with refs
const count = ref(0)
const userId = ref('')
const showUserIdInput = ref(true)
const showEditButton = ref(false)
const recordingStatus = ref('')
const otherInfo = ref('')
const stats = ref({ total: 0, today: 0 })
const reasonStats = ref({ total: 0, week: 0 })
const purchaseStats = ref({ total: 0, week: 0 })
const showDownloadButtons = ref(false)
const weekInfo = ref({
  weekNumber: 1,
  startDate: 'Mar 25',
  endDate: 'Mar 31',
  reasonProgress: 0,
  purchaseProgress: 0
})

// Methods
const handleClick = () => {
  count.value++
}

const displayInteractionStats = async (userId: string) => {
  try {
    const response = await fetch(`${interaction_status_url}?user_id=${userId}`, {
      method: 'GET'
    })
    const data = await response.json()
    if (response.ok) {
      stats.value = {
        total: data.all_time,
        today: data.on_date
      }
    } else {
      otherInfo.value = `Failed to fetch stats: ${data.error || 'Unknown error'}`
    }
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
  // try {
  //   const response = await fetch(`${rationale_status_url}?user_id=${userId}`, {
  //     method: 'GET'
  //   })
  //   const data = await response.json()
  //   if (response.ok) {
  //     reasonStats.value = {
  //       total: data.all_time,
  //       week: data.on_date
  //     }
  //   } else {
  //     otherInfo.value = `Failed to fetch stats: ${data.error || 'Unknown error'}`
  //   }
  // } catch (error) {
  //   otherInfo.value = `Error: ${(error as Error).message}`
  // }
  // try {
  //   const response = await fetch(`${purchase_status_url}?user_id=${userId}`, {
  //     method: 'GET'
  //   })
  //   const data = await response.json()
  //   if (response.ok) {
  //     purchaseStats.value = {
  //       total: data.all_time,
  //       week: data.on_date
  //     }
  //   } else {
  //     otherInfo.value = `Failed to fetch stats: ${data.error || 'Unknown error'}`
  //   }
  // } catch (error) {
  //   otherInfo.value = `Error: ${(error as Error).message}`
  // }
}

const updateRecordingStatus = async () => {
  try {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true })
    const url = tabs[0].url
    const isExcluded = await shouldExclude(url)

    recordingStatus.value = !isExcluded
      ? '<img src="icon.png" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;" /> This page is currently <b>being recorded</b>'
      : '<img src="inactive_icon.png" style="width: 12px; height: 12px; display: inline-block; vertical-align: middle;" /> This page is <b>not being recorded</b>'
  } catch (error) {
    console.error('Error updating recording status:', error)
  }
}

const handleConfirmUserId = () => {
  chrome.storage.local.set({ userId: userId.value }, () => {
    otherInfo.value = 'User ID saved.'
  })
  showUserIdInput.value = false
  showEditButton.value = true
  showDownloadButtons.value = userId.value.includes(data_collector_secret_id)
  updateRecordingStatus()
  displayInteractionStats(userId.value)
  fetchCurrentWeekInfo(userId.value)
}

const handleEditUserId = () => {
  showUserIdInput.value = true
  showEditButton.value = false
}

const handleDownloadData = async () => {
  try {
    const response = await chrome.runtime.sendMessage({
      action: 'downloadData',
      userId: userId.value
    })
    otherInfo.value = response.success
      ? 'Data downloaded successfully.'
      : `Failed to download data: ${response.error || 'Unknown error'}`
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
}

const handleClearCache = () => {
  try {
    chrome.storage.local.remove(['user_interaction_tracker_last_timestamp', 'lastuploadTimestamp'])
    chrome.runtime.sendMessage({ action: 'clearMemoryCache' }, () => {
      otherInfo.value = 'Cache cleared successfully.'
    })
  } catch (error) {
    otherInfo.value = `Error: ${(error as Error).message}`
  }
}

const fetchCurrentWeekInfo = async (userId) => {
  try {
    const response = await fetch(`${every_week_info_url}?user_id=${userId}`, {
      method: 'GET'
    })
    const data = await response.json()

    if (response.ok) {
      weekInfo.value = {
        weekNumber: data.weekNumber,
        startDate: data.startDate,
        endDate: data.endDate,
        reasonProgress: data.reasonProgress,
        purchaseProgress: data.purchaseProgress
      }
    } else {
      console.error(`Failed to fetch week info: ${data.error || 'Unknown error'}`)
    }
  } catch (error) {
    console.error(`Error fetching week info: ${(error as Error).message}`)
  }
}

// Lifecycle hooks
onMounted(async () => {
  updateRecordingStatus()
  const result = await chrome.storage.local.get(['userId'])
  if (result.userId) {
    userId.value = result.userId
    showUserIdInput.value = false
    showEditButton.value = true
    showDownloadButtons.value = result.userId.includes(data_collector_secret_id)
    await displayInteractionStats(result.userId)
    await fetchCurrentWeekInfo(result.userId)
  }
})
</script>

<template>
  <div class="popup-container">
    <!-- <h1>Hello World</h1>
    {{ count }}
    <NButton @click="handleClick">Click me</NButton> -->

    <h3>Shopping Flow</h3>
    <div class="input-container">
      <div v-html="recordingStatus" class="recording-status"></div>
      <div v-if="showUserIdInput" class="user-id-label">User ID:</div>
      <NInput
        v-if="showUserIdInput"
        v-model:value="userId"
        type="text"
        placeholder="Use assigned ID or create one"
        class="user-id-input"
      />

      <div v-else class="user-id-container">
        <span class="user-id-display">User ID: {{ userId }}</span>
        <NButton @click="handleEditUserId" strong secondary type="info" class="edit-button"
          >Edit</NButton
        >
      </div>

      <NButton
        v-if="showUserIdInput"
        @click="handleConfirmUserId"
        strong
        secondary
        type="info"
        class="confirm-button"
      >
        Confirm
      </NButton>
    </div>
    <div v-if="showDownloadButtons" class="button-container">
      <NButton @click="handleDownloadData" strong secondary type="info" class="action-button"
        >Download</NButton
      >
      <NButton @click="handleClearCache" strong secondary type="info" class="action-button"
        >Clear Data</NButton
      >
    </div>
    <!-- <NDivider class="divider" /> -->
    <div class="info-text">{{ otherInfo }}</div>

    <div class="output-container" style="margin-top: 10px">
      <div class="output-item">
        Number of Actions Recorded: <b>{{ stats.total }}</b>
      </div>
    </div>
    <div
      class="output-container"
      style="margin-top: 5px; font-weight: bold; color: #333; margin-bottom: 5px"
    >
      <span
        >Week {{ weekInfo.weekNumber }} ({{ weekInfo.startDate }} - {{ weekInfo.endDate }})
        Progress:</span
      >
    </div>
    <div style="display: flex; flex-direction: column">
      <div style="display: flex; align-items: center" class="output-container">
        <span
          style="
            width: 120px;
            margin-right: 10px;
            text-align: left;
            display: flex;
            align-items: center;
          "
          class="info-label"
        >
          <span style="width: 65px">Reasons</span>
          <n-tooltip trigger="hover" placement="right" class="small-tooltip">
            <template #trigger>
              <span class="info-icon">i</span>
            </template>
            <span class="small-tooltip-content">Takes 10 seconds to update</span>
          </n-tooltip>
        </span>
        <NProgress
          type="line"
          :percentage="(weekInfo.reasonProgress / 2) * 100"
          style="flex-grow: 1"
          :show-indicator="false"
        />
        <span style="margin-left: 10px; width: 40px">
          {{ weekInfo.reasonProgress }}{{ weekInfo.reasonProgress <= 2 ? '/2' : '' }}
        </span>
      </div>
      <div style="display: flex; align-items: center" class="output-container">
        <span
          style="
            width: 120px;
            margin-right: 10px;
            text-align: left;
            display: flex;
            align-items: center;
          "
          class="info-label"
        >
          <span style="width: 65px">Purchases</span>
          <n-tooltip trigger="hover" placement="right" class="small-tooltip">
            <template #trigger>
              <span class="info-icon">i</span>
            </template>
            <span class="small-tooltip-content">Takes 10 minutes to update</span>
          </n-tooltip>
        </span>
        <NProgress
          type="line"
          :percentage="(weekInfo.purchaseProgress / 1) * 100"
          style="flex-grow: 1"
          :show-indicator="false"
        />
        <span style="margin-left: 10px; width: 40px">
          {{ weekInfo.purchaseProgress }}{{ weekInfo.purchaseProgress <= 1 ? '/1' : '' }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  width: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 5px;
}

body {
  width: 320px;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  padding: 5px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-container {
  width: 100%;
  border-radius: 3px;
  padding: 0 15px;
  box-sizing: border-box;
}

.input-container {
  margin: 5px 0;
  width: 100%;
}

.recording-status {
  width: 100%;
  margin-bottom: 20px;
  border: none;
  background-color: transparent;
  color: #333;
  vertical-align: middle;
  text-align: center;
  &:empty {
    display: none;
  }
}

.user-id-label {
  font-size: 14px;
  color: #333;
  margin-bottom: 3px;
}

.user-id-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 5px;
  font-size: 14px;
}

.user-id-container {
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.user-id-display {
  display: flex;
  font-size: 14px;
  align-items: center;
  color: #333;
}

.button-container {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
}

.confirm-button {
  width: 100%;
  margin-top: 5px;
  padding: 8px;
}

.edit-button {
  margin-left: auto;
}

.action-button {
  padding: 12px 40px;
}

.divider {
  border-color: #78c2f4;
  width: 100%;
  // margin-top: 15px;
}

.info-text {
  max-height: 100px;
  overflow-y: auto;
  font-size: 12px;
  background-color: #eef8fb;
  margin: 5px 0;
  padding: 0 0px;
  border-radius: 3px;
  width: 100%;

  &:empty {
    display: none;
  }
}

.output-container {
  max-height: 100px;
  overflow-y: auto;
  font-size: 12px;
  background-color: transparent;
  border-radius: 3px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: none;
  color: #676565;

  &:empty {
    display: none;
  }
}

.output-item {
  margin: 0 0;
}

.info-label {
  position: relative;
}

.info-icon {
  display: inline-block;
  width: 12px;
  height: 12px;
  line-height: 12px;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: white;
  background-color: #78c2f4;
  border-radius: 50%;
  margin-left: 4px;
  cursor: help;
}

:deep(.small-tooltip .n-tooltip) {
  padding: 4px 8px;
  max-width: 150px;
}

:deep(.small-tooltip .n-tooltip-arrow) {
  transform: scale(0.8);
}

.small-tooltip-content {
  font-size: 11px;
  line-height: 1.2;
}

h3 {
  text-align: center;
  color: #78c2f4;
  font-size: 24px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
