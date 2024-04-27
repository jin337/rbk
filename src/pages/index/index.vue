<template>
  <nut-sticky top="0">
    <nut-searchbar v-model="search" placeholder=" " input-background="#f6f6f6">
      <template #rightout>
        <IconFont name="scan" color="#666"></IconFont>
      </template>
      <template #leftin>
        <IconFont name="search2" color="#666"></IconFont>
      </template>
    </nut-searchbar>
  </nut-sticky>

  <nut-swiper :init-page="2" :auto-play="3000" pagination-visible pagination-color="#666"
    pagination-unselected-color="#f6f6f6">
    <nut-swiper-item v-for="(item, index) in swiperInfo" :key="index" style="height: 300px">
      <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
    </nut-swiper-item>
  </nut-swiper>

  <nut-grid :column-num="2" class="gap">
    <nut-grid-item text="门店自提">
      <IconFont name="cart" size="36" color="#666"></IconFont>
    </nut-grid-item>
    <nut-grid-item text="外卖配送">
      <IconFont name="jdl" size="36" color="#666"></IconFont>
    </nut-grid-item>
  </nut-grid>

  <nut-grid square :border="false" class="gap">
    <nut-grid-item v-for="(item, index) in categoryInfo || []" :key="index" :text="item.catName">
      <nut-avatar shape="square" size="large">
        <img :src="item.backImg" />
      </nut-avatar>
    </nut-grid-item>
  </nut-grid>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'
import { useStore } from '../../stores/common';
const store = useStore()

const swiperInfo = store.swiperInfo
const categoryInfo = store.categoryInfo?.slice(0, 8)
const search = ref('')
</script>

<style lang="scss">
page {
  padding-bottom: 180px;
}

.gap {
  margin-top: 10px;
}
</style>
