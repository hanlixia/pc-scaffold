import axios from 'axios'
import { Message } from 'element-ui'
function interceptor(instance){
  instance.interceptors.request.use(config=>{
    return config;
  },error => {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(response=>{
    let resData = response.data||{}
    let result = {}
    // 走网关的接口
    if(resData.respCode){
      if(resData.respCode==='00000'){ //'00000': 表示请求成功
        result = resData.result||{}
        if(result.code==0) { // 0: 表示请求成功
          return result
        }
        // 请求失败时处理
        Message({
          message: `内部接口_${response.config.url}: ${result.msg}`,
          type: 'error',
          duration: 5 * 1000,
          offset: 60
        })
        return Promise.reject(result.msg)
      }
      // 请求失败时处理
      Message({
        message: '网关返回异常：'+resData.respDesc,
        type: 'error',
        duration: 5 * 1000,
        offset: 60
      })
      // todo: 登录失效处理
      return Promise.reject(resData.respDesc)
    }
    // 未走网关的接口
    if(resData.code==0) {
      return resData
    }
    // 请求失败时处理
    Message({
      message: `内部接口_${response.config.url}: ${resData.msg}`,
      type: 'error',
      duration: 5 * 1000,
      offset: 60
    })
    return Promise.reject(resData.msg)
  },error =>{
    Message({
      message: `网关异常: ${error.message}`,
      type: 'error',
      duration: 5 * 1000,
      offset: 60
    })
    return Promise.reject(error&&error.message)
  });
}

// request：不走网关接口（直连后端服务）
export const request = axios.create({
  baseURL: location.origin+'/api',
  timeout: 15000
});

interceptor(request)

// gwRequest：走网关接口
export const gwRequest = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000,
  async: true,
  withCredentials: true,
  crossDomain: true
});
interceptor(gwRequest)


