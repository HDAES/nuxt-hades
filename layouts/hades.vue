<!--
 * @Date: 2019-07-14 19:12:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-21 16:51:41
 * @Description:
 -->
<template>
  <div class="hades" :class="$store.state.theme.theme +'-theme'">
    <!-- <background /> -->
    <my-header />
    <div class="wrapper" :style="{minHeight:clientHeight- 200 +'px'}">
      <div class="main">
        <nuxt class="left" :class="fixed? '':'full'" />
        <div v-show="fixed" class="right">
          <hot-article />
          <div class="sort-tag" :class="ceiling?'is_fixed':''">
            <sort-list v-if="path !== '/'" />
            <my-tag />
          </div>
        </div>
      </div>
      <no-ssr>
        <aplayer :audio="audio" :lrc-type="3" :class="fixed?'':'audio'" :fixed="fixed" :mini="false" />
      </no-ssr>
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
      path: this.$route.path,
      fixed: true, // 播放吸底部
      audio: this.$store.state.data.audio
    }
  },
  watch: {
    $route(to, from) {
      this.path = to.path
      if (to.path === '/about' || to.path === '/music') {
        // 全屏
        console.log('full')
        if (to.path === '/music') {
          this.fixed = false
        }
      } else {
        this.fixed = true
      }
    }
  },

  created() {
    // console.log(this.$route.path)
    if (this.$route.path === '/about' || this.$route.path === '/music') {
      // 全屏
      this.full = true
      if (this.$route.path === '/music') {
        this.fixed = false
      }
    } else {
      this.full = false
      this.fixed = true
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
.wrapper{
  position: relative;
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
        width: 820px;
     }
     .full{
        width: 1200px;
     }
  }
  .audio{
    position: absolute;
    bottom: 0;
    width: 1200px;
    left: 50%;
    transform: translateX(-50%)
  }
}

 .is_fixed {
  position: fixed;
  top: 60px;
}
</style>
