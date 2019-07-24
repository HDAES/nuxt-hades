
export default function ({ $axios, redirect }) {
  $axios.setHeader('Authorization', '123')
  $axios.setHeader('Content-Type', 'application/x-www-form-urlencoded', [
    'post'
  ])
  $axios.defaults.baseURL = 'https://blog.xl686.com'
  $axios.onRequest((config) => {

  })

  $axios.onResponse((res) => {
    if (res.data.code === 200) {
      return res.data.data
    } else {
      return 'err'
    }
  })

  // $axios.onError((error) => {
  //   const code = parseInt(error.response && error.response.status)
  //   if (code >= 400) {
  //      redirect('/400')
  //   }
  // })
}
