<template>
  <view class="searchbar">
    <view class="box" @click="toSearch">
      <IconFont name="search2" color="#666"></IconFont>
    </view>
    <IconFont name="scan" color="#666" @click="toMember"></IconFont>
  </view>
</template>

<script setup>
import { IconFont } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro';
// 跳转页面-会员码
const toMember = () => {
  Taro.navigateTo({ url: '/pages/sub/member/index' })
}
// 跳转页面-搜索页
const toSearch = () => {
  Taro.navigateTo({ url: '/pages/sub/search/index' })
}
</script>

<style lang="scss">
.searchbar {
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
    background-color: #f6f6f6;
  }
}
</style>
