<!--
 * @Date: 2019-07-04 23:05:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-07-25 16:52:16
 * @Description:文章列表
 -->

<template>
  <div class="article-list">
    <div
      v-for="(item,index) in articlelist"
      :key="index"
      class="article-item"
      @click="toArticle(item.id)"
    >
      <div class="article-title ">
        <span style="display:inline-block" class="animated title">{{ item.title }}</span>
      </div>
      <el-tooltip :content="item.title" placement="top-end" effect="light">
        <div class="article-content">
          <div class="image-box">
            <img class="animated" :src="item.image" alt="">
          </div>
          <div class="des">
            {{ item.description }}
          </div>
        </div>
      </el-tooltip>
      <div class="article-footer">
        <div class="_right">
          <i class="iconfont" :class="item.icon" />
          <span>{{ item.name }}</span>
          <span>{{ item.reading }} 次阅读</span>
        </div>
        <div class="_left">
          <i class="iconfont icon-shijian" />
          <span>{{ item.ceate_time.slice(0,10) }}</span>
          <span class="o_r"> {{ original(item.original) }}</span>
        </div>
      </div>
    </div>

    <div
      v-if="articlelist.length !== 0"
      class="more"
      @click="more"
    >
      more
    </div>
    <div
      v-if="articlelist.length === 0"
      class="load-container"
    >
      <div class="boxLoading" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articlelist: {
      type: Array,
      required: true
    }
  },
  methods: {
    more() {
    },
    original(e) {
      if (e === 0) {
        return '原创'
      } else if (e === 1) {
        return '转载'
      }
    },
    toArticle(id) {
      this.$router.push(`/article/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.article-list {
  margin-top: 20px;
  border-radius: 5px;
  padding: 10px;
  background-color: var(--header-background-color);
  .article-item {
    border-bottom: 1px dashed var(--border-color);
    color: var(--header-logo-color);
    margin-bottom: 20px;
    cursor: pointer;
    .article-title {
      padding: 0 10px 10px 0;
      font-size: 1.1rem;
      color: var(--header-logo-color);
    }
    .article-content {
      display: flex;
      .image-box {
        background-color: var(--border-color);
        img {
          width: 150px;
          height: 90px;
          display: block;
          margin: 5px;
        }
      }
      .image-box:hover img {
        animation-name: hinge;
      }
      .des {
        padding: 0 20px;
        color: var(--text-color);
      }
    }
    .article-footer {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      ._right,
      ._left {
        display: flex;
        align-items: center;
        color: var(--text-color);
        font-size: 0.7rem;
        span {
          padding: 0 5px;
        }
        .o_r {
          padding: 2px 5px;
          border-radius: 2px;
          background-color: var(--content-color);
        }
      }
    }
  }
  .article-item:hover .title {
    animation-name: tada;
    background-image: -webkit-linear-gradient(
      left,
      red,
      #fd8403,
      rgb(255, 0, 200)
    );

    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  //加载更多按钮
  .more {
    width: 100px;
    height: 30px;
    margin: 0 auto;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    cursor: pointer;
    color: var(--text-color);
    background-color: var(--content-color);
  }
  .more:hover {
    background-color: var(--card-hover-color);
  }
  // 加载动画
  .load-container {
    position: relative;
    width: 100px;
    height: 100px;
    margin: 0 auto;
    .boxLoading {
      width: 25px;
      height: 25px;
      margin: 30px auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      &:before {
        content: "";
        width: 40px;
        height: 5px;
        background: var(--header-logo-color);
        opacity: 0.1;
        position: absolute;
        top: 39px;
        left: 0;
        border-radius: 50%;
        animation: shadow 0.5s linear infinite;
      }
      &:after {
        content: "";
        width: 25px;
        height: 25px;
        background: var(--text-color);
        animation: animate 0.5s linear infinite;
        position: absolute;
        top: 0;
        left: 5px;
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
}
</style>
