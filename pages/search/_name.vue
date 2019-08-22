<!--
 * @Date: 2019-08-19 22:39:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-22 16:20:49
 * @Description:
 -->
<template>
  <div class="search">
    <my-header :sort="obj" />
    <article-list :articlelist="obj.list" />
  </div>
</template>
<script>
import MyHeader from '@/components/hades/category/header'
import ArticleList from '@/components/hades/index/articlelist'
export default {
  layout: 'hades',
  components: { MyHeader, ArticleList },
  data() {
    return {
      obj: {
        sort: [{ background: 'http://qiniu.xl686.com/hades_search.png', icon: 'icon-sousuo', name: '搜索结果' }],
        list: []
      }
    }
  },
  watch: {
    $route() {
      this.search(this.$route.query.keywords)
    }
  },
  created() {
    this.search(this.$route.query.keywords)
  },
  methods: {
    // 搜索
    async search(keywords) {
      await this.$axios.post('/api/hades/search', { keywords: keywords }).then((res) => {
        this.obj.list = res
      })
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
