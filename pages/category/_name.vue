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
  computed: {
    data() {
      const articlelist = this.$store.state.data.articlelist.filter((item) => {
        if (item.name === this.$route.params.name) {
          return item
        }
      })
      const sort = this.$store.state.data.sort.filter((item) => {
        if (item.name === this.$route.params.name) {
          return item
        }
      })
      const obj = {
        sort: sort,
        num: articlelist.lenght,
        list: articlelist
      }
      return obj
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
