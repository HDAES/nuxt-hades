<!--
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-08-13 17:55:44
 * @Description: 详情
 -->

<template>
  <div class="table">
    <div class="table-title">
      <i class="iconfont icon-wenzhang" />
      博客详情
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
        :data="blogDetails.slice((page-1)*size,(page)*size)"
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
          width="55"
          align="center"
        />
        <el-table-column
          label="分类"
          prop="sort"
          width="150"
          align="center"
        />
        <el-table-column
          label="标题"
          prop="title"
          align="center"
        />
        <el-table-column
          label="作者"
          prop="author"
          width="100"
          align="center"
        />
        <el-table-column
          label="描述"
          prop="description"
          align="center"
        />
        <el-table-column
          label="阅读数量"
          prop="reading"
          width="100"
          align="center"
        />
        <el-table-column
          label="图片"
          width="100"
          align="center"
        >
          <template slot-scope="scope">
            <div v-if="scope.row.image" @click="upload(scope.row)">
              <el-image :src="scope.row.image" />
            </div>
            <div v-else>
              <el-button type="text" style="color:#FF6100" @click="upload(scope.row)">
                上 传
              </el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="Is_原创"
          prop="original"
          width="120"
          :formatter="formatterIs"
          align="center"
        />
        <el-table-column
          label="显示"
          width="100"
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
        :total="blogDetails.length"
        @prev-click="paginationBtn"
        @next-click="paginationBtn"
        @current-change="paginationBtn"
      />
      <!-- 弹出编辑框 -->
      <el-dialog
        title="编辑"
        :visible.sync="dialogVisible"
        width="40%"
      >
        <el-form label-position="right" label-width="100px">
          <el-form-item label="ID：">
            <el-input v-model="dialogData.id" disabled placeholder="ID自动生成" />
          </el-form-item>
          <el-form-item
            label="分类："
          >
            <el-select v-model="dialogData.sort_id" placeholder="请选择">
              <el-option
                v-for="item in blogSort"
                :key="item.id"
                :label="item.sort"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="标题：">
            <el-input v-model="dialogData.title" />
          </el-form-item>
          <el-form-item label="作者：">
            <el-input v-model="dialogData.author" />
          </el-form-item>
          <el-form-item label="描述：">
            <el-input v-model="dialogData.description" />
          </el-form-item>
          <el-form-item label="来源：">
            <el-select v-model="dialogData.original" placeholder="请选择">
              <el-option
                label="原创"
                :value="0"
              />
              <el-option
                label="转载"
                :value="1"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="是否显示：">
            <el-select v-model="dialogData.original" placeholder="请选择">
              <el-option
                label="显示"
                :value="0"
              />
              <el-option
                label="隐藏"
                :value="1"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submit">确 定</el-button>
        </span>
      </el-dialog>
      <!-- 弹出图片放大 -->
      <el-dialog title="图片" :visible.sync="dialoUpload" width="40%">
        <el-image :src="uploadImage" width="100%" alt="" />
        <br>
        <el-upload
          id="upload"
          action="http://localhost:3001/api/admin/wechat/upload"
          :headers="{
            'enctype':'multipart/form-data'
          }"
          :on-error="handleError"
          :on-success="handleSuccess"
        >
          <el-button size="small" type="primary">
            点击上传
          </el-button>
        </el-upload>
        <span slot="footer">
          <el-button type="primary" @click="changeImage">修改</el-button>
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
      dialogVisible: false, // 弹出框
      dialoUpload: false, // 图片放大
      dialogData: '',
      blogSort: this.$store.state.blog.blogSort,
      size: 7,
      page: 1,
      uploadImage: '',
      uploadId: ''
    }
  },
  computed: {
    blogDetails() {
      return this.$store.state.blog.blogDetails
      // .filter((item) => {
      //   if ((item.sort.toUpperCase()).indexOf(this.filterkey.toUpperCase()) >= 0) {
      //     return item
      //   }
      // })
    }
  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('blog/getBlogDetails'),
      store.dispatch('blog/getBlogSort')
    ])
  },
  created() {
    // console.log(this.$store.state.blog.blogDetails)
    // console.log(this.blogSort)
  },
  methods: {
    editBtn(e) {
      this.dialogVisible = true
      this.dialogData = {
        id: e.row.id,
        sort_id: e.row.sort_id,
        title: e.row.title,
        author: e.row.author,
        description: e.row.description,
        original: e.row.original,
        is_show: e.row.is_show
      }
    },
    // 添加按钮
    addBtn() {
      this.dialogVisible = true
      this.dialogData = {
        id: '',
        sort_id: '',
        title: '',
        author: '',
        description: '',
        original: 0,
        is_show: 0
      }
    },
    // 刷新按钮
    refreshBtn() {
      setTimeout(() => {
        this.$store.dispatch('blog/getBlogDetails')
      }, 500)
    },
    // 删除按钮
    deleteBtn(e) {
      console.log(e.row.id)
      this.$axios.post(api.delDataDetails, { id: e.row.id })
      this.refreshBtn()
    },
    // 提交方法
    submit() {
      console.log(this.dialogData)
      if (this.dialogData.id === '') {
        delete this.dialogData.id
        this.$axios.post(api.insertDataDetails, this.dialogData)
      } else {
        this.$axios.post(api.upDataDetails, this.dialogData)
      }
      this.refreshBtn()
      this.dialogVisible = false
    },
    // 改变显示状态
    async changeState(e) {
      const options = {
        id: e.id,
        is_show: e.is_show === 0 ? 1 : 0
      }
      await this.$axios.post(api.changeState, options)
      this.refreshBtn()
    },
    // 上一页,下一页
    paginationBtn(e) {
      this.page = e
    },
    // 格式化是否原创或转载
    formatterIs(e) {
      if (e.original === 0) {
        return '原创'
      } else {
        return '转载'
      }
      // console.log(e.original)
    },
    // 上传图片事件
    upload(e) {
      this.dialoUpload = true
      this.uploadImage = e.image
      this.uploadId = e.id
    },
    // 修改图片事件
    changeImage() {
      const options = {
        id: this.uploadId,
        image: this.uploadImage
      }
      this.$axios.post(api.uploadImage, options).then((res) => {
        console.log(res)
        this.dialoUpload = false
        this.refreshBtn()
      })
    },
    // 上传图片失败返回
    handleError() {
      this.$notify.error({
        title: '上传失败',
        message: '图片上传失败'
      })
    },
    // 上传图片成功
    handleSuccess(res) {
      if (res.code === -1) {
        console.log(res.msg)
      } else {
        this.uploadImage = res.msg
      }
      console.log(res)
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
