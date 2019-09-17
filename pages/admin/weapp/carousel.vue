<!--
 * @Date: 2019-08-19 21:13:26
<<<<<<< HEAD
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-17 17:38:11
=======
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-28 22:36:48
>>>>>>> bff3599233b0a94bba7e50391d543d12055cb320
 * @Description:
 -->
<template>
  <div class="carousel">
    <div class="carousel-title">
      <i class="iconfont icon-wechat-miniprogram" />
      轮播管理
    </div>

    <div class="container">
      <el-tabs v-model="activeName" class="tabs" type="border-card">
        <el-tab-pane v-for="(item,index) in carousel" :key="index" :label="`轮播图 ${index+1}`" :name="item.id +''">
          <el-form label-width="80px">
            <el-form-item label="轮播图：">
              <img class="carousel-image" :src="imageUrl || item.img" alt>
              <br>
              <el-upload
                id="upload"
                action="http://localhost:7001/uploads"
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
            </el-form-item>
            <el-form-item label="标题：">
              <el-input v-model="title" style="width:500px" :placeholder="item.title" />
            </el-form-item>
            <el-form-item label="类型：">
              <el-select v-model="type">
                <el-option label="博客" :value="1" />
                <el-option label="图书" :value="2" />
                <el-option label="音乐" :value="3" />
              </el-select>
            </el-form-item>
            <el-form-item label="连接URL">
              <el-input v-model="url_id" style="width:500px" :placeholder="item.url_id" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submit(item.id)">
                保存
              </el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import api from '@/static/api'
export default {
  layout: 'admin',
  data() {
    return {
      activeName: '1',
      carousel: [],
      imageUrl: '', // 上传成功后返回的地址
      title: '', // 标题
      type: 1, // 类型
      url_id: ''
    }
  },
  mounted() {
    this.getcarousel()
  },
  methods: {
    // 获取小程序轮播
    async getcarousel() {
      await this.$axios.get(api.getcarousel).then((res) => {
        this.carousel = res
      })
    },
    // 保存
    async submit(e) {
      const options = {
        id: e,
        pic: this.imageUrl,
        title: this.title,
        url_id: this.url_id,
        types: this.type
      }
      await this.$axios.post(api.updataCarousel, options)
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
        this.imageUrl = res.data
      }
      console.log(res)
    }
  }
}
</script>
<style lang="scss" scoped>
.carousel{
  padding: 10px 0;
  .carousel-title{
    padding: 0 10px
  }
  .container{
    .tabs{
      margin: 20px 10px;
      .carousel-image{
        width: 500px;
        height: 200px;
        border: 1px solid #c1c1c1
      }
    }
  }
}
</style>
