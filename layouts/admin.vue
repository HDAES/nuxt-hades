<template>
  <div class="admin">
    <v-header />

    <div class="main">
      <v-sider />
      <div class="content">
        <v-tags />
        <nuxt />
      </div>
    </div>

    <nuxt />
  </div>
</template>

<script>
import vHeader from '@/components/admin/header'
import vSider from '@/components/admin/sider'
import vTags from '@/components/admin/tags'
export default {
  components: { vHeader, vSider, vTags }
}
</script>

<style lang='scss' scoped>
  .admin{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    overflow: hidden;
    .main{
      height: 100%;
      padding-top: 70px;
      display: flex;
      background: #F0F0F0;
      .content{
        position: relative;
        width: 100%;
      }
    }
  }
</style>
