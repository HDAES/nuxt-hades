
import axios from 'axios'
export default function ({ req, res }) {
  axios.defaults.headers.access_token = '123'
  console.log(req)
  // if (res.data.code === 200) {
  //   return res.data.data
  // }
}
