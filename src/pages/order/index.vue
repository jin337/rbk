<template>
  <view class="empty"><nut-empty image-size="300" description="亲，你还没有订单哦~"></nut-empty></view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import {  } from 'vue';
</script>

<style lang="scss">
// page {
//   padding-bottom: 115px;
// }

.empty {
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
