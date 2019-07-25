<template>
  <div class="category">
    <my-header :sort="data" />
    <article-list :articlelist="data.list" />
  </div>
</template>

<script>
import MyHeader from '@/components/hades/category/header'
import ArticleList from '@/components/hades/index/articlelist'
export default {
  layout: 'hades',
  components: { MyHeader, ArticleList },
  head() {
    return {
      title: `${this.$route.params.name} | HADES`
    }
  },
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
    return { data: obj }
  },
  created() {
    console.log(123)
  }
}
</script>

<style lang="scss" scoped>

</style>
