<template>
  <div
    class="tag"
    :class="ceiling?'is_fixed':''"
  >
    <div class="tag-title">
      <i class="iconfont icon-biaoqian1 " />
      <span>标签</span>
    </div>
    <div class="tag-list">
      <a v-for="(item,index) in tags" :key="index" href="/"> {{ item }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ceiling: false,
      tags: ['vue', 'html', 'css', 'javascript']

    }
  },
  mounted() { // 给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() { // 改变元素#searchBar的top值
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const tagsetTop = document.querySelector('.tag').offsetTop
      const hotHight = document.querySelector('.hot-artcile').clientHeight

      if (tagsetTop - scrollTop < 80) {
        this.ceiling = true
      }
      if (scrollTop - hotHight < 20) {
        this.ceiling = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tag {
  width: 360px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  color: var(--text-color);
  background-color: var(--header-background-color);
  .tag-title {
    height: 30px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    i {
      padding: 0 10px 0 0;
      color: var(--text-color);
    }
    span{
        font-weight: bold;
    }
  }
  .tag-list{

      a{
          display: inline-block;
          margin: 10px;
          padding: 2px 10px;
            border-radius: 3px;
            text-decoration: none;
            transition: all .3s ease;
            color: var(--text-color);
          border: 1px solid var(--border-color);
      }
     a:hover{

         background-color: var(--content-color);
      }
  }
}
.is_fixed {
  position: fixed;
  top: 60px;
}
</style>
