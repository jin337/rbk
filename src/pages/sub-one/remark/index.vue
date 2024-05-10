<template>
  <view class="remark-wrap">
    <nut-textarea v-model="val" limit-show :max-length="200" placeholder="请输入订单备注" />
    <nut-button block type="primary" shape="square" @click="toOrderCreate">确认</nut-button>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref } from 'vue';
const val = ref('')

// 跳转页面-备注页
const toOrderCreate = () => {
  Taro.navigateBack({ url: '/pages/sub-three/order-create/index' })
}
</script>

<style lang='scss'>
.remark-wrap {
  margin: 20px;

  .nut-textarea {
    margin-bottom: 30px;
    padding: 20px;
  }
}
</style>
