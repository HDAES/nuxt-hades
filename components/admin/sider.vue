<template>
  <div class="sider">
    <el-menu background-color="#324157" class="sider-el" text-color="#FFFFFF" :collapse="isCollapse">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location" />
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">
            选项1
          </el-menu-item>
          <el-menu-item index="1-2">
            选项2
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">
            选项3
          </el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">
            选项1
          </el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu" />
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document" />
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting" />
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    .sider{
        width: 50%;
        .sider-el{

            transition: all .5s;
        }
    }
</style>
