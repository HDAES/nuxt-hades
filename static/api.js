/*
 * @Date: 2019-08-05 22:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-14 14:11:25
 * @Description:
 */
export default {
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
  getPcAssort: '/api/admin/pc/getPcAssort' // 修改PC分类
}
