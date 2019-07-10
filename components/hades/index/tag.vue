<template>
  <div
    class="tag"
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
      tags: ['vue', 'html', 'css', 'javascript']
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
</style>
