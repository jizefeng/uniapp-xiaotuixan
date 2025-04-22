import { useMemberStore } from '@/stores'

/**
 * 请求拦截器
 * @author:ji
 * date:2025/4/22
 * 添加拦截器:
 *    拦截 request请求
 *    拦截 uploadFile 文件上传
 * 1. 拼接基础地址
 * 2. 设置超时时间
 * 3. 添加请求头标识
 * 4. 添加 token
 */
//请求基地址
const baseUrl = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
// 拦截器配置
const interceptors = {
  //拦截触发前
  invoke(options: UniApp.RequestOptions) {
    // 1. 拼接基础地址
    if (!options.url.startsWith('http')) {
      options.url = baseUrl + options.url
    }
    // 2. 设置超时时间
    options.timeout = 10000
    // 3. 添加请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    // 4. 添加 token
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.authorization = token
    }
  },
}
//拦截request请求
uni.addInterceptor('request', interceptors)
// 拦截uploadFile文件上传
uni.addInterceptor('uploadFile', interceptors)

/**
 * 封装 Promise 请求函数
 * @param  UniApp.RequestOptions
 * @returns Promise
 *  1. 返回 Promise 对象，用于处理返回值类型
 *  2. 获取数据成功
 *    2.1 提取核心数据 res.data
 *    2.2 添加类型，支持泛型
 *  3. 获取数据失败
 *    3.1 401错误  -> 清理用户信息，跳转到登录页
 *    3.2 其他错误 -> 根据后端错误信息轻提示
 *    3.3 网络错误 -> 提示用户换网络
 */
interface Data<T> {
  code: string
  msg: string
  result: T
}

// 2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  //1. 返回 Promise 对象，用于处理返回值类型
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      success(result) {
        if (result.statusCode >= 200 || result.statusCode < 300) {
          // 2.1 提取核心数据 res.data
          resolve(result.data as Data<T>)
        } else if (result.statusCode === 401) {
          // 3.1 401错误  -> 清理用户信息，跳转到登录页
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(result)
        } else {
          // 3.2 其他错误 -> 根据后端错误信息轻提示
          uni.showToast({
            icon: 'none',
            title: (result.data as Data<T>).msg || '请求失败',
          })
          reject(result)
        }
      },
      //响应失败
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误，请稍后重试',
        })
        reject(err)
      },
    })
  })
}
