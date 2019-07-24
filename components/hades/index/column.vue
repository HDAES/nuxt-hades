<!--
 * @Author: HADES
 * @Date: 2019-07-04 14:45:06
 * @LastEditTime: 2019-07-24 22:56:01
 * @Description: 4个栏目
 -->

<template>
  <div class="column">
    <div
      v-for="(item,index) in sort"
      :key="index"
      class="column-item"
    >
      <nuxt-link :to="{path:'/category/'+ item.name}">
        <img
          v-lazy="item.background"
          class="column-image"
          alt=""
        >
        <div class="mask" />
        <i
          class="iconfont icon"
          :class="item.icon"
        />
        <div class="text">
          {{ item.name }}
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sort: this.$store.state.data.sort
    }
  }
}
</script>
<style lang="scss" scoped>
.column {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .column-item {
    width: 24%;
    a {
      width: 100%;
      display: block;
      position: relative;
      text-align: center;
      .column-image {
        width: 100%;
        height: 110px;
        border-radius: 5px;
      }
      .mask {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 6px;
        background-color: var(--mask-color);
      }
      .icon {
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-18px);
        font-size: 36px;
        color: var(--header-background-color);
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
    }
  }
  .column-item:hover .mask {
    background-color: var(--mask-hover-color);
  }
}
</style>
