<!--
 * @Date: 2019-07-26 23:17:05
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-20 22:47:11
 * @Description:
 -->
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
      store.dispatch('data/asyncGetArticleList'),
      store.dispatch('data/asyncGetSay')
    ])
  },
  created() {
  }
}
</script>
