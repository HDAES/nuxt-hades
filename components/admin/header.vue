<!--
 * @Date: 2019-07-26 23:29:36
 * @LastEditors: HADES
 * @LastEditTime: 2019-07-29 00:20:44
 * @Description:    后台管理页面 头部组件
 -->

<template>
  <div class="header">
    <div class="h_r">
      <i class="el-icon-menu" @click="openSider" />
      <div class="slogin">
        后台管理系统
      </div>
    </div>
    <div class="h_l">
      <i class="iconfont icon-quanping" @click="handleFullScreen" />
      <el-badge is-dot>
        <i class="el-icon-bell" />
      </el-badge>
      <div class="avatar">
        <img src="~static/image/avatar.jpg" alt="avatar">
      </div>
      <el-dropdown class="name" trigger="click" @command="handleCommand">
        <span class="el-dropdown-link">
          admin<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="0">
            关于作者
          </el-dropdown-item>
          <a href="https://github.com/HDAES/nuxt-hades" target="_blank">
            <el-dropdown-item>
              项目仓库
            </el-dropdown-item>
          </a>
          <el-dropdown-item :command="1">
            退出登录
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    // 下拉菜单触发事件
    handleCommand(command) {
      console.log(typeof command)
      switch (command) {
        case 0 :
          this.$router.push('/about')
          break
        case 1 :

          break
      }
    },
    openSider() {
      this.isCollapse = !this.isCollapse
      this.$bus.$emit('collapse', this.isCollapse)
    },
    // 全屏按钮
    handleFullScreen() {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen()
      }
      this.fullscreen = !this.fullscreen
    }
  }
}
</script>

<style lang='scss' scoped>
    .header{
        position: fixed;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 0 20px;
        background: #242f42;
        color: #FFFFFF;
        z-index: 999;
        .h_r{
            display: flex;
            i{
                font-size: 28px;
            }
            i::before{
                line-height: 36px;
            }
            .slogin{
                padding-left: 20px;
                font-size: 26px;
            }
            .el-icon-menu{
              cursor: pointer;
            }
        }
        .h_l{
            display: flex;
            align-items: center;
            padding-right: 40px;
            .icon-quanping{
                font-size: 28px;
                padding-right: 20px;
                cursor: pointer;
            }
            .el-icon-bell{
                font-size: 28px;
            }
            .avatar img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-left: 20px;
                margin-right: 10px;
            }
            .name{
                color: #FFFFFF;
                cursor: pointer;
                a:hover{
                    text-decoration: none;
                }
            }
        }
    }
</style>
