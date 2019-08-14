<!--
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-14 23:06:05
 * @Description:  微信小程序的基本信息
 -->
<template>
  <div class="info">
    <div class="info-title">
      <i class="iconfont icon-wechat-miniprogram" />
      基本信息
    </div>
    <div class="echarts-container">
      <div id="DailyRetain" />
      <div id="DailyRetains" />
      <div id="genders" />
      <div id="platforms" />
      <div id="ages" />
    </div>
  </div>
</template>
<script>
export default {
  layout: 'admin'
}
</script>
<style lang="scss" scoped>
  .info{
    padding:  0 10px;
    .info-title{
      padding: 10px 0;
    }
    .echarts-container {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    #DailyRetain,
    #DailyRetains,
    #genders,
    #platforms,
    #ages {
      width: 50%;
      height: 300px;
      margin-bottom: 40px;
    }
  }
  }
</style>
