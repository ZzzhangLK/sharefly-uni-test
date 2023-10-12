import {
  BackEndLoginType,
  cooperationServiceBitmap,
  getSecondDistrictInfo
} from '@/api/interface/common'
import request from '../request'

export default class CommonAPI {
  // 用户登录
  static BackEndLogin: BackEndLoginType = (params) =>
    request.post('/userapp/auth/backEndLogin', params)

  // 地域
  static getSecondDistrictInfo: getSecondDistrictInfo = (params) =>
    request.get('/pms/webDevice/getSecondDistrictInfo', params)

  // 服务商网点数据
  static cooperationServiceBitmap: cooperationServiceBitmap = (params) =>
    request.get('/userapp/cooperation/service/bitmap', params)
}
