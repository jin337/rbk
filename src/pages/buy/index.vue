<template>
  <top-search />
  <top-category :list-data="categoryInfo" v-model="categorySelected" />

  <tab-list :list-data="classesInfo" v-model="value">
    <template #header>
      <tag-category :list-data="tags" v-model="categoryTag" />
    </template>
    <product-list :list-data="products" v-model="shopCart" />
  </tab-list>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useShopStore } from '../../stores/shop';

import topSearch from '../../components/top-search/index.vue';
import topCategory from '../../components/top-category/index.vue';
import tabList from '../../components/tab-list/index.vue';
import tagCategory from '../../components/tag-category/index.vue';
import productList from '../../components/product-list/index.vue';

const shopStore = useShopStore()

// 全部分类选中
const categorySelected = computed({
  get: () => shopStore.categorySelected,
  set: (value) => shopStore.setCategorySelected(value)
});

// 全部分类
const categoryInfo = shopStore.categoryInfo
const classesInfo = shopStore.classesInfo

// tabs选中
const value = ref(0)

// tag选中
const categoryTag = ref(0)
const tags = [
  {
    id: 1,
    name: '好奇'
  },
  {
    id: 2,
    name: '帮宝适'
  },
  {
    id: 3,
    name: 'BABYCARE'
  },
  {
    id: 4,
    name: '碧芭'
  },
  {
    id: 5,
    name: '大王'
  },
  {
    id: 6,
    name: '尤妮佳'
  },
  {
    id: 7,
    name: '花王'
  },
]

// 商品
const products = shopStore.products
const shopCart = computed({
  get: () => shopStore.shopCart,
  set: (value) => shopStore.setShopCart(value)
});
</script>

<style lang="scss">
</style>
