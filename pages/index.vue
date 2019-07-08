<template>
  <div class="container">
    <column />
    <scroll-card />
    <article-list />
  </div>
</template>

<script>
import column from '@/components/hades/index/column'
import ScrollCard from '@/components/hades/index/scrollcard'
import ArticleList from '@/components/hades/index/articlelist'
export default {
  layout: 'hades',
  components: {
    column, ScrollCard, ArticleList
  }
}
</script>

<style lang='scss' scoped>
.container{
  width: 62% ;
  color: red;
}
</style>
