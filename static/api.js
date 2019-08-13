/*
 * @Date: 2019-08-05 22:42:36
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-13 17:50:27
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
  getPcSort: '/api/admin/pc/getSort', // 获取PC端栏目
  upDataPcSort: '/api/admin/pc/updataSort' // 修改PC栏目
}
