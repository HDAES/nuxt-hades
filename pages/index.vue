<template>
  <div class="container">
    <column />
    <scroll-card />
    <article-list :articlelist="$store.state.data.articlelist" />
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
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('data/asyncGetSort'),
      store.dispatch('data/asyncGetArticleList')
    ])
  },
  created() {
  }
}
</script>
