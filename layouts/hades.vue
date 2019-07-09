<template>
  <div class="hades" :class="$store.state.theme.theme +'-theme'">
    <my-header />
    <div class="wrapper">
      <div class="main">
        <nuxt />

        <div class="right">
          <hot-article />
          <my-tag />
        </div>
      </div>
    </div>
    <sider-bar />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '@/components/hades/public/header'
import MyFooter from '@/components/hades/public/footer'
import SiderBar from '@/components/hades/public/siderbar'
import HotArticle from '@/components/hades/index/hotarticle'
import MyTag from '@/components/hades/index/tag'
export default {
  components: {
    MyHeader, MyFooter, SiderBar, HotArticle, MyTag
  },
  data() {
    return {

    }
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
 @import '@/assets/css/theme.css';
 .hades{
     height: 100%;
     background-color: var(--content-color);
 }
 .main{
     width: var(--view-container);
     margin: 0 auto;
     padding-top: 80px;
     display: flex;
     .right{
        margin-left: 20px;
        width: 360px;
     }
 }
</style>
