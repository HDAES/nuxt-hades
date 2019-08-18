/*
 * @Date: 2019-07-28 22:47:59
 * @LastEditors: HADES
 * @LastEditTime: 2019-08-18 19:23:24
 * @Description:    storage的封装
 */
import Vue from 'vue'

Vue.prototype.storage = {
  set: function (key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.log(err)
    }
  },
  get: function (key) {
    try {
      const value = localStorage.getItem(key)
      if (value) {
        return JSON.parse(value)
      } else {
        return false
      }
    } catch (err) {
      console.log(err)
    }
  }
}
