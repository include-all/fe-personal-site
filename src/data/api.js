import axios from './interceptors'

const genPostReq = (url) => (...params) => axios.post(url, ...params)
const genGetReq = (url) => (...params) => axios.get(url, ...params)

const authApi = {
  login: genPostReq('/auth/login'),
}

const topListApi = {
  getList: genGetReq('/topList/getList'),
  reGetHupuPostList: genGetReq('/topList/reGetHupuPostList'),
  reGetNgaPostList: genGetReq('/topList/reGetNgaPostList'),
  reGetThirdApiList: genGetReq('/topList/reGetThirdApiList')
}
export { authApi, topListApi }
