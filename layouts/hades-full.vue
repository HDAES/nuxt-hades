<template>
  <div class="hades-full" :class="$store.state.theme.theme +'-theme'">
    <my-header />
    <div class="wrapper">
      <nuxt />
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

<style lang="scss" scoped>
 @import '@/assets/css/theme.css';
 .hades-full{
     height: 100%;
     background-color: var(--content-color);
 }
</style>
