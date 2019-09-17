<!--
 * @Author: HADES
 * @Date: 2019-08-16 11:10:56
 * @LastEditTime: 2019-09-17 17:14:36
 * @Description:
 -->
<template>
  <div class="say">
    <div class="say-contorl">
      <el-button type="primary" size="small" @click="addBtn">
        添加
      </el-button>
    </div>

    <el-table
      :data="saying"
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="55"
      />
      <el-table-column
        prop="id"
        label="ID"
        width="50"
      />
      <el-table-column
        prop="content"
        label="内容"
      />
      <el-table-column
        prop="author"
        label="作者"
        width="100"
      />
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" @click="changeBtn(scope)">
            修改
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 修改状态 -->
    <el-dialog
      title="编辑"
      :visible.sync="dialogChange"
      width="30%"
    >
      <el-radio v-model="position" :label="0">
        引导页
      </el-radio>
      <el-radio v-model="position" :label="1">
        工具页
      </el-radio>
      <el-radio v-model="position" :label="2">
        不显示
      </el-radio>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogChange = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加名言 -->
    <el-dialog
      title="添加"
      :visible.sync="dialogAdd"
      width="40%"
    >
      <el-form label-width="60px">
        <el-form-item label="名言：">
          <el-input
            v-model="newSaying"
            type="textarea"
            :rows="3"
          />
        </el-form-item>
        <el-form-item label="作者：">
          <el-input v-model="newAuthor" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogAdd = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import api from '@/static/api'
export default {
  data() {
    return {
      saying: [],
      dialogChange: false,
      dialogAdd: false,
      position: '',
      sayingId: '',
      newSaying: '',
      newAuthor: ''
    }
  },
  mounted() {
    this.$axios.setHeader('Authorization', this.storage.get('TOKEN'))
    this.getSaying()
  },
  methods: {
    // 获取名言
    async getSaying() {
      await this.$axios.get(api.getSaying).then((res) => {
        this.saying = res
      })
    },
    // 添加
    async add() {
      const options = {
        content: this.newSaying,
        author: this.newAuthor
      }
      await this.$axios.post(api.addSaying, options)
      this.dialogAdd = false
      this.$message.error('添加成功！！！')
    },
    addBtn() {
      this.newSaying = ''
      this.newAuthor = ''
      this.dialogAdd = true
    },
    // 提交改变
    async submit() {
      const options = {
        id: this.sayingId,
        position: this.position
      }
      await this.$axios.post(api.updataSaying, options).then((res) => {
        this.dialogChange = false
      })
    },
    // 编辑按钮
    changeBtn(e) {
      this.dialogChange = true
      this.position = e.row.position
      this.sayingId = e.row.id
    }
  }
}
</script>
<style lang="scss" scoped>
    .say-contorl{
        display: flex;
        justify-content: flex-end;
        padding: 10px;
    }
</style>
