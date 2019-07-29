<!--
 * @Author: HADES
 * @Date: 2019-07-29 15:18:46
 * @LastEditTime: 2019-07-29 23:35:27
 * @Description:    标签页组件
 -->

<template>
  <div class="tags">
    <div class="tags-list">
      <el-tag
        v-for="tag in tags"
        :key="tag"
        closable
        :effect="tag == $route.name?'dark':'plain'"
        :hit="true"
        size="small"
        :disable-transitions="true"
        @close="handleClose(tag)"
        @click="handleClick(tag)"
      >
        {{ tag }}
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
      tags: []
    }
  },
  watch: {
    $route(newValue, oldValue) {
      if (this.tags.indexOf(newValue.name) === -1) {
        this.tags.push(newValue.name)
      }
    }
  },
  created() {
    this.tags.push(this.$route.name)
  },
  methods: {
    handleClose(e) {
      if (this.tags.length > 1) {
        this.tags.splice(this.tags.indexOf(e), 1)
      }
    },
    handleClick(e) {
      this.$router.push({ name: e })
    },
    handleCommand(e) {
      console.log(e)
      switch (e) {
        case 0 :
          this.tags = [`${this.$route.name}`]
          break
        case 1 :
          this.tags = ['系统中心']
          this.$router.push({ name: '系统中心' })
          break
        default :
          break
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
    width: 100%;
    line-height: 40px;
    padding: 0 10px;
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12);
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
