<template>
  <div class="article">
    <div class="article-header">
      <div class="abc" />
      <span class="o_r">原创</span>
    </div>
    <no-ssr>
      <mavon-editor
        v-model="handbook"
        :toolbars-flag="toolbarsFlag"
        :subfield="subfield"
        :default-open="defaultOpen"
        :box-shadow="boxShadow"
      />
    </no-ssr>
  </div>
</template>

<script>
export default {
  layout: 'hades',
  data() {
    return {
      id: this.$route.params.name,
      subfield: false,
      defaultOpen: 'preview',
      toolbarsFlag: false,
      boxShadow: false,
      handbook: '#### how to use mavonEditor in nuxt.js'
    }
  }
}
</script>

<style lang='scss' scoped>
.article {
  background-color: var(--header-background-color);
  .article-header {
      position: relative;
    .abc {
      width: 0;
      height: 0;
      border-bottom: 60px solid var(--header-background-color);
      border-left: 60px solid var(--text-color);
    }
    .o_r {
      position: absolute;
      top: 2px;
      left: 2px;
      color: var(--content-color);
    }
  }
}
</style>
