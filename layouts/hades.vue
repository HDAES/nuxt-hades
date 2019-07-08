<template>
  <div class="hades" :class="$store.state.theme.theme +'-theme'">
    <my-header />
    <div class="wrapper">
      <div class="main">
        <nuxt />
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
export default {
  components: {
    MyHeader, MyFooter, SiderBar
  },
  data() {
    return {

    }
  },
  created() {

  }
}
</script>

<style>
 @import '@/assets/css/theme.css';
 .hades{
     height: 100%;
     background-color: var(--content-color);
 }
 .main{
     width: var(--view-container);
     margin: 0 auto;
     padding-top: 80px;
 }
</style>
