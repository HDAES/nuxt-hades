<template>
  <div class="me">
    <div class="title">
      It's me
    </div>
    <ul>
      <li>
        <i
          class="iconfont icon-wo"
          style="color:#49A9EE"
        />
        <span>95后，热衷于新技术的学习和探讨，喜欢折腾,崇尚化繁为简理念，有轻微的强迫症,喜欢音乐，喜欢阅读，最近在减肥😂</span>
      </li>
      <li>
        <i
          class="iconfont icon-xihuan1"
          style="color:#F46E65"
        />
        <span>音乐，韩剧，乒乓，LOL，PUBG，Dota自走棋...</span>
      </li>
      <li>
        <i
          class="iconfont icon-53a6f8971e74b"
          style="color:#3DB8C1"
        />
        <span>轻微强迫症，像素眼，音乐热爱者，韩剧爱好者...</span>
      </li>
      <li>
        <i
          class="iconfont icon-locationicon"
          style="color:#948AEC"
        />
        <span>中国·重庆·北碚区·水土高新兴区</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.me {
  border-radius: 5px;
  background-color: var(--header-background-color);
  .title {
    padding: 20px 0;
    text-align: center;
    font-size: 24px;
    font-family: "Damion";
    color: var(--text-color);
  }
  ul {
    padding: 0 50px;
    li {
      display: flex;
      align-items: center;
      padding-bottom: 30px;
      i {
        padding-right: 15px;
        font-size: 18px;
      }
      span {
        color: var(--text-color);
      }
    }
  }
}
</style>
