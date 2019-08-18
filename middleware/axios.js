/*
 * @Date: 2019-07-14 19:12:42
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-18 21:27:12
 * @Description:
 */

import axios from 'axios'
export default function ({ req, res }) {
  axios.defaults.headers.common.Authorization = 'AUTH_TOKEN'
  // console.log(req)
  // if (res.data.code === 200) {
  //   return res.data.data
  // }
}
