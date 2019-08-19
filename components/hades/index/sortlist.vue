<!--
 * @Author: HADES
 * @Date: 2019-07-10 14:55:41
 * @LastEditTime: 2019-08-19 23:58:22
 * @Description:分类列表
 -->

<template>
  <div
    class="sort"
  >
    <div class="sort-title">
      <i class="iconfont icon-biaoqian1 " />
      <span>热门</span>
    </div>
    <div class="sort-list">
      <div
        v-for="(item,index) in sort"
        :key="index"
        class="sort-item"
      >
        <i class="iconfont icon" :class="item.icon" />
        <router-link :to="{path:`/category/${item.name}`}">
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/static/api'
export default {
  data() {
    return {
      sort: []
    }
  },
  created() {
    this.getSort()
  },
  methods: {
    getSort() {
      this.$axios.get(api.getHPcSort).then((res) => {
        this.sort = res
      })
    }
  }

}
</script>

<style lang="scss" scoped>
.sort {
  width: 360px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  color: var(--text-color);
  background-color: var(--header-background-color);
  .sort-title {
    height: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    i {
      padding: 0 10px 0 0;
      color: var(--text-color);
    }
    span {
      font-weight: bold;
    }
  }
  .sort-list {
    padding-top: 20px;
    .sort-item {
      display: flex;
      padding-bottom: 20px;
      i {
        margin-right: 10px;
        padding: 2px 10px;
        border-radius: 3px;
      }
      a {
        width: 80%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: var(--text-color);
        transition: all 0.3s ease;
      }
      a:hover {
        padding-left: 8px;
        color: var(--header-logo-color);
      }
    }
  }
}
</style>
