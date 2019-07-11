const Router = require('koa-router')
const { mysql } = require('../../model/mysql')
const router = new Router({
  prefix: '/api/hades'
})

router.get('/sort', async (ctx) => {
  try {
    const sort = await mysql('pc_sort').select('*')
    ctx.body = {
      code: 200,
      data: sort
    }
  } catch (error) {
    ctx.body = { code: -1, data: error }
  }
})

router.get('/articlelist', async (ctx) => {
  try {
    const articlelist = await mysql('article_details').join('pc_sort', 'article_details.pc_sort', '=', 'pc_sort.pc_sort_id').orderBy('ceate_time', 'desc')
    ctx.body = {
      code: 200,
      data: articlelist
    }
  } catch (error) {
    ctx.body = { code: -1, data: error }
  }
})

module.exports = router.routes()
