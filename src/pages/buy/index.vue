<template>
  <top-search />
  <top-category :list-data="categoryInfo" v-model="categorySelected" />

  <tab-list :list-data="classesInfo" v-model="value">
    <template #header v-if="refresh">
      <tag-category :list-data="tags" v-model="categoryTag" />
    </template>
    <product-list :list-data="products" v-model="shopCart" v-if="refresh" />

    <template v-else>
      <view class="skeleton-item" v-for="i in 4" :key="i">
        <nut-skeleton animated avatar avatar-shape="square" avatar-size="82px" width="160px" row="3"></nut-skeleton>
      </view>
    </template>

  </tab-list>
  <cart v-model="shopCart" @submit="toCreate" />
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, computed, watch } from 'vue'
import { useShopStore } from '../../stores/shop';

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

// 重置slot
const refresh = ref(true)
watch(value, (value, old) => {
  if (value != old) {
    refresh.value = false
    setTimeout(() => {
      refresh.value = true
      categoryTag.value = 0
    }, 500);
  }
})

// 结账
const toCreate = (e) => {
  Taro.navigateTo({ url: '/pages/sub-three/order-create/index' })
}
</script>

<style lang="scss">
.skeleton-item {
  margin: 20px;
  margin-bottom: 40px;
}
</style>
