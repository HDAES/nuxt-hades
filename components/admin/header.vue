<!--
 * @Date: 2019-07-26 23:29:36
 * @LastEditors: HADES
 * @LastEditTime: 2019-07-27 00:24:55
 * @Description:    后台管理页面 头部组件
 -->

<template>
  <div class="header">
    <div class="h_r">
      <i class="el-icon-menu" />
      <div class="slogin">
        后台管理系统
      </div>
    </div>
    <div class="h_l">
      <i class="iconfont icon-quanping" />
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
    }
  }
}
</script>

<style lang='scss' scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        padding: 0 20px;
        background: #242f42;
        color: #FFFFFF;
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
        }
        .h_l{
            display: flex;
            align-items: center;
            padding-right: 40px;
            .icon-quanping{
                font-size: 28px;
                padding-right: 20px;
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
                a:hover{
                    text-decoration: none;
                }
            }
        }
    }
</style>
