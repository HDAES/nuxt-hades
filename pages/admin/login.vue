<!--
 * @Date: 2019-07-26 23:17:05
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-28 21:05:51
 * @Description:
 -->
<template>
  <div class="admin-login">
    <!-- <background class="bg" /> -->
    <div class="login-box">
      <nuxt-link class="toIndex" to="/">
        <i class="el-icon-back" />
      </nuxt-link>
      <img class="qcode" src="~static/image/qcode.png" alt="" @click="showDiag">
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
    </div>
    <!-- 扫码弹出框 -->
    <el-dialog title="使用微信小程序扫码登陆" :visible.sync="qcodeDiag" width="30%" center>
      <img class="qcodeimg" :src="Qcode" alt>
      <div class="msg_info">
        <div v-if="scanSuccess== ''">
          请在
          <span>{{ time }} s</span>内扫码登陆
        </div>
        <div v-else>
          {{ scanSuccess }}
        </div>
        <span v-if="scanSuccess!= ''" class="ref" @click="ref">刷新</span>
      </div>
    </el-dialog>
    <div class="version">
      版本：1.0.0
    </div>
  </div>
</template>
<script>
// import Background from '@/components/common/background'
import api from '@/static/api'
export default {
  components: { },
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
      qcodeDiag: false,
      Qcode: '', // 二维码地址
      scanSuccess: '',
      time: 60
    }
  },
  methods: {
    login(userInfo) {
      this.$refs[userInfo].validate((valid) => {
        if (valid) {
          this.$axios.post(api.login, this.userInfo).then(
            (res) => {
              console.log(res)
              if (res.code === 200) {
                this.storage.set('TOKEN', res.token)
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
    },
    showDiag() {
      this.qcodeDiag = true
      this.time = 60
      this.scanSuccess = ''
      // 获取二维码
      this.$axios.get(api.getLoginQcode).then((res) => {
        this.Qcode = res.url
        const token = res.token
        const timeout = window.setInterval(() => {
          this.time--
          if (this.time % 5 === 0) {
            this.$axios.post(api.getState, { 'token': token }).then((res) => {
              if (res.code === 200) {
              // 登录成功
                const options = { username: 'admin', password: 'scan' }
                this.$axios.post(api.login, options).then((res) => {
                  this.storage.set('TOKEN', res.token)
                  this.$router.push('/admin/system')
                })

                clearInterval(timeout)
              } else if (res.code === 201) {
              // 扫码成功
                this.scanSuccess = res.msg
              }
            })
          } else if (this.time === 1) {
            this.scanSuccess = '已过期，请重新生成二维码;'
            clearInterval(timeout)
          } else if (!this.qcodeDiag) {
            clearInterval(timeout)
          }
        }, 1000)
      })
    },
    // 刷新登录
    ref() {
      this.showDiag()
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
      background-image: url("http://qiniu.xl686.com/login_bg1.jpg");
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
.qcodeimg{
  margin:  0 auto;
}
.msg_info{
  margin: 10px auto;
  text-align: center;
}
.ref{
  padding-top:5px;
  cursor: pointer;
  text-decoration: underline;
  color:red;
}
.version{
  position: fixed;
  right: 10px;
  bottom: 10px;
}
.toIndex{
  position: absolute;
  top: 10px;
  left: 10px;
  i{
    font-size: 36px;
  }

}
</style>
