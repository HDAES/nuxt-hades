<!--
 * @Author: HADES
 * @Date: 2019-08-22 16:26:01
 * @LastEditTime: 2019-08-22 17:40:51
 * @Description:
 -->
<template>
  <no-ssr>
    <d-player
      class="d-player"
      :options="options"
    />
  </no-ssr>
</template>
<script>
export default {
  data() {
    return {
      options: {
        video: {
          url: 'http://qiniu.xl686.com/Palette.mp4'
        },
        contextmenu: [
          {}
        ],
        screenshot: true
      }
    }
  },
  mounted() {

  },
  created() {

  },
  methods: {

  }

}
</script>
<style lang="scss" scoped>
.d-player{
  width: 1000px;
  height: 500px;
}
</style>
