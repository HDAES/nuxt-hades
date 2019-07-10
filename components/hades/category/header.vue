<template>
  <div class="category-header">
    <img v-lazy="data.image" alt="">
    <div class="mask" />
    <i class="iconfont icon" :class="data.icon" />
    <div class="text">
      {{ data.name }}
    </div>
    <div class="totol">
      共搜索到{{ data.num }}篇文章
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        name: '戒码一生',
        image: 'http://qiniu.xl686.com/5d18ebaa2a941.png',
        icon: 'icon-ai-code',
        num: '123'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.category-header{
    position: relative;
    height: 150px;
    width: 100%;
    overflow: hidden;

    img{
        width: 100%;
    }
    .icon{
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-18px);
        font-size: 36px;
        color: var(--header-background-color);
    }
    .mask{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mask-color);
        transition: all .2s ease;
    }
    .text {
        position: absolute;
        top: 72px;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        color: var(--header-background-color);
        text-shadow: 0 0 0.1em, 0 0 0.3em;
      }
    .totol{
        position: absolute;
        top: 100px;
        width: 100%;
        text-align: center;
        font-size: 1rem;
        font-size: .8rem;
        color: var(--header-background-color);
    }
}
.category-header:hover .mask {
    background-color: var(--mask-hover-color);
  }
</style>
