<!--
 * @Author: HADES
 * @Date: 2019-07-29 15:18:46
 * @LastEditTime: 2019-07-31 15:48:39
 * @Description:    标签页组件
 -->

<template>
  <div class="tags">
    <div class="tags-list">
      <el-tag
        v-for="(tag,index) in tags"
        :key="index"
        closable
        :effect="tag.index == $route.name?'dark':'plain'"
        :hit="true"
        size="small"
        :disable-transitions="true"
        @close="handleClose(tag)"
        @click="handleClick(tag)"
      >
        {{ tag.name }}
      </el-tag>
    </div>
    <div class="tags-control">
      <el-dropdown @command="handleCommand">
        <el-button size="mini" type="primary">
          更多标签<i class="el-icon-arrow-down el-icon--right" />
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item :command="0">
            关闭其他
          </el-dropdown-item>
          <el-dropdown-item :command="1">
            关闭所有
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
      tags: [],
      isCollapse: false
    }
  },
  watch: {
    $route(newValue, oldValue) {
      // console.log(newValue)
      if (JSON.stringify(this.tags).indexOf(JSON.stringify(newValue.name)) === -1) {
        const obj = {
          index: newValue.name,
          name: this.Json(newValue.name)
        }
        this.tags.push(obj)
      }
    }
  },
  created() {
    const obj = {
      index: this.$route.name,
      name: this.Json(this.$route.name)
    }
    this.tags.push(obj)

    this.$bus.$on('collapse', (msg) => {
      this.isCollapse = msg
    })
  },

  methods: {

    handleClose(e) {
      if (this.tags.length > 1) {
        this.tags.splice(this.tags.indexOf(e), 1)
      }
    },
    handleClick(e) {
      this.$router.push({ name: e.index })
    },
    handleCommand(e) {
      switch (e) {
        case 0 :
          this.tags = [{ index: this.$route.name, name: this.Json(this.$route.name) }]
          break
        case 1 :
          this.tags = [{ index: 'admin-system', name: '系统中心' }]
          this.$router.push({ name: 'admin-system' })
          break
        default :
          break
      }
    },
    Json(e) {
      if (e === 'admin-system') {
        return '系统管理中心'
      } else if (e === 'admin-weapp-info') {
        return '基本信息'
      } else if (e === 'admin-weapp-carousel') {
        return '轮播图管理'
      } else if (e === 'admin-weapp-setting') {
        return '小程序设置'
      } else if (e === 'admin-blog-all') {
        return '所有博文'
      } else if (e === 'admin-blog-sort') {
        return '博文种类'
      } else if (e === 'admin-blog-details') {
        return '博文详情'
      } else if (e === 'admin-blog-edit') {
        return '博文编辑'
      }
    }

  }
}
</script>

<style lang='scss' scoped>
.tags{
    display: flex;
    justify-content: space-between;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
    z-index: 999;
    transition: all .5s;
    .tags-list{
        .el-tag{
            margin-right: 10px;
            cursor: pointer;
        }
    }
    .tags-control{
      padding-left: 10px;
      box-shadow:-10px 0px 20px #BBBBBB;
    }

}
</style>
