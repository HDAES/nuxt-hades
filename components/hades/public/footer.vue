<template>
  <!-- 底部 -->
  <footer>
    <div class="copyright">
      <span>版权所有 © 2019 </span>
      <nuxt-link to="/">
        hades
      </nuxt-link>
      <span>保留所有权利</span>
      <a href="http://www.miitbeian.gov.cn/" target="_blank">渝ICP备18007187号-1</a>
    </div>
    <div class="support">
      <span>Powered by</span>
      <a href="https://cn.vuejs.org/">vuejs</a>
      <span style="padding-left:5px">Thinks for </span>
      <a href="https://jooger.me/">jooger.me</a>
      <span>design</span>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
footer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100px;
  margin-top: 100px;
  background-color: var(--header-background-color);
  .copyright{
    a{
      padding: 0 5px;
      text-decoration: none;

    }
    a:hover{
      color:var(--header-logo-color);
    }
  }
  .support{
    padding: 5px 0;
    a{
      padding: 0 5px;
      color:var(--text-color);
    }
  }
}
</style>
