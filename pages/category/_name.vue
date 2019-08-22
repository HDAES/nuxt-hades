<!--
 * @Date: 2019-07-26 23:17:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-22 15:18:46
 * @Description:
 -->
<template>
  <div class="category">
    <my-header :sort="obj" />
    <article-list :articlelist="articlelist" />
  </div>
</template>

<script>
import MyHeader from '@/components/hades/category/header'
import ArticleList from '@/components/hades/index/articlelist'
// import api from '@/static/api'
export default {
  layout: 'hades',
  components: { MyHeader, ArticleList },
  async asyncData({ $axios, route }) {
    const articleData = await $axios.get('/api/hades/articlelist')
    const sortData = await $axios.get('/api/hades/sort')
    const articlelist = articleData.filter((item) => {
      if (item.name === route.params.name) {
        return item
      }
    })
    const sort = sortData.filter((item) => {
      if (item.name === route.params.name) {
        return item
      }
    })
    const obj = {
      sort: sort,
      list: articlelist
    }
    return { obj, articlelist }
  }
}
</script>

<style lang="scss" scoped>

</style>
