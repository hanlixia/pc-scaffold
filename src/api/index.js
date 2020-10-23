import { request } from '@/utils/request'
import * as API from "./apiUrl.js"

/******************* 接口应用示例 *******************/
// 示例接口
export const getTestApi = (data) => request({method: 'post', url: API.API_TEST_LIST, data})
