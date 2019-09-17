<!--
 * @Date: 2019-08-18 16:03:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-09-17 16:41:21
 * @Description:
 -->
<template>
  <div class="system">
    <div class="system-left">
      <div class="me">
        <div class="avator-name">
          <img class="avator" :src="avatar">
          <div class="name">
            <div>admin</div>
            <div>超级管理员</div>
          </div>
        </div>
        <div class="login-info">
          <div>
            <span>登录IP：</span>
            <span>{{ Ip.ip }}</span>
          </div>
          <div>
            <span>登录城市：</span>
            <span>{{ Ip.city }}</span>
          </div>
        </div>
      </div>
      <div class="language">
        <div class="title">
          语言详情
        </div>
        <div class="language-list">
          <div>
            <span>Nuxt.js</span>
            <el-progress :percentage="68.1" color="#41B883" />
          </div>
          <div>
            <span>Vue</span>
            <el-progress :percentage="23.4" color="#F1E05A" />
          </div>
          <div>
            <span>CSS</span>
            <el-progress :percentage="6.3" color="#E99911" />
          </div>
          <div>
            <span>Html</span>
            <el-progress :percentage="2.2" color="#DD5120" />
          </div>
        </div>
      </div>
    </div>
    <div class="system-right">
      <no-ssr>
        <el-calendar v-model="value" />
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
      avatar: require('@/static/image/avatar.jpg'),
      value: new Date(),
      Ip: ''
    }
  },
  mounted() {
    this.getIp()
  },
  methods: {
    // 获取登录者的ip地址和城市
    async getIp() {
      await this.$axios.get(api.getLoginInfo).then((res) => {
        // console.log(res)
        this.Ip = res
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.system{
  display: flex;
  .system-left{
    flex: 3;
    padding: 0 10px 10px 10px;
    .me{
      padding: 20px;
      background: #FFFFFF;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
      border-radius: 2px;
      .avator-name{
        display: flex;
        padding-bottom: 20px;
        border-bottom: 2px solid #cccccc;
        .avator{
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .name{
          display: flex;
          flex: 1;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #666666;
          div{ padding-bottom: 5px}
        }
      }
      .login-info{
        padding: 20px 10px 0;
        div {
          display: flex;
          width: 60%;
          padding: 2px 0;
          span {
            flex: 1;
            color: #666;
            font-size: 14px;
          }
        }
      }
    }
    .language{
      margin-top: 10px;
      background-color: #ffffff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
      border-radius: 2px;
      .title{
        padding: 20px ;
        border-bottom: 1px solid #cccccc;
      }
      .language-list{
        padding: 20px;
      }
    }
    .me:hover,.language:hover{
       box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    }
  }
  .system-right{
    flex: 7
  }
}
</style>
