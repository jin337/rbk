<template>
  <view class="search-bar">
    <view class="box" @click="toSearch">
      <IconFont name="search2" color="#666"></IconFont>
    </view>
    <IconFont name="scan" color="#666" @click="toMember"></IconFont>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { IconFont } from '@nutui/icons-vue-taro'
// 跳转页面-会员码
const toMember = () => {
  Taro.navigateTo({ url: '/pages/sub-two/member/index' })
}
// 跳转页面-搜索页
const toSearch = () => {
  Taro.navigateTo({ url: '/pages/sub-one/search/index' })
}
</script>

<style lang="scss">
.search-bar {
  position: relative;
  z-index: 2001;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  padding: 18px 32px;
  background-color: #fff;

  .box {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 87%;
    height: 64px;
    padding-left: 16px;
    border-radius: 32px;
    background-color: #f5f5f5;
  }
}
</style>
