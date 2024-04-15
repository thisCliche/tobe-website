import axios from 'axios'
import { Notification } from 'element-ui'
import { Local } from "@utils/storage";
import { ACCOUNT_INFO } from '@assets/constant/cacheKey'
import baseURL from '../constant/requestUrl.js'

let config = {
  baseURL,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8"
  }
}
let service = axios.create(config)

service.interceptors.request.use(config => {
  let user = Local.get(ACCOUNT_INFO);
  if (user) {
    config.headers['token'] = user.token
  }
  return config
}, error => {
  Promise.reject(error)
})

service.interceptors.response.use(
  response => {
    let data = response.data
    // 未完善 缺少权限判断 登录过期等等
    if (data.code == 200) {
      return data;
    } else {
      Notification.error({title:'错误',message:data.error})
      return Promise.reject(data);
    }
  },
  error => {
    Notification.error({title:'错误',message:'网络错误，请稍后再试'})
    return Promise.reject(error);
  }
);
export default service