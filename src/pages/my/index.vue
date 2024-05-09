<template>
  <view class="my-info">
    <nut-avatar size="large">
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </nut-avatar>
    <view class="right">
      <view class="title">小明<text class="tel">138****8888</text></view>
      <view class="sub"><text class="tag">普卡</text>RBK123456789</view>
    </view>
  </view>
  <nut-grid :column-num="2" class="my-bank">
    <nut-grid-item v-for="(item, index) in itemList1" :key="index" @click="toLink(item)">
      <img class="img" mode="heightFix" :src="item.icon" />
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
    <button class="item" open-type="contact" bindcontact="handleContact">
      <view class="title">
        <IconFont name="service" color="#666" size="14" class="icon"></IconFont>
        在线客服
      </view>
      <IconFont name="rect-right" color="#666" size="12"></IconFont>
    </button>
  </view>

  <nut-divider class="divider"> 瑞贝卡母婴生活馆 </nut-divider>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'
// 图片引入
import yinhangka from '../../images/yinhangka.png';
import youhuiquan from '../../images/youhuiquan.png';

const itemList1 = ref([
  {
    title: '优惠劵',
    icon: youhuiquan,
    link: '/pages/sub-two/coupon/index',
    num: '0'
  },
  {
    title: '钱包',
    icon: yinhangka,
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
])

// 跳转页面-会员码
const toLink = (item) => {
  Taro.navigateTo({ url: item.link })
}

const handleContact = (e) => {
  console.log(e.detail.path)
  console.log(e.detail.query)
}
</script>

<style lang="scss">
.my-info {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 100px 30px 100px 30px;
  background: #0887f4;
  background: linear-gradient(to bottom, #0887f4, #d5e7f5);

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
      font-size: 24px;
      display: inline-block;
      overflow: hidden;
      margin-top: 16px;
      padding-right: 10px;
      border-radius: 6px;
      background-color: #fac800;

      .tag {
        display: inline-block;
        margin-right: 10px;
        padding: 6px 10px;
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
    width: 100px;
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
    padding: 30px;
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
