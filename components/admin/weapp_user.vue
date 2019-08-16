<template>
  <div class="weapp_user">
    <el-table
      :data="user.slice((page-1)*size,(page)*size)"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="open_id"
        label="open_ID"
      />
      <el-table-column
        prop="session_key"
        label="session_key"
      />
      <el-table-column
        prop="userInfo.nickName"
        width="100px"
        label="昵称"
      />
      <el-table-column
        label="性别"
        width="100px"
        :formatter="genderFormatter"
      />
      <el-table-column
        label="地区"
        width="100px"
        :formatter="provinceFormatter"
      />
      <el-table-column
        label="头像"
        width="100px"
      >
        <template slot-scope="scopd">
          <el-avatar size="medium" :src="scopd.row.userInfo.avatarUrl" />
        </template>
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="150px"
        :formatter="timeFormatter"
      />
    </el-table>
    <el-pagination
      class="pagination"
      background
      :page-size="size"
      layout="prev, pager, next"
      :total="user.length"
      @prev-click="paginationBtn"
      @next-click="paginationBtn"
      @current-change="paginationBtn"
    />
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data() {
    return {
      size: 10,
      page: 1
    }
  },
  methods: {
    // 格式化性别数据
    genderFormatter(row) {
      if (row.userInfo.gender === 1) {
        return '男'
      } else if (row.userInfo.gender === 2) {
        return '女'
      }
    },
    // 格式化城市
    provinceFormatter(row) {
      if (row.userInfo.province) {
        if (row.userInfo.city) {
          return row.userInfo.province + '/' + row.userInfo.city
        } else {
          return row.userInfo.province
        }
      } else {
        return '未知'
      }
    },
    // 格式化时间
    timeFormatter(row) {
      return row.create_time.slice(0, 10)
    },
    // 上一页,下一页
    paginationBtn(e) {
      this.page = e
    }
  }
}
</script>
<style lang="scss" scoped>
    .pagination{
        padding: 20px 10px;
        text-align: right;
    }
</style>
