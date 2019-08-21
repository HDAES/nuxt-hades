<!--
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-21 14:13:30
 * @Description:
 -->
<template>
  <header>
    <div class="wrapper">
      <nuxt-link to="/">
        <img src="~static/image/logo.png" alt="logo">
        <span class="logo-text">hades.me</span>
      </nuxt-link>
      <div class="tabs">
        <nuxt-link v-for="(item,index) in tabs" :key="index" :to="item.index">
          <span :class="route == item.index?'tabs_active':''">{{ item.name }}</span>
        </nuxt-link>
      </div>
      <div class="search">
        <input type="text" placeholder="搜索文章" name>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        {
          index: '/',
          name: '首页'
        },
        {
          index: '/archive',
          name: '归档'
        },
        {
          index: '/about',
          name: '关于'
        },
        {
          index: '/admin/login',
          name: '后台管理系统'
        }
      ],
      route: this.$route.path
    }
  },
  watch: {
    $route(to, from) {
      this.route = to.path
    }
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Damion";
  src: url('../../../assets/font/font.ttf');
}
header {
  position: fixed;
  width: 100%;
  height: 60px;
  background-color: var(--header-background-color);
  box-shadow: 0 0 14px 2px var(--box-shadow-color);
  opacity: 0.8;
  z-index: 99;
  .wrapper {
    display: flex;
    width: var(--view-container);
    height: 100%;
    margin: 0 auto;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      img {
        height: 40px;
      }
      .logo-text {
        font-family: "Damion";
        font-size: 30px;
        padding: 0 10px 0 15px;
        color: var(--header-logo-color);
      }
    }
    .tabs {
      flex: 1;
      display: flex;
      align-items: stretch;
      padding-left: 10px;
      a {
        line-height: 60px;
        padding: 0 10px;
        cursor: pointer;
        position: relative;
        font-size: 14px;
        font-weight: bold;
        color: var(--text-color);
        &::after {
          content: "";
          width: 0;
          height: 2px;
          background-color: #00adb5;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          transition: width 0.4s;
        }
      }
      a:hover {
        color: var(--header-logo-color);
        &::after {
          width: 100%;
        }
      }
      .tabs_active{
        color: var(--header-logo-color);
      }
    }
    .search {
      display: flex;
      align-items: center;
      input {
        border: none;
        height: 30px;
        padding: 10px 20px;
        outline: none;
        background-color: var(--content-color);
      }
    }
  }
}

</style>
