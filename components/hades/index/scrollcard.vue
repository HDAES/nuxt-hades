<!--
 * @Date: 2019-07-04 22:55:06
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-07-08 17:28:17
 * @Description:   上下滑块
 -->

<template>
  <div class="scroll-card">
    <i class="iconfont icon-sound card-icon" />
    <ul :style="{ top: scroll+'px'}">
      <li>今天会很残酷，明天会更残酷，后天会很美好，但大部分人会死在明天晚上。</li>
      <li>晚上想想千条路，早上醒来走原路。</li>
      <li>"Expensive" has never been its weakness, "poor" has always been your weakness.</li>
    </ul>
    <div class="scroll-control">
      <i class="iconfont icon-31shouqi" @click="up" />
      <i class="iconfont icon-31xiala" @click="under" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scroll: 0
    }
  },
  methods: {
    under() {
      if (this.scroll === -100) {
        this.scroll = 0
      } else {
        this.scroll -= 50
      }
    },
    up() {
      if (this.scroll !== 0) {
        this.scroll += 50
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-card{
    position: relative;
    margin-top: 20px;
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: var(--header-background-color);
    overflow: hidden;
    .card-icon{
        line-height: 50px;
        width:5%;
        color: var(--header-logo-color);
        font-size: 24px;
        text-align: center;
        display: block;
    }
    ul{
        position: absolute;
        width: 90%;
        left: 5%;
        transition:top .5s;
        li{
            height: 50px;
            padding: 0 10px;
            line-height: 50px;
            color: var(--header-logo-color);
        }
    }
    .scroll-control{
        position: absolute;
        width: 5%;
        left: 95%;
        top:0;
        display: flex;
        flex-direction: column;
        i{
            height: 25px;
            line-height: 25px;
            text-align: center;
            color: var(--text-color);
        }
        i:hover{
             color: var(--header-logo-color);
        }
    }
}
</style>
