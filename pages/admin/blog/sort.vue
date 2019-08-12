<!--
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-12 23:07:52
 * @Description: 种类
 -->

<template>
  <div class="table">
    <div class="table-title">
      <i class="iconfont icon-wenzhang" />
      博客种类
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
            <el-button type="primary" icon="el-icon-plus" @click="addBtn" />
          </el-tooltip>
          <el-tooltip effect="dark" content="刷新" placement="top-end">
            <el-button type="primary" icon="el-icon-refresh" @click="refreshBtn" />
          </el-tooltip>
        </div>
      </div>

      <el-table
        v-loading="loading"
        :data="blogData.slice((page-1)*size,(page)*size)"
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
          prop="id"
          align="center"
        />
        <el-table-column
          label="分类"
          prop="sort"
          align="center"
        />
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="editBtn(scope)"
            >
              编辑
            </el-button>
            <el-button
              type="text"
              size="small"
              style="color:red"
              @click="deleteBtn(scope)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :page-size="size"
        :total="blogData.length"
        @prev-click="paginationBtn"
        @next-click="paginationBtn"
        @current-change="paginationBtn"
      />
      <!-- 弹出编辑框 -->
      <el-dialog
        title="编辑"
        :visible.sync="dialogVisible"
        width="30%"
      >
        <el-form label-position="right" label-width="70px">
          <el-form-item label="ID：">
            <el-input v-model="dialogData.id" disabled placeholder="ID自动生成" />
          </el-form-item>
          <el-form-item
            label="分类："
            :rules="{
              required: true, message: '不能为空', trigger: 'blur'
            }"
          >
            <el-input v-model="dialogData.sort" />
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
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
      dialogData: '',
      page: 1,
      size: 5
    }
  },
  computed: {
    blogData() {
      return this.$store.state.blog.blogSort.filter((item) => {
        if ((item.sort.toUpperCase()).indexOf(this.filterkey.toUpperCase()) >= 0) {
          return item
        }
      })
    }
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('blog/getBlogSort')
    ])
  },
  methods: {
    editBtn(e) {
      this.dialogVisible = true
      this.dialogData = e.row
    },
    // 添加按钮
    addBtn() {
      this.dialogVisible = true
      this.dialogData = {
        id: '',
        sort: ''
      }
    },
    // 刷新按钮
    refreshBtn() {
      setTimeout(() => {
        this.$store.dispatch('blog/getBlogSort')
      }, 500)
    },
    // 删除按钮
    deleteBtn(e) {
      console.log(e.row.id)
      this.$axios.post(api.deleteSort, { id: e.row.id })
      this.refreshBtn()
    },
    // 提交方法
    submit() {
      console.log(this.dialogData)
      if (this.dialogData.id === '') {
        delete this.dialogData.id
        this.$axios.post(api.inSort, this.dialogData)
      } else {
        this.$axios.post(api.upDataSort, this.dialogData)
      }
      this.refreshBtn()
      this.dialogVisible = false
    },
    // 上一页,下一页
    paginationBtn(e) {
      this.page = e
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
    .pagination{
      padding: 20px 10px 10px;
      text-align: right;
    }
  }
}
</style>
