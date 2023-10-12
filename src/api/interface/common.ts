import { InterFunction, InterListFunction } from '../interface'

// 用户登录
export type BackEndLoginType = InterFunction<
  { accountNo?: string; passWord?: string },
  {
    token: string
    userAccountId: number
    accountNo: string
    portType: number
    uid: string
    phoneNum: string
    userName: string
    nickName: string
    companyInfoVO: {
      id: number
      companyType: number
      companyName: string
      fullName: string
      province: string
      city: string
      district: string
      address: string
      companyUserName: string
      phoneNum: string
      remark: string
    }
    roleInfo: {
      id: number
      roleName: string
      roleNo: string
    }
  }
>

// 演示规范
export type getSecondDistrictInfo = InterFunction<
  // 入参
  {},
  // 出参
  {
    id: number
    name: string
    level: number
    pid: number
    childInfo: Array<{
      id: number
      name: string
      level: number
      pid: number
      childInfo: null
    }>
  }[]
>
// 服务商网点数据
export type cooperationServiceBitmap = InterListFunction<
  {
    lat: number
    lon: number
    pageNo: number
    pageSize: number
    type: number
  },
  {
    address: string
    name: string
    lon: number
    lat: number
    distance: number
    content: string
    cooperationTagId: number
    id: number
    score: number
  }
>
