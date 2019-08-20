<!--
 * @Date: 2019-07-14 19:12:42
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-20 21:28:58
 * @Description:
 -->
<template>
  <div class="article">
    <div class="article-header">
      <div class="label" />
      <span class="o_r">原创</span>
      <div class="title">
        {{ articleData.title }}
      </div>
      <div class="des">
        {{ articleData.description }}
      </div>
      <div class="fot">
        <i class="iconfont " :class="articleData.icon" />
        <span>{{ articleData.name }}</span>
        <span> {{ articleData.reading }}</span>
        次阅读
      </div>
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
// import axios from 'axios'
export default {
  layout: 'hades',
  data() {
    return {
      id: this.$route.params.name,
      subfield: false,
      defaultOpen: 'preview',
      toolbarsFlag: false,
      boxShadow: false,
      handbook: '#### how to use mavonEditor in nuxt.js',
      articleData: ''
    }
  },
  // async asyncData(context) {
  //   const data = await axios.post('/api/hades/article', { id: 7 })
  //   return { articleDataproject: data }
  // },
  created() {
    this.getArticle()
  },
  methods: {
    async getArticle() {
      await this.$axios.post('/api/hades/article', { id: this.$route.params.name }).then((res) => {
        this.articleData = res
        this.handbook = res.content
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.article {
  background-color: var(--header-background-color);
  .article-header {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 50px 0 10px;
    .label {
      position: absolute;
      left: 0;
      top: 0;
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
    .title{
      color: var(--header-logo-color);
      font-size: 1.5rem;
    }
    .des{
        padding: 5px 0;
         color: var(--text-color);
    }
    .fot{
      color: var(--text-color);
      span{
        padding:0 5px;
      }
    }
  }
}
</style>
