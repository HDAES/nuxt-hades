<!--
 * @Author: HADES
 * @Date: 2019-07-09 10:18:36
 * @LastEditTime: 2019-07-14 22:31:11
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
        目前共计<span>{{ archive.length }}</span>篇文章
      </div>
    </div>

    <div class="articles">
      <el-timeline>
        <el-timeline-item v-for="(item,index) in archive" :key="index" :timestamp="item.ceate_time" placement="top">
          <el-card>
            <nuxt-link :to="{path:`/article/${item.id}` }">
              <h4>{{ item.title }}</h4>
              <span>{{ item.description }}</span>
            </nuxt-link>
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
      archive: []
    }
  },

  created() {
    this.getArchive()
  },
  methods: {
    async getArchive() {
      await this.$axios.get('/api/hades/archive').then((res) => {
        this.archive = res.map((item) => {
          item.ceate_time = item.ceate_time.slice(0, 10)
          return item
        })
      })
    }
  }

}
</script>

<style lang='scss' scoped>
.archive-container{
  flex: 1;
  padding: 10px;
  background-color: var(--header-background-color);
  z-index: 2;
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
