<template>
  <div class="sider">
    <el-menu
      background-color="#324157"
      class="sider-el"
      text-color="#FFFFFF"
      :collapse="isCollapse"
      router
    >
      <template v-for="item in siderList">
        <template v-if="item.subs">
          <el-submenu :key="item.index" :index="item.index">
            <template slot="title">
              <i class="el-icon-location" />
              <span slot="title">{{ item.name }}</span>
            </template>
            <template v-for="items in item.subs">
              <el-menu-item :key="items.index" :index="items.index">
                {{ items.name }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="item.index" :index="item.index">
            <i class="el-icon-menu" />
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siderList: [
        {
          icon: 'el-icon-location',
          name: '系统中心',
          index: 'system'
        },
        {
          icon: 'el-icon-location',
          name: '微信小程序',
          index: '1',
          subs: [
            {
              icon: 'el-icon-location',
              name: '基本信息',
              index: '1-1'
            },
            {
              icon: 'el-icon-location',
              name: '个人中心',
              index: '1-2'
            }
          ]
        },
        {
          icon: '123',
          name: '文章管理',
          index: '2',
          subs: [
            {
              icon: '123',
              name: '所有博文',
              index: '2-1'
            }
          ]
        }
      ],
      isCollapse: false
    }
  },
  created() {
    this.$bus.$on('collapse', (msg) => {
      this.isCollapse = msg
    })
  }
}
</script>

<style lang='scss' scoped>
.sider {
  position: absolute;
  top: 70px;
  bottom: 0;
  overflow-y: hidden;
  .sider-el:not(.el-menu--collapse) {
    width: 250px;
  }
  .el-menu {
    height: 100%;
  }
}
</style>
