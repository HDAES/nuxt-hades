<!--
 * @Author: HADES
 * @Date: 2019-07-30 11:10:46
 * @LastEditTime: 2019-08-14 13:55:18
 * @Description:
 -->
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
          <el-submenu
            :key="item.index"
            :index="item.index"
          >
            <template slot="title">
              <i
                :class="item.icon"
                class="iconfont"
              />
              <span slot="title">{{ item.name }}</span>
            </template>
            <template v-for="items in item.subs">
              <el-menu-item
                :key="items.index"
                :index="items.index"
              >
                {{ items.name }}
              </el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item
            :key="item.index"
            :index="item.index"
            @click="to(item)"
          >
            <i
              :class="item.icon"
              class="iconfont"
            />
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
          icon: 'el-icon-info',
          name: '系统中心',
          index: '/admin/system'
        },
        {
          icon: 'icon-wechat-miniprogram',
          name: '微信小程序',
          index: '1',
          subs: [
            {
              name: '基本信息',
              index: '/admin/weapp/info'
            },
            {
              name: '轮播图管理',
              index: '/admin/weapp/carousel'
            }, {
              name: '设置',
              index: '/admin/weapp/setting'
            }
          ]
        },
        {
          icon: 'el-icon-document',
          name: '文章管理',
          index: '2',
          subs: [
            {
              name: '所有博文',
              index: '/admin/blog/all'
            },
            {
              name: '种类',
              index: '/admin/blog/sort'
            },
            {
              name: '详情',
              index: '/admin/blog/details'
            },
            {
              name: '编辑',
              index: '/admin/blog/edit'
            }
          ]
        },
        {
          icon: 'el-icon-s-platform',
          name: 'PC站管理',
          index: '3',
          subs: [
            {
              name: '栏目管理',
              index: '/admin/pc/column'
            },
            {
              name: '栏目内容',
              index: '/admin/pc/assort'
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
  },
  methods: {
    to(e) {

    }
  }
}
</script>

<style lang='scss' scoped>
.sider {
  .sider-el:not(.el-menu--collapse) {
    width: 250px;
  }
  .el-menu {
    height: 100%;
    .iconfont {
      font-size: 24px;
      padding-right: 5px;
    }
    .icon-wechat-miniprogram {
      font-size: 22px;
    }
  }
}
</style>
