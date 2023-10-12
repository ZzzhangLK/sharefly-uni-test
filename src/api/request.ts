// /**
//  * uni-request请求封装
//  * 1. 统一配置接口地址
//  * 2. 统一设置超时时间/报文格式/报文加密
//  * 3. 统一身份认证
//  * 4. 统一处理登录超时/接口异常提示
//  * 5. 统一返回接口格式
//  */
// import { Base64 } from 'js-base64'

import { Base64 } from 'js-base64'

export const baseURL = import.meta.env.VITE_REQUEST_BASE_URL // 测试接口

// 接口类型
interface responseType {
  code: string
  success: boolean
  message: string
  result: any
}

const request = (config: UniApp.RequestOptions) => {
  return new Promise<responseType>((resolve, reject) => {
    uni.request({
      ...config,
      url: baseURL + config.url,
      /** 统一设置超时时间 */
      timeout: config.timeout || 60000,
      header: {
        ...config.header,
        /** 统一报文格式 */
        'Content-Type': 'application/json;charset=UTF-8',
        /** 统一身份认证 */
        // Authorization: Token
        token: uni.getStorageSync('token')
      },
      success(res) {
        // 200状态码表示成功(系统状态)
        if (res.statusCode === 200) {
          const { data } = res as unknown as {
            data: { code: string; message: string; result: any }
          } & UniApp.RequestSuccessCallbackResult
          // 如果不报错就直接返回数据（后台状态码）
          if (data.code === '200') {
            resolve(data as any)
            return
          }
          // 重新登录？
          if (['605', '603', '602', '4004', '607', '5098'].includes(data.code)) {
            uni.showToast({ title: data.message, icon: 'none' })
            uni.removeStorageSync('token')
            setTimeout(() => {
              // 重新加载小程序
              uni.reLaunch({ url: '/pages/welcome/index' })
            }, 1000)
            // 阻止后续代码执行
            reject(data)
            return
          }
          // 文件/base64导出判断  || Base64.isValid(data)
          if (Base64.isValid(data)) {
            resolve(data as any)
            return
          }
          // 如果还有其他报错那么就弹出报错信息(不需要对每个接口的报错做单独判断)
          uni.showToast({ title: data.message || '啊呀，出错了', icon: 'none' })
          reject(data)
          return
        }
        if (res.statusCode === 500 || res.statusCode === 502) {
          uni.showToast({
            title: '服务器异常',
            icon: 'none'
          })
        }
        /**
         * 这里可以做一些登录超时/接口异常提示等处理
         */
        reject(res.data)
      },
      fail(result) {
        reject(result)
      }
    })
  })
}

export default {
  /**
   * get请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  get: (url: string, data?: UniApp.RequestOptions['data'], options?: UniApp.RequestOptions) => {
    return request({
      ...options,
      url,
      data,
      method: 'GET'
    })
  },
  /**
   * post请求
   * @param url 请求地址
   * @param data 请求的参数
   * @param options 其他请求配置
   */
  post: (url: string, data?: UniApp.RequestOptions['data'], options?: UniApp.RequestOptions) => {
    return request({
      ...options,
      url,
      data,
      method: 'POST'
    })
  }
}
