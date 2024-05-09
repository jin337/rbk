<template>
  <nut-sticky top="0"><top-search /></nut-sticky>

  <scroll-view class="index-wrap" :scroll-y="true">
    <nut-swiper :init-page="2" :auto-play="3000" pagination-visible pagination-color="#666"
      pagination-unselected-color="#f6f6f6">
      <nut-swiper-item v-for="(item, index) in swiperInfo" :key="index" style="height: 300px">
        <img :src="item" alt="" class="img" style="height: 100%; width: 100%" draggable="false" />
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

    <view class="gap grid">
      <nut-grid square :border="false">
        <nut-grid-item v-for="(item, index) in categoryInfo || []" :key="index" :text="item.catName"
          @click="toBuy(index)">
          <nut-avatar shape="square" size="large">
            <img :src="item.backImg" />
          </nut-avatar>
        </nut-grid-item>
      </nut-grid>
    </view>

    <nut-divider class="divider"> 瑞贝卡母婴生活馆 </nut-divider>
  </scroll-view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { IconFont } from '@nutui/icons-vue-taro'

import { useCommonStore } from '../../stores/common';
import { useShopStore } from '../../stores/shop';

const commonStore = useCommonStore()
const shopStore = useShopStore()
const swiperInfo = commonStore.swiperInfo
const categoryInfo = shopStore.categoryInfo?.slice(0, 8)

const toBuy = (index) => {
  Taro.switchTab({ url: '/pages/buy/index' })
  shopStore.setCategorySelected(index)
}
</script>

<style lang="scss">
.index-wrap {
  overflow: hidden;
  box-sizing: border-box;
  height: calc(100vh - #{100px + 100px});
  padding-bottom: env(safe-area-inset-bottom);
  .gap {
    margin-top: 10px;
    background-color: #fff;
  }
  .grid {
    padding: 14px 0;
  }
  .divider {
    font-size: 24px;
    padding-top: 50px;
    padding-right: 20%;
    padding-bottom: 50px;
    padding-left: 20%;
    color: rgba(28, 31, 35, 0.2);
  }
}
</style>
