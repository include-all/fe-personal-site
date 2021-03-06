import { ElMessage } from 'element-plus'
import axios from 'axios'

axios.defaults.timeout = 100000
axios.defaults.baseURL = '/api'

axios.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
)

// 响应拦截器
axios.interceptors.response.use(
  (response) => {
    if (response.data.errCode) {
      ElMessage.error(`${response.config.url}: ${response.data.errMsg}`)
      return Promise.reject(response.data)
    }
    return Promise.resolve(response.data.data)
  },
  (err) => {
    const { status } = err.response
    console.log(status)
    if (status === 401) {
      window.location.href = '/login'
    }
    ElMessage.error(err)
    return Promise.reject(err)
  },
)

export default axios
