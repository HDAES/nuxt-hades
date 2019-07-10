<template>
  <div class="category">
    <my-header />
    <article-list />
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
  }
}
</script>

<style lang="scss" scoped>

</style>
