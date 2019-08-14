<!--
 * @Author: HADES
 * @Date: 2019-08-14 13:52:08
 * @LastEditTime: 2019-08-14 17:54:28
 * @Description: 分类
 -->
<template>
  <div class="assort">
    <div class="assort-title">
      <i class="iconfont el-icon-s-platform" />
      PC分类
    </div>

    <div class="assort-container">
      <el-tabs type="card" class="card" :value="tabsIndex" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in pcSort" :key="index" :label="item.name" :name="item.pc_sort_id+''" />
      </el-tabs>
      <el-table :data="c_pcBlog">
        <el-table-column
          prop="id"
          label="ID"
          width="50"
          align="center"
        />
        <el-table-column
          prop="title"
          label="标题"
        />
        <el-table-column
          prop="description"
          label="描述"
        />
        <el-table-column
          prop="pc_sort"
          label="所属栏目"
          :formatter="formatterPcSort"
        />
      </el-table>

      <i class="icon el-icon-circle-plus-outline addbtn" @click="add" />

      <el-dialog
        title="提示"
        :visible.sync="dialog"
        width="40%"
      >
        <el-form label-width="80px">
          <el-form-item label="种类：">
            <el-select v-model="sortId" placeholder="选择类别" @change="chooseSort">
              <el-option
                v-for="(item,index) in sort"
                :key="index"
                :label="item.sort"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="选择类别">
            <el-select v-model="blogId" placeholder="选择类别" :disabled="Is_disabled">
              <el-option
                v-for="(item,index) in sortTitle"
                :key="index"
                :label="item.title"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialog = false">取 消</el-button>
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
      pcSort: [], // pc分类
      sortId: '', // 博客分类ID
      blogId: '', // 博客ID
      sortTitle: [], // 博客分类下的文章详情数组
      allBlog: [], // 所有博客
      pcBlog: [], // 当前PC分类下的博客
      tabsIndex: '1',
      dialog: false,
      Is_disabled: true
    }
  },
  computed: {
    c_pcBlog() {
      return this.pcBlog
    },
    sort() {
      return this.$store.state.blog.blogSort
    }

  },
  async fetch({ store, params }) {
    await Promise.all([
      store.dispatch('blog/getBlogSort')
    ])
  },
  created() {
    this.getPcSort()
    this.getBlog()
  },
  methods: {
    // 获取PC端分类
    async getPcSort() {
      await this.$axios.get(api.getPcSort).then((res) => {
        this.pcSort = res
        console.log(res[0])
        this.tabsIndex = res[0].pc_sort_id + ''
      })
    },
    // 获取所有文章详情
    async getBlog() {
      await this.$axios.get(api.getBlogDetails).then((res) => {
        this.allBlog = res
        this.pcBlog = res.filter((item) => {
          if (item.pc_sort === parseInt(this.tabsIndex)) {
            return item
          }
        })
      })
    },
    // 提交
    submit() {
      console.log(this.blogId, this.tabsIndex)
    },
    // 改变tabs状态
    handleClick(e) {
      const pcBlog = []
      this.allBlog.map((item) => {
        if (item.pc_sort === parseInt(e.name)) {
          return pcBlog.push(item)
        }
      })
      this.pcBlog = pcBlog
    },
    // 选择博文的种类
    chooseSort(e) {
      this.blogId = ''
      this.$axios.post(api.getBlogTitle, { sort_id: e }).then((res) => {
        this.sortTitle = res
        if (res.length !== 0) {
          this.Is_disabled = false
        } else {
          this.Is_disabled = true
        }
      })
    },
    // 格式化pc分类
    formatterPcSort(e) {
      let a = ''
      this.pcSort.map((item) => {
        if (item.pc_sort_id === e.pc_sort) {
          a = item.name
        }
      })
      return a
    },
    // 添加PC分类
    add() {
      this.dialog = true
    }
  }
}
</script>
<style lang="scss" scoped>
.assort{
  padding: 0 10px;
    .assort-title{
      padding: 0 10px;
    }
    .assort-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 20px 0;
      .card{
        align-self: flex-start;
      }
      .addbtn{
        font-size: 48px;
        transition: all 1s;
        margin: 20px 0 0;
      }
      .addbtn:hover{
        transform:rotate(180deg);
      }
    }

}
</style>
