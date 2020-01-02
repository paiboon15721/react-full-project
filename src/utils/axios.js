import axios from 'axios'

export const { CancelToken } = axios
export const { isCancel } = axios
export default axios.create({ baseURL: 'http://localhost:4000' })
