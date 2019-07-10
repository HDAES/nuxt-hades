<template>
  <div class="about">
    <div class="avatar">
      <el-avatar shape="circle" :size="size" :src="squareUrl" />
      <div class="name">
        hades·xl
      </div>
      <span>
        I long for money ! ! !
      </span>
    </div>

    <div class="about-content">
      <div class="me-friend">
        <me />
        <friend />
      </div>
      <div class="des">
        <contacts />
      </div>
    </div>
  </div>
</template>

<script>
import Me from '@/components/hades/about/me'
import Friend from '@/components/hades/about/friend'
import Contacts from '@/components/hades/about/contacts'
export default {
  layout: 'hades-full',
  components: { Me, Friend, Contacts },
  data() {
    return {
      squareUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
      size: 64
    }
  }
}
</script>

<style lang="scss" soped>
.about{
    padding-top: 80px;
    width: var(--view-container);
    margin: 0 auto;
    .avatar{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        .name{
            font-family: 'Damion';
            font-size: 36px;
            padding: 5px 0;
            color: var(--header-logo-color);
        }
        span{
            padding: 5px 0;
            color: var(--text-color);
        }
    }
    .about-content{
        display: flex;
        flex-direction: row;
        .me-friend{
            flex: 2;
        }
        .des{
            flex: 1;
            margin-left: 20px;
        }
    }
}
</style>
