<!--
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-11 22:47:26
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
          <el-button size="small" type="primary" icon="el-icon-search" class="search_button">
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

      <el-table
        v-loading="loading"
        :data="blogData"
        stripe
        highlight-current-row
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
      >
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
          width="100"
          prop="author"
        />
        <el-table-column
          label="来源"
          width="100"
          :formatter="Reprint"
          align="center"
          prop="original"
        />
        <el-table-column
          label="描述"
          show-overflow-tooltip
          width="250"
          prop="description"
        />
        <el-table-column
          label="阅读数量"
          width="80"
          align="center"
          prop="reading"
        />
        <el-table-column
          label="显示"
          align="center"
        >
          <template slot-scope="scope">
            <el-tooltip :content="'Switch value: ' + scope.row.is_show" placement="top">
              <el-switch
                :value="scope.row.is_show"
                active-color="#13ce66"
                inactive-color="#ff4949"
                :active-value="0"
                :inactive-value="1"
                @change="changeState(scope.row)"
              />
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column
          label="博文"

          align="center"
        >
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handlePreview(scope.row)">
              预览
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="上传时间"
          prop="ceate_time"
          :formatter="time"
        />
        <el-table-column
          fixed="right"
          label="更新时间"
          prop="updata_time"
          :formatter="time"
        />
      </el-table>

      <el-dialog
        :title="dialogData.title"
        :visible.sync="dialogVisible"
        width="60%"
      >
        <no-ssr>
          <mavon-editor
            v-model="dialogData.content"
            default-open="preview"
            :subfield="false"
            :toolbars-flag="false"
          />
        </no-ssr>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import api from '@/static/api'
export default {
  layout: 'admin',
  data() {
    return {
      filterkey: '', // 筛选关键词
      value: 100,
      loading: false,
      dialogVisible: false, // 填出框
      dialogData: {},
      subfield: false,
      defaultOpen: 'preview',
      toolbarsFlag: false,
      boxShadow: false
    }
  },
  computed: {
    blogData() {
      return this.$store.state.blog.allBlog.filter((item) => {
        if ((item.title).indexOf(this.filterkey) >= 0) {
          return item
        }
      })
    }
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('blog/asyncGetBlog')
    ])
  },
  methods: {
    // 格式化时间
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
    },
    // 格式化原创or转载
    Reprint(a, b, c) {
      if (c === 0) {
        return 'Original'
      } else if (c === 1) {
        return 'Reprint'
      }
    },
    // 改变显示状态
    async changeState(e) {
      const options = {
        id: e.id,
        is_show: e.is_show === 0 ? 1 : 0
      }
      await this.$axios.post(api.changeState, options)
      await this.$store.dispatch('blog/asyncGetBlog')
    },
    // 预览
    handlePreview(e) {
      this.dialogVisible = true
      this.dialogData = e
    }
  }
}
</script>

<style lang="scss" scoped>
.table{
  padding: 0 10px;
  .table-title{
    padding: 10px 0 ;
  }
  .container{
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
