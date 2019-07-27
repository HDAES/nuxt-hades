<template>
  <div class="admin">
    <v-header />
    <div class="mian">
      <v-sider />
    </div>
    <nuxt />
  </div>
</template>

<script>
import vHeader from '@/components/admin/header'
import vSider from '@/components/admin/sider'
export default {
  components: { vHeader, vSider }
}
</script>

<style lang='scss' scoped>
  .admin{
    .mian{
      display: flex;
      padding-top: 70px;
    }
  }
</style>
