<!--
 * @Author: HADES
 * @Date: 2019-07-09 10:18:36
 * @LastEditTime: 2019-07-09 14:19:30
 * @Description: 归档
 -->

<template>
  <div class="archive-container">
    <div class="header">
      <i class="iconfont icon-guidang" />
      <div class="title">
        归档
      </div>
      <div class="totol">
        目前共计<span>{{ data.length }}</span>篇文章
      </div>
    </div>

    <div class="articles">
      <el-timeline>
        <el-timeline-item v-for="(item,index) in data" :key="index" :timestamp="item.time" placement="top">
          <el-card>
            <h4>{{ item.title }}</h4>
            <span>{{ item.des }}</span>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'hades',
  data() {
    return {
      data: [{
        id: 1,
        title: 'hades',
        original: 0,
        des: '123123321',
        time: '2019-04-02'
      }, {
        id: 2,
        title: 'vue',
        original: 0,
        des: '123123321',
        time: '2019-01-06'
      }, {
        id: 3,
        title: 'html',
        original: 0,
        des: '123123321',
        time: '2018-12-02'
      }, {
        id: 4,
        title: 'css',
        original: 0,
        des: '123123321',
        time: '2018-04-02'
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
.archive-container{
  flex: 1;
  padding: 10px;
  background-color: var(--header-background-color);
  .header{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border-bottom:1px solid var(--border-color);
    i{
      font-size: 36px;
      color: var(--text-color);
    }
    .title{
      padding: 5px 0;
      font-size: 1.1rem;
      font-weight: bold;
      color: var(--keyword-color);
    }
    .totol{
      padding: 5px 0;
      span{
        padding: 0 5px;
         color: var(--keyword-color);
      }
    }
  }
  .articles{
    padding: 20px 50px;
  }
}
</style>
