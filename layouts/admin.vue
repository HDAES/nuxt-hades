<template>
  <div class="admin">
    <v-header />

    <div class="main">
      <v-sider />
      <div class="content">
        <v-tags />
        <nuxt class="scroll" />
      </div>
    </div>
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

<style lang='scss' >
@import '@/assets/css/reset_ui.css';
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
        .scroll{
          position: absolute;
          top: 50px;
          bottom: 0;
          left: 0;
          right: 0;
          overflow-y: scroll;
        }
      }
    }
  }
</style>
