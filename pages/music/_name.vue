<!--
 * @Author: HADES
 * @Date: 2019-08-21 11:48:25
 * @LastEditTime: 2019-08-22 15:43:44
 * @Description:    音乐页面
 -->
<template>
  <div class="music">
    <div class="search">
      <div class="lable">
        搜 <span />索
      </div>
      <input
        v-model="keyworld"
        type="text"
        @keyup.enter="submit"
      >
      <i class="el-icon-circle-close close" @click="clearSearch" />
      <div v-show="is_search" class="search-suggest">
        <div class="title">
          搜索建议
        </div>

        <div v-if="searchData.length === 0" class="load-container">
          <div class="boxLoading" />
        </div>
        <ul>
          <li v-for="(item,index) in searchData" :key="index" @click="getMUsicInfo(item.id)">
            <span class="name"> {{ item.name }}</span>
            <span class="author">
              <span v-for="(items,idx) in item.artists" :key="idx">{{ items.name }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="recommend">
      <div class="hot">
        热门歌曲
        <ul>
          <li
            v-for="(item,index) in hot"
            :key="index"
            @click="getMUsicInfo(item.id)"
          >
            <label>{{ index+1 }}</label>
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="new">
        新歌榜
        <ul>
          <li
            v-for="(item,index) in news"
            :key="index"
            @click="getMUsicInfo(item.id)"
          >
            <label>{{ index+1 }}</label>
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="copyright">
      所有音乐版权归
      <a href="https://music.163.com/" target="_blank">
        网易云音乐
      </a>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'hades',
  data() {
    return {
      hot: [],
      news: [],
      searchData: [],
      keyworld: '',
      is_search: false
    }
  },
  created() {
    this.getHot()
    this.getNew()
  },
  mounted() {

  },
  methods: {
    // 获取热门排行榜
    async getHot() {
      await this.$axios.get('/api/weapp/music/gethotmusic').then((res) => {
        this.hot = res.playlist.tracks.slice(0, 50)
      }).catch((err) => { console.log(err) })
    },
    // 获取新排行榜
    async getNew() {
      await this.$axios.get('/api/weapp/music/getnewmusic').then((res) => {
        this.news = res.playlist.tracks.slice(0, 50)
      })
    },
    async getMUsicInfo(id) {
      await this.$axios.post('/api/weapp/music/getmusic', { mid: id }).then((res) => {
        const options = {
          name: res.musicInfo.name,
          artist: res.musicInfo.ar[0].name,
          url: res.url,
          cover: res.musicInfo.al.picUrl,
          lrc: res.musicLrc
        }
        // console.log(options)

        this.$store.commit('data/addAudio', options)
      })
    },
    async submit() {
      this.is_search = true
      if (this.keyworld === '') {
        this.$message.error('请输入关键词')
      } else {
        await this.$axios.post('/api/weapp/music/search', { keyworld: this.keyworld }).then((res) => {
          this.searchData = res.result.songs.slice(0, 10)
        })
      }
    },
    clearSearch() {
      this.keyworld = ''
      this.searchData = []
      this.is_search = false
    }
  }
}
</script>
<style lang="scss" scoped>
.music {
  .search {
    position: relative;
    width: 80%;
    text-align: center;
    .lable {
      font-size: 30px;
      color: var(--header-logo-color);
      padding-bottom: 5px;
      span {
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
      border-radius: 50px;
      text-align: center;
      background-color: var(--header-background-color);
    }
    .close{
      position: absolute;
      right: 110px;
      top: 52px;
      font-size: 36px;
      color: var(--text-color);
      cursor: pointer;
    }
    .close:hover{
        color: var(--header-logo-color);
    }
    .search-suggest{
      position: absolute;
      width: 80%;
      left: 50%;
      top: 100px;
      transform: translateX(-50%);
      color: var(--header-logo-color);
      background-color: var(--header-background-color);
      border-radius: 5px;
      border: 1px solid #F1F1F1;
      .title{
        margin: 5px 0;
      }
      ul{
        text-align: left;
        padding: 20px 0;

        li{
          cursor: pointer;
          padding: 5px 0 5px 40px;
          .name{
            display: inline-block;
           width: 300px;
          }
        }
        li:hover{
          text-decoration: underline;
        }
      }
    }
  }
  .recommend {
    width: 80%;
    margin: 20px auto;
    display: flex;
    color:var(--header-logo-color);
    .hot,.new {
      width: 50%;
      ul {
        height: 280px;
        overflow-y: scroll;
        margin-top: 10px;
        li {
           cursor: pointer;
          padding: 5px 0;
          label {
            padding-right: 5px;
          }
        }
         li:hover{
          text-decoration: underline;
        }
      }
      ul::-webkit-scrollbar {display:none}
    }
  }
}

.copyright{
  position: absolute;
  bottom: -200px;
  right: 0;
}

.load-container {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: "";
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: "";
      width: 50px;
      height: 50px;
      background: #00adb5;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
