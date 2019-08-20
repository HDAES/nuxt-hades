/*
 * @Author: HADES
 * @Date: 2019-07-30 11:10:46
 * @LastEditTime: 2019-08-20 00:33:06
 * @Description:
 */

import { Message } from 'element-ui'
export default function ({ $axios, redirect, store }) {
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
    'post'
  ])
  $axios.setHeader('Cache-Control', 'no-cache')
  $axios.defaults.baseURL = 'https://blog.xl686.com'
  // $axios.defaults.baseURL = 'http://localhost:3001'
  $axios.onRequest((config) => {
    // console.log(config)
  })

  $axios.onResponse((res) => {
    // console.log(res)
    if (res.data.code >= 200 && res.data.code < 300) {
      return res.data.data
    } else if (res.data.code === -1) {
      redirect('/admin/login')
    } else {
      Message.error(res.data.data.code)
      return res
    }
  })

// $axios.onError((error) => {
//   const code = parseInt(error.response && error.response.status)
//   if (code >= 400) {
//     redirect('/400')
//   }
// })
}
