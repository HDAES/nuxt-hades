<!--
 * @Date: 2019-07-04 22:55:06
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-20 23:10:09
 * @Description:   上下滑块
 -->

<template>
  <div class="scroll-card">
    <i class="iconfont icon-sound card-icon" />
    <ul :style="{ top: scroll+'px'}">
      <li v-for="(item,index) in say" :key="index">
        <span>{{ item.content }}</span>
        <span style=" text-align: right">-- {{ item.author }}</span>
      </li>
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
      scroll: 0,
      say: this.$store.state.data.say,
      timmer: setInterval(() => {
        this.scroll = this.scroll - 50
        if (this.scroll === -150) {
          this.scroll = 0
        }
      }, 5000)
    }
  },
  destroyed() {
    clearInterval(this.timmer)
  },
  methods: {
    // 轮播函数
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
            display: flex;
            justify-content: space-between;
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
