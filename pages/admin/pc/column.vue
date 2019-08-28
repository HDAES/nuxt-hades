<!--
 * @Author: HADES
 * @Date: 2019-08-13 14:32:04
 * @LastEditTime: 2019-08-28 22:35:21
 * @Description:    pc端栏目管理
 -->
<template>
  <div class="column">
    <div class="column-title">
      <i class="iconfont el-icon-s-platform" />
      栏目管理
    </div>

    <div class="column-container">
      <el-tabs type="border-card" :value="tabsIndex" @tab-click="handleClick">
        <el-tab-pane v-for="(item,index) in sort" :key="index" :label="item.name" :name="index+''">
          <el-form class="form" label-width="100px">
            <el-form-item label="ID：">
              <el-input :value="tabsForm.pc_sort_id" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="栏目名：">
              <el-input v-model="tabsForm.name" />
            </el-form-item>
            <el-form-item label="Icon：">
              <el-input v-model="tabsForm.icon" autocomplete="off" />
            </el-form-item>
            <el-form-item label="图片：">
              <img class="image" :src="tabsForm.background" alt>
              <br>
              <el-upload
                id="upload"
                action="https://blog.xl686.com/api/admin/wechat/upload"
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
            <el-form-item>
              <el-button class="submit" type="danger" size="medium" @click="submit">
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
      sort: [],
      tabsIndex: '0',
      tabsForm: ''
    }
  },
  mounted() {
    this.getSort()
  },
  methods: {
    // 获取PC端分类
    async getSort() {
      await this.$axios.get(api.getPcSort).then((res) => {
        this.sort = res
        this.tabsForm = res[this.tabsIndex]
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
        this.tabsForm.background = res.data
      }
      console.log(res)
    },
    // 提交修改
    submit() {
      this.$axios.post(api.upDataPcSort, this.tabsForm)
    },
    // 改变tab状态
    handleClick(e) {
      this.tabsForm = this.sort[e.name]
    }
  }

}
</script>
<style lang="scss" scoped>
.column{
    padding: 0 10px;
    .column-title{
        padding: 0 10px;
    }
    .column-container{
        padding: 20px 0;
        .form{
            padding-top: 30px;
            width: 50%;
            .image{
                width: 100%;
                border: 1px solid #C1C1C1
            }
            .submit{
                width: 200px;
            }
        }
    }
}
</style>
