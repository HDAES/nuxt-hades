<!--
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: HADES
 * @LastEditTime: 2019-07-31 23:42:39
 * @Description: 所有博客
 -->

<template>
  <div class="table">
    <div class="table-title">
      <i class="iconfont icon-wenzhang" />
      全部博客
    </div>
    <div class="container">
      <div class="table-control">
        <div class="left">
          <el-button size="small" type="primary" disabled>
            全选
          </el-button>
          <el-button size="small" type="danger" disabled>
            批量删除
          </el-button>
          <el-input v-model="filterkey" class="filter_input" placeholder="请输入内容" />
          <el-button size="small" type="primary" icon="el-icon-delete" class="search_button">
            搜索
          </el-button>
        </div>
        <div>
          <el-tooltip effect="dark" content="添加" placement="top-end">
            <el-button type="primary" icon="el-icon-plus" />
          </el-tooltip>
          <el-tooltip effect="dark" content="刷新" placement="top-end">
            <el-button type="primary" icon="el-icon-refresh" />
          </el-tooltip>
        </div>
      </div>

      <el-table :data="blogData">
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          label="ID"
          width="55"
          prop="id"
        />
        <el-table-column
          label="作者"
          prop="author"
        />
        <el-table-column
          label="来源"
          prop="original"
        />
        <el-table-column
          label="描述"
          prop="description"
        />
        <el-table-column
          label="阅读数量"
          prop="reading"
        />
        <el-table-column
          label="显示"
          prop="is_show"
        />
        <el-table-column
          label="博文"
          prop="id"
        />
        <el-table-column
          label="上传时间"
          prop="ceate_time"
        />
        <el-table-column
          label="更新时间"
          prop="updata_time"
          :formatter="time"
        />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      filterkey: '', // 筛选关键词
      blogData: []
    }
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('blog/asyncGetBlog')
    ])
  },
  created() {
    this.blogData = this.$store.state.blog.allBlog
  },
  methods: {
    time(a, b, c, d) {
      const date = new Date(c)
      const Str =
        date.getFullYear() +
        '-' +
        (date.getMonth() + 1) +
        '-' +
        date.getDate() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes()
      return Str
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  padding: 0 10px;
  .table-title{
    padding: 10px 0 0;
  }
  .container{
    margin-top: 20px;
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    .table-control{
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .left{
        display: flex;
        .filter_input,.search_button{
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
