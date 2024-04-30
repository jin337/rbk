<template>
  <nut-searchbar v-model="val">
    <template #leftin>
      <IconFont name="search2" color="#666"></IconFont>
    </template>
    <template #rightout><nut-button type="primary" size="small">搜索</nut-button></template>
  </nut-searchbar>

  <product-list :list-data="products" v-model="shopCart" />
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
</script>

<style lang='scss'>
</style>
