import { useMemberStore } from '@/stores'

/**
 * 请求封装
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
