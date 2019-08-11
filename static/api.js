/*
 * @Date: 2019-08-05 22:42:36
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-11 23:26:11
 * @Description:
 */
export default {
  getAllBlog: '/api/admin/article/getData',
  changeState: '/api/admin/details/change', // 改变博文的显示状态
  getSort: '/api/admin/sort/getData', // 获取博文分类内容
  upDataSort: '/api/admin/sort/upData', // 修改博文的分类
  inSort: '/api/admin/sort/inData', // 添加博文的分类
  deleteSort: '/api/admin/sort/delData' // 删除博文的分类
}
