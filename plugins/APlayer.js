/*
 * @Author: HADES
 * @Date: 2019-08-21 12:15:05
 * @LastEditTime: 2019-08-22 16:43:09
 * @Description:  音乐播放插件
 */
import Vue from 'vue'
import APlayer from '@moefe/vue-aplayer'

Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true
})
