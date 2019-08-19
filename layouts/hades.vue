<!--
 * @Date: 2019-07-14 19:12:42
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-19 23:52:00
 * @Description:
 -->
<template>
  <div class="hades" :class="$store.state.theme.theme +'-theme'">
    <!-- <background /> -->
    <my-header />
    <div class="wrapper" :style="{minHeight:clientHeight- 220 +'px'}">
      <div class="main">
        <div class="left">
          <nuxt />
        </div>
        <div class="right">
          <hot-article />
          <div class="sort-tag" :class="ceiling?'is_fixed':''">
            <sort-list v-if="path !== '/'" />
            <my-tag />
          </div>
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
import SortList from '@/components/hades/index/sortlist'
// import Background from '@/components/common/background'
export default {
  components: {
    MyHeader, MyFooter, SiderBar, HotArticle, MyTag, SortList
  },
  data() {
    return {
      ceiling: false,
      clientHeight: '',
      path: this.$route.path
    }
  },
  watch: {
    $route(to, from) {
      this.path = to.path
    }
  },

  mounted() {
    // 获取浏览器的高度
    const _this = this
    this.clientHeight = `${document.documentElement.clientHeight}`
    window.onresize = function () {
      _this.clientHeight = `${document.documentElement.clientHeight}`
    }
    // 给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      // 改变元素#searchBar的top值
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const hotHight = document.querySelector('.hot-artcile').clientHeight
      if (hotHight - scrollTop < 80) {
        this.ceiling = true
      }
      if (scrollTop - hotHight < 20) {
        this.ceiling = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '@/assets/css/theme.css';
 .hades{

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
     .left{
        flex: 1
     }
 }
 .is_fixed {
  position: fixed;
  top: 60px;
}
</style>
