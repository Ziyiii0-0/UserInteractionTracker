export const popup_probability = 0.15
export const popup_scroll_probability = 0.05
export const popup_click_probability = 0.1
export const popup_navigation_probability = 0.15
export const popup_tabActivate_probability = 0.15
export const folder_name = `user_interaction_data` // the folder name to save the data
export const zip = true // whether to zip the data when downloading
export const upload_url = 'http://userdatacollect.hailab.io/api/upload'
export const base_url = 'http://userdatacollect.hailab.io/api'
export const data_collector_secret_id = 'hailab'
export const url_includes = ['www.amazon.com']
export const interaction_status_url = `${base_url}/interactions_record_status`
export const rationale_status_url = `${base_url}/rationale_status`
export const purchase_status_url = `${base_url}/order_status`
export const check_user_id_url = `${base_url}/check_user_id`
export const filter_url = [
  'https://www.amazon.com/checkout/',
  'https://www.amazon.com/gp/buy/',
  'https://www.amazon.com/a/addresses',
  'https://www.amazon.com/cpe/yourpayments/',
  'https://www.amazon.com/ap/signin',
  'https://www.amazon.com/ap/cvf/',
  'https://www.amazon.com/ap/profile/',
  'https://www.amazon.com/ax/account/',
  'https://www.amazon.com/gp/product/handle-buy-box/',
  'https://www.amazon.com/gp/checkoutportal/',
  'https://www.amazon.com/gp/cart/desktop/',
  'https://www.amazon.com/gp/primecentral/editPaymentPreference',
  'https://www.amazon.com/gp/css/summary/print.html',
  'https://www.amazon.com/documents/download/',
  'https://www.amazon.com/ap/oa?',
  'https://www.amazon.com/ap/mfa?'
]
export const scroll_threshold = 300
export const scroll_popup_interval = 15 * 1000 // 15 seconds
export const new_session_interval = 1000 * 60 * 60 * 6 // 4 hours
export const every_week_info_url = `${base_url}/every_week_info`
