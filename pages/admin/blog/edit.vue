<!--
 * @Author: HADES
 * @Date: 2019-07-30 14:43:29
 * @LastEditTime: 2019-08-19 21:29:29
 * @Description: 编辑博文
 -->
<template>
  <div class="edit">
    <div class="edit-title">
      <i class="iconfont icon-wenzhang" />
      编辑
    </div>

    <div class="container">
      <div class="edit-contorl">
        <div style="display:flex">
          <div class="item">
            <label>类别：</label>
            <el-select v-model="sortId" placeholder="选择类别" @change="chooseSort">
              <el-option
                v-for="(item,index) in sort"
                :key="index"
                :label="item.sort"
                :value="item.id"
              />
            </el-select>
          </div>
          <div class="item">
            <label>标题：</label>
            <el-select v-model="articleId" placeholder="选择类别" :disabled="Is_disabled" @change="chooseBlog">
              <el-option
                v-for="(item,index) in sortTitle"
                :key="index"
                :label="item.title"
                :value="item.id"
              />
            </el-select>
          </div>
        </div>
        <el-button class="save" type="primary" @click="submit">
          保存
        </el-button>
      </div>
      <no-ssr>
        <mavon-editor ref="md" v-model="article" class="article_md" />
      </no-ssr>
    </div>
  </div>
</template>

<script>
import api from '@/static/api'
export default {
  layout: 'admin',
  data() {
    return {
      sortId: '',
      sortTitle: [],
      articleId: '',
      Is_disabled: true,
      Is_insert: false,
      article: '',
      sort: []
    }
  },
  mounted() {
    this.getBlogSort()
  },
  methods: {
    // 获取博文分类
    async getBlogSort() {
      await this.$axios.get(api.getSort).then((res) => {
        this.sort = res
      })
    },
    // 选择要修改博文的种类
    chooseSort(e) {
      this.$axios.post(api.getBlogTitle, { sort_id: e }).then((res) => {
        this.sortTitle = res
        if (res.length === 0) {
          this.Is_disabled = true
        } else {
          this.Is_disabled = false
        }
        this.articleId = ''
        this.article = ''
      })
    },
    // 选择博文
    chooseBlog(e) {
      this.article = ''
      this.$axios.post(api.getArticleData, { id: e }).then((res) => {
        if (res.length === 0) {
          this.Is_insert = true
        } else {
          this.Is_insert = false
          this.article = res[0].content
        }
      })
    },
    // 保存
    submit() {
      if (this.article === '' || this.sortId === '' || this.articleId === '') {
        this.$message.error('不能为空')
      } else if (this.Is_insert) {
        // 新增
        this.$axiox.post(api.insertBlog, { id: this.articleId, content: this.article })
      } else {
        this.$axios.post(api.upDataBlog, { id: this.articleId, content: this.article })
      }
    }
  }

}
</script>

<style lang='scss' scoped>
.edit{
   padding: 0 10px;
  .edit-title{
    padding: 10px 0 ;
  }
  .container{
    padding: 20px;
    background: #FFFFFF;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    .edit-contorl{
      display: flex;
      justify-content: space-between;
      .item{
        padding-right: 20px;
      }
    }
    .article_md{
      margin-top: 20px;
      min-height: 500px;
    }
  }
}
</style>
