<template>
  <nut-sticky top="0">
    <nut-searchbar v-model="val">
      <template #leftin>
        <IconFont name="search2" color="#666"></IconFont>
      </template>
      <template #rightout><nut-button type="primary" size="small">搜索</nut-button></template>
    </nut-searchbar>
  </nut-sticky>

  <view class="empty" v-if="isEmpty"><nut-empty image-size="200" description=" "></nut-empty></view>

  <product-list :list-data="products" v-model="shopCart" v-else />

  <cart v-model="shopCart" :bottom="0" @submit="toCreate" />
</template>

<script setup>
import Taro from '@tarojs/taro';
import { IconFont } from '@nutui/icons-vue-taro'
import { computed } from 'vue';
import { useShopStore } from '../../../stores/shop';

const shopStore = useShopStore()
const products = shopStore.products

const shopCart = computed({
  get: () => shopStore.shopCart,
  set: (value) => shopStore.setShopCart(value)
});

const isEmpty = computed(() => products.length === 0)

// 页面跳转-结账
const toCreate = (e) => {
  Taro.navigateTo({ url: '/pages/sub-three/order-create/index' })
}
</script>

<style lang='scss'>
.empty {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 80vh;
}
</style>
