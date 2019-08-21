<!--
 * @Author: HADES
 * @Date: 2019-08-21 11:48:25
 * @LastEditTime: 2019-08-21 16:53:09
 * @Description:    音乐页面
 -->
<template>
  <div class="music">
    <div class="search">
      <div class="lable">
        搜 <span />索
      </div>
      <input
        id=""
        type="text"
        name=""
      >
    </div>
    <div class="hot">
      <div class="title">
        热门歌曲
        <ul>
          <li v-for="(item,index) in hot" :key="index" @click="getMUsicInfo(item.id)">
            <label>{{ index+1 }}</label>
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'hades',
  data() {
    return {
      hot: []
    }
  },
  created() {
    this.getHot()
  },
  mounted() {

  },
  methods: {
    // 获取热门排行榜
    async getHot() {
      await this.$axios.get('/api/weapp/music/gethotmusic').then((res) => {
        this.hot = res.playlist.tracks.slice(0, 10)
      })
    },
    async getMUsicInfo(id) {
      await this.$axios.post('/api/weapp/music/getmusic', { mid: id }).then((res) => {
        const options = {
          name: res.musicInfo.name,
          artist: res.musicInfo.ar[0].name,
          url: res.url,
          cover: res.musicInfo.al.picUrl
        }
        console.log(options)
        this.$store.commit('data/addAudio', options)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.music {
    display: flex;
    justify-content: space-between;
  .search {
      flex: 6;
      text-align: center;
    .lable{
        font-size: 30px;
        color: var(--header-logo-color);
        padding-bottom: 5px;
        span{
            display: inline-block;
            width: 50px;
        }
    }
    input {
      border: none;
      width: 80%;
      height: 50px;
      padding: 10px 20px;
      outline: none;
      border-radius:50px;
      text-align: center;
      background-color: var(--header-background-color);
    }
  }
  .hot{
      flex: 2;
      ul{
          padding-top: 10px;
          li{
              padding: 5px 0;
              label{
                padding-right: 5px;
              }
          }
      }
  }
}
</style>
