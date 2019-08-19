<!--
 * @Date: 2019-07-31 22:19:50
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-18 16:06:41
 * @Description:  微信小程序的基本信息
 -->
<template>
  <div class="info">
    <div class="info-title">
      <i class="iconfont icon-wechat-miniprogram" />
      基本信息
    </div>
    <div class="echarts-container">
      <no-ssr>
        <div id="DailyRetain" />
        <div id="DailyRetains" />
        <div id="genders" />
        <div id="platforms" />
        <div id="ages" />
      </no-ssr>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
import api from '@/static/api'
export default {
  layout: 'admin',
  data() {
    return {
      DailyRetain: {},
      genders: [],
      platforms: [],
      ages: []
    }
  },
  mounted() {
    this.$axios.setHeader('Authorization', this.storage.get('TOKEN'))
    this.getDailyRetain()
  },
  methods: {
    // 获取数据
    async getDailyRetain() {
      await this.$axios.get(api.getDailyRetain).then((res) => {
        this.DailyRetain = res.DailyRetain
        this.genders = res.UserPortrait.visit_uv.genders
        this.platforms = res.UserPortrait.visit_uv.platforms
        this.ages = res.UserPortrait.visit_uv.ages
      })
      this.drawLine(
        'DailyRetain',
        '近一周新增用户',
        this.DailyRetain.visit_uv_new.map((item) => {
          return item.key + parseInt(this.DailyRetain.ref_date)
        }),
        this.DailyRetain.visit_uv_new.map((item) => {
          return item.value
        })
      )
      this.drawLine(
        'DailyRetains',
        '近一周活跃用户',
        this.DailyRetain.visit_uv.map((item) => {
          return item.key + parseInt(this.DailyRetain.ref_date)
        }),
        this.DailyRetain.visit_uv.map((item) => {
          return item.value
        })
      )
      this.drawPie('genders', '性别分布', this.genders)
      this.drawPie('platforms', '终端分析', this.platforms)
      this.drawBar('ages', '年龄分布', this.ages)
    },
    // 画折线图方法
    drawLine(Element, title, xdata, ydata) {
      const drawLine = echarts.init(document.getElementById(Element))
      drawLine.setOption({
        title: {
          text: title,
          x: 'center'
        },
        xAxis: {
          type: 'category',
          data: xdata
        },
        yAxis: {
          name: '人',
          type: 'value',
          minInterval: 1
        },
        series: [
          {
            type: 'line',
            data: ydata
          }
        ]
      })
    },
    drawPie(Element, title, ydata) {
      const drawPie = echarts.init(document.getElementById(Element))
      drawPie.setOption({
        title: {
          text: title,
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left'
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: ydata
          }
        ]
      })
    },
    drawBar(Element, title, ydata) {
      const drawPie = echarts.init(document.getElementById(Element))
      drawPie.setOption({
        title: {
          text: title,
          x: 'center'
        },
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ydata.map((item) => {
              return item.name
            }),
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: ydata
          }
        ]
      })
    }
  }
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
