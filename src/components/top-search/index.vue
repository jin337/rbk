<template>
  <view class="searchbar">
    <view class="input"  @click="toSearch">
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

<style lang='scss'>
.searchbar {
  height: 100px;
  width: 100%;
  padding: 18px 32px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  .input {
    width: 87%;
    height: 64px;
    padding-left: 16px;
    border-radius: 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #f6f6f6;
  }
}
</style>
