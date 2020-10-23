import { gwRequest } from '@/utils/request'
import * as API from "./apiUrl.js"

/******************* 应用示例 *******************/
// 应用-获取应用列表
export const getApply = (data) => gwRequest({method: 'post', url: API.API_APP_LIST, data})
// 应用-添加常用
export const setFrequently = (data) => gwRequest({method: 'post', url: API.API_APP_ADD, data})
