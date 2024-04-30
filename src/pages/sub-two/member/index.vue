<template>
  <view class="member-wrap">
    <nut-avatar size="large" class="avatar">
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
    </nut-avatar>
    <view class="title">小明</view>

    <img class="card1"
      src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg" alt="">
    <img class="card2"
      src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg" alt="">

    <view class="member-list">
      <view class="circle left"></view>
      <view class="circle right"></view>
      <view class="item" @click="toCoupon">
        <view class="num">0</view>
        <view class="name">优惠券</view>
      </view>
      <view class="item" @click="toWallet">
        <view class="num">0.00</view>
        <view class="name">余额</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { } from 'vue';

// 跳转页面-会员码
const toWallet = () => {
  Taro.navigateTo({ url: '/pages/sub-two/wallet/index' })
}
// 跳转页面-优惠券
const toCoupon = () => {
  Taro.navigateTo({ url: '/pages/sub-two/coupon/index' })
}
</script>

<style lang='scss'>
.member-wrap {
  position: relative;
  margin: 120px 50px;
  text-align: center;
  border-radius: 20px;
  background-color: #fff;

  .avatar {
    margin-top: -50px;
    border: 8px solid #fff;
  }

  .title {
    font-size: 26px;
    margin-top: 10px;
  }

  .card1 {
    width: 80%;
    height: 150px;
    margin-top: 40px;
  }

  .card2 {
    width: 260px;
    height: 260px;
    margin-top: 60px;
  }

  .member-list {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    padding: 50px;
    border-top: 1px dashed #ddd;

    .item {
      width: 50%;
      color: #333;

      .name {
        font-size: 26px;
        margin-top: 10px;
      }

      .num {
        font-size: 32px;
        font-weight: bold;
      }
    }

    .circle {
      position: absolute;
      width: 40px;
      height: 40px;
      top: -20px;
      border-radius: 40px;
      background-color: #f2f2f2;
    }

    .left {
      left: -20px;
    }

    .right {
      right: -20px;
    }
  }
}
</style>
