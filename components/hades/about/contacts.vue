<template>
  <div class="contacts">
    <div class="title">
      Contacts
    </div>
    <ul>
      <li>
        <a href="https://github.com/HDAES" target="_blank">
          <i class="iconfont icon-git" />
          <span>GitHub</span>
        </a>
      </li>
      <li>
        <a href="mailto:1005710179@qq.com" target="_blank" style="color:#FFB53C">
          <i class="iconfont icon-youxiang" />
          <span>Email</span>
        </a>
      </li>
      <li>
        <a href="https://music.163.com/#/user/home?id=123215647" target="_blank" style="color:#E20000">
          <i class="iconfont icon-musiccloud" />
          <span>music</span>
        </a>
      </li>
      <li>
        <a href="https://juejin.im/user/5bb0ab57e51d450e5767288f" target="_blank" style="color:#007FFF">
          <i class="iconfont icon-juejin" />
          <span>juejin</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contacts{
border-radius: 5px;
  background-color: var(--header-background-color);
  .title {
    padding: 10px 0;
    text-align: center;
    font-size: 24px;
    font-family: "Damion";
    color: var(--text-color);
  }
  ul{
      padding: 20px 0;
      display: flex;
      li{
          flex: 1;
          a{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            i{
              font-size: 24px;
            }
            span{
              padding: 10px 0;
            }
          }

      }
  }
}
</style>
