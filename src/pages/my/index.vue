<template>
  <view class="my-info">
    <nut-avatar size="large">
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </nut-avatar>
    <view class="right">
      <view class="title">小明<text class="tel">138****8888</text></view>
      <view class="sub"><text class="tag">普卡会员</text>RBK123456789</view>
    </view>
  </view>
  <nut-grid :column-num="2" class="my-bank">
    <nut-grid-item v-for="(item, index) in itemList1" :key="index" @click="toLink(item)">
      <image class="img" mode="heightFix" :src="item.icon" />
      <template #text>
        <view class="num">{{ item.num }}</view>
        <view class="title">{{ item.title }}</view>
      </template>
    </nut-grid-item>
  </nut-grid>

  <view class="my-list">
    <view class="item" v-for="(item, index) in itemList2" :key="index" @click="toLink(item)">
      <view class="title">
        <IconFont :name="item.icon" color="#666" size="14" class="icon"></IconFont>
        {{ item.title }}
      </view>
      <IconFont name="rect-right" color="#666" size="12"></IconFont>
    </view>
  </view>

  <nut-divider class="divider"> 瑞贝卡母婴生活馆 </nut-divider>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

const itemList1 = ref([
  {
    title: '优惠卷',
    icon: '../../images/yinhangka.png',
    link: '/pages/sub-two/coupon/index',
    num: '0'
  },
  {
    title: '钱包',
    icon: '../../images/youhuiquan.png',
    link: '/pages/sub-two/wallet/index',
    num: '0.00'
  },
])
const itemList2 = ref([
  {
    title: '会员码',
    icon: 'scan',
    link: '/pages/sub-two/member/index',
  },
  {
    title: '收货地址',
    icon: 'location2',
    link: '/pages/sub-three/location/index',
  },
  {
    title: '在线客服',
    icon: 'service',
    link: '',
  },
])

// 跳转页面-会员码
const toLink = (item) => {
  Taro.navigateTo({ url: item.link })
}
</script>

<style lang="scss">
.my-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 100px 30px 100px 30px;
  background: #3494e6;
  background: linear-gradient(to right, #3494e6, #ec6ead);

  .right {
    margin-left: 20px;

    .title {
      font-size: 34px;
      font-weight: bold;

      .tel {
        font-size: 24px;
        font-weight: normal;
        margin-left: 10px;
      }
    }

    .sub {
      font-size: 28px;
      display: inline-block;
      overflow: hidden;
      margin-top: 16px;
      padding-right: 10px;
      border-radius: 6px;
      background-color: #fac800;

      .tag {
        margin-right: 10px;
        padding: 0 10px;
        color: #fac800;
        background-color: #000;
      }
    }
  }
}

.my-bank {
  overflow: hidden;
  margin-top: -70px;
  margin-right: 20px;
  margin-left: 20px;
  text-align: center;
  border-radius: 30px;

  .img {
    width: auto;
    height: 100px;
  }

  .num {
    font-size: 30px;
    font-weight: bold;
  }

  .title {
    font-size: 24px;
  }
}

.my-list {
  width: 100%;
  margin-top: 40px;

  .item {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px 30px;
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;

    .title {
      font-size: 26px;
      display: flex;
      align-items: center;
      flex-direction: row;

      .icon {
        margin-right: 10px;
      }
    }
  }
}

.divider {
  font-size: 24px;
  padding-top: 50px;
  padding-right: 20%;
  padding-bottom: 50px;
  padding-left: 20%;
  color: rgba(28, 31, 35, 0.2);
}
</style>
