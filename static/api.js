/*
 * @Date: 2019-08-05 22:42:36
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-19 23:39:15
 * @Description:
 */
export default {
  // hades
  getSortBlogList: '/api/hades/sortArticleList',
  getHPcSort: '/api/hades/sort',
  getAllBlog: '/api/admin/article/getData',
  changeState: '/api/admin/details/change', // 改变博文的显示状态
  getSort: '/api/admin/sort/getData', // 获取博文分类内容
  upDataSort: '/api/admin/sort/upData', // 修改博文的分类
  inSort: '/api/admin/sort/inData', // 添加博文的分类
  deleteSort: '/api/admin/sort/delData', // 删除博文的分类
  getBlogDetails: '/api/admin/details/getData', // 获取博文的详细信息
  upDataDetails: '/api/admin/details/upData', // 修改博文的详细信息
  insertDataDetails: '/api/admin/details/inData', // 添加博文的详细信息
  delDataDetails: '/api/admin/details/delData', // 删除博文的详细信息
  uploadImage: '/api/admin/details/image', // 修改博文的图片
  getArticleData: '/api/admin/article/getArticleData', // 获取博文内容
  getBlogTitle: '/api/admin/article/getTitleData', // 获取分类后博文列表
  insertBlog: '/api/admin/article/addData', // 添加博文
  upDataBlog: '/api/admin/article/upData', // 更新博文
  getPcSort: '/api/admin/pc/getSort', // 获取PC端栏目
  upDataPcSort: '/api/admin/pc/updataSort', // 修改PC栏目
  getPcAssort: '/api/admin/pc/getPcAssort', // 获取PC分类
  changePcSort: '/api/admin/pc/changePcSort', // 修改博文的PC分类
  getDailyRetain: '/api/admin/wechat/getData', // 获取小程序数据
  getcarousel: '/api/admin/wechat/getcarousel', // 获取小程序轮播
  updataCarousel: '/api/admin/wechat/addupload', // 修改小程序轮播
  getWeappUser: '/api/admin/wechat/getUserInfo', // 获取小程序用户
  getSaying: '/api/admin/wechat/getSaying', // 获取名言
  updataSaying: '/api/admin/wechat/upSaying', // 修改名言的状态
  addSaying: '/api/admin/wechat/addSaying', // 添加名言
  getLoginInfo: '/api/admin/serverinfo/getinfo', // 获取登录信息
  getLoginQcode: '/api/admin/scanlogin', // 获取登录二维码
  getState: '/api/admin/getstate', // 获取登录状态，
  login: '/api/admin/login'
}
