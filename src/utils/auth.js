const KEY = 'hm-toutiao-pc-93-user'
const setUser = user => {
  window.sessionStorage.setItem(KEY, JSON.stringify(user))
}
const getUser = () => {
  return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
}
const delUser = () => {
  window.sessionStorage.removeItem(KEY)
}
export default {
  setUser,
  getUser,
  delUser
}
