<template>
  <div class="set">
    <div class="set-title">
      <i class="iconfont icon-wechat-miniprogram" />
      小程序设置
    </div>

    <div class="set-container">
      <el-tabs type="border-card">
        <el-tab-pane label="用户管理">
          <we-app :user="weapp_user" />
        </el-tab-pane>
        <el-tab-pane label="名言管理">
          <v-say />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import api from '@/static/api'
import weApp from '@/components/admin/weapp_user'
import vSay from '@/components/admin/say'
export default {
  layout: 'admin',
  components: { weApp, vSay },
  data() {
    return {
      weapp_user: []
    }
  },
  mounted() {
    this.$axios.setHeader('Authorization', this.storage.get('TOKEN'))
    this.getUser()
  },
  methods: {
    // 获取小程序用户
    async getUser() {
      await this.$axios.get(api.getWeappUser).then((res) => {
        this.weapp_user = res.filter((item) => {
          return (item.userInfo = JSON.parse(item.userInfo))
        })
      })
    }

  }
}
</script>
<style lang="scss" scoped>
.set{
  padding: 0 10px;
  .set-title{
    padding: 10px 0;
  }
}
</style>
