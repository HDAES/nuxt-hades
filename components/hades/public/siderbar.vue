<!--
 * @Author: HADES
 * @Date: 2019-07-04 11:33:08
 * @LastEditTime: 2019-07-08 16:50:17
 * @Description:'页面右边悬浮按钮'
 -->
<template>
  <div class="right-card" :style="{ height: height +'px'}">
    <div class="card-item">
      <i class="iconfont icon-yinle" />
    </div>
    <div class="card-item" @click="change">
      <i class="iconfont" :class="theme?'icon-yejianmoshi':'icon-taiyang-copy'" />
    </div>
    <div class="card-item" @click="top">
      <i class="iconfont icon-31huidaodingbu" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      theme: true,
      height: 72
    }
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll) // 监听（绑定）滚轮滚动事件
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll) //  离开页面清除（移除）滚轮滚动事件
  },
  methods: {
    change() {
      this.theme = !this.theme
      this.$store.dispatch('theme/changeTheme')
    },
    top() {
      window.scroll(0, 0)
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 200) {
        this.height = 108
      } else if (scrollTop < 200) {
        this.height = 72
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .right-card{
        position: fixed;
        right: 0;
        bottom: 50px;
        width: 36px;
        overflow: hidden;
        box-shadow: 0 0 14px 2px var(--box-shadow-color);
        transition: all .2s ease;
        .card-item{
            height: 36px;
            text-align: center;
            line-height: 36px;
            cursor: pointer;
            transition: all .3s ease;
            box-sizing: border-box;
            margin-top: 1px;
            background-color: var(--header-background-color);
            i{
                font-size: 18px;
                color: var(--text-color);
            }
        }
        .card-item:hover{
            background-color: var(--card-hover-color);
        }
    }
</style>
