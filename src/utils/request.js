import axios from 'axios'
import { Message } from 'element-ui'
function interceptor(instance){
  instance.interceptors.request.use(config=>{
    config.data = config.data || {}
    config.data.platform = "PC"
    return config;
  },error => {
    return Promise.reject(error);
  });

  instance.interceptors.response.use(response=>{
    let resData = response.data||{}
    let result = {}
    // 走网关的接口
    if(resData.respCode){
      if(resData.respCode==='00000'){
        result = resData.result||{}
        if(result.code==0) {
          return result
        }
        Message({
          message: `内部接口_${response.config.url}: ${result.msg}`,
          type: 'error',
          duration: 5 * 1000,
          offset: 60
        })
        console.error(`内部接口_${response.config.url}: ${result.msg}`)
        return Promise.reject(result.msg)
      }
      Message({
        message: '网关返回异常：'+resData.respDesc,
        type: 'error',
        duration: 5 * 1000,
        offset: 60
      })
      if(/^(S20308|S20307|S90004)$/i.test(resData.respCode)){
        setTimeout(()=>{
          window.location.href = "/logout"
        }, 500)
      }
      return Promise.reject(resData.respDesc)
    }
    // 未走网关的接口
    if(resData.code==0) {
      return resData
    }
    Message({
      message: `内部接口_${response.config.url}: ${resData.msg}`,
      type: 'error',
      duration: 5 * 1000,
      offset: 60
    })
    console.error(`内部接口_${response.config.url}: ${resData.msg}`)
    return Promise.reject(resData.msg)
  },error =>{
    console.log("error---------------")
    console.log(error)
    Message({
      message: `网关异常: ${error.message}`,
      type: 'error',
      duration: 5 * 1000,
      offset: 60
    })
    return Promise.reject(error&&error.message)
  });
}

export const request = axios.create({
  baseURL: location.origin+'/api',
  timeout: 15000
});

interceptor(request)

export const gwRequest = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 15000,
  async: true,
  withCredentials: true,
  crossDomain: true
});
interceptor(gwRequest)

// export default request

