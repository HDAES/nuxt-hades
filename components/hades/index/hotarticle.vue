<!--
 * @Author: HADES
 * @Date: 2019-07-05 13:57:51
 * @LastEditTime: 2019-07-14 22:41:52
 * @Description:热门文章
 -->

<template>
  <div class="hot-artcile">
    <div class="hot-title">
      <i class="iconfont icon-wenzhang " />
      <span>热门文章</span>
    </div>
    <div class="hot-list">
      <div v-for="(item,index) in hot" :key="index" class="hot-item">
        <span>{{ index+1 }}</span>
        <router-link :to="{path:`/article/${item.id}`}">
          {{ item.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hot: []
    }
  },
  created() {
    this.getHot()
  },
  methods: {
    async getHot() {
      await this.$axios.get('/api/hades/hot').then((res) => {
        this.hot = res
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.hot-artcile{
  padding: 10px;
    border-radius: 5px;
    color: var( --text-color);
    background-color: var(--header-background-color);
    .hot-title{
        height: 30px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--border-color);
        i{
            padding: 0 10px 0 0;
            color: var( --text-color);
        }
    }
    .hot-list{
        padding-top: 20px;
        .hot-item{
            display: flex;
            padding-bottom: 20px;
            span{
                margin-right: 10px;
                padding: 2px 10px;
                border-radius: 3px;
                background-color: var(--border-color);
            }
            a{
                width: 80%;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: var( --text-color);
                transition: all .3s ease;
            }
            a:hover{
                padding-left: 8px;
                color: var( --header-logo-color);

            }
        }
    }
}
</style>
