<template>
  <div class="admin-login">
    <background class="bg" />
    <div class="login-box">
      <img class="qcode" src="~static/image/qcode.png" alt="">
      <div class="title">
        login
      </div>

      <el-form ref="userInfo" label-position="right" :model="userInfo" status-icon :rules="rules">
        <el-form-item label="用户名:" prop="username" label-width="80px">
          <el-input v-model="userInfo.username" type="text" style="width:90%" />
        </el-form-item>
        <el-form-item label="密码:" prop="password" label-width="80px">
          <el-input v-model="userInfo.password" type="password" style="width:90%" @keyup.enter.native="login('userInfo')" />
        </el-form-item>
        <el-form-item label-width="44%">
          <el-button class="login_btn" type="primary" @click="login('userInfo')">
            登录
          </el-button>
        </el-form-item>
      </el-form>

      <!-- 扫码弹出框 -->
      <el-dialog title="使用微信小程序扫码登陆" :visible.sync="centerDialogVisible" width="30%" center :before-close="handleClose">
        <img class="qcodeimg" :src="Qcode" alt>
        <div class="msg_info">
          <div v-if="scanSuccess== ''">
            请在
            <span>{{ time }}</span>内扫码登陆
          </div>
          <div v-else>
            {{ scanSuccess }}
          </div>
          <span v-if="scanSuccess!= ''" @click="qcode">刷新</span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import Background from '@/components/common/background'
export default {
  components: { Background },
  data() {
    return {
      userInfo: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      centerDialogVisible: false
    }
  },
  methods: {
    login(userInfo) {
      this.$refs[userInfo].validate((valid) => {
        if (valid) {
          this.$axios.post('/api/admin/login', this.userInfo).then(
            (res) => {
              if (res.code === 200) {
                this.$store.dispatch(
                  'asyncAddToken',
                  JSON.stringify(res.token)
                )
                localStorage.setItem(
                  'USER_INFO',
                  JSON.stringify(this.userInfo)
                )

                this.$router.push('/admin/system')
              } else {
                this.$message.error('账号或密码不正确')
              }
            }
          )
        } else {
          this.$notify.error({
            title: '错误',
            message: ' 请输入正确的用户名个密码'
          })
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
@font-face {
  font-family: "Damion";
  src: url('~assets/font/font.ttf');
}

.admin-login{

    .bg{
      background-image: url("~static/image/login_bg1.jpg");
      background-size: cover;
    }

    .login-box{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: 450px;
      height: 300px;
      background: rgba($color: #FFFFFF, $alpha: .5);
      border-radius: 10px;
      overflow: hidden;
      .qcode{
        position: absolute;
        right: 0;
        width: 100px;
      }
      .title{
        text-align: center;
        font-size: 30px;
        padding: 10px 0 50px;
      }
    }
}

</style>
