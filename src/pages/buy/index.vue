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

  <nut-tabs v-model="value" direction="vertical" title-scroll>
    <nut-tab-pane v-for="(item, index) in categoryInfo" :key="item.catName" :title="item.catName" :pane-key="index">
      <view class="brand-wrap">
        <scroll-view :scroll-x="true" class="brand-box">
          <nut-button size="mini" type="info">品牌1</nut-button>
          <nut-button size="mini">品牌2品牌2</nut-button>
          <nut-button size="mini">品牌3</nut-button>
          <nut-button size="mini">品牌4</nut-button>
          <nut-button size="mini">品牌5品牌5品牌5</nut-button>
          <nut-button size="mini">品牌6</nut-button>
        </scroll-view>
        <IconFont name="rect-down" color="#666"></IconFont>
      </view>

      <view class="commodity">
        <img class="img"
          src='https://img10.360buyimg.com/ling/s345x208_jfs/t1/133501/7/9865/382161/5f5ee31fEbdd6a418/0cdc0156ffff3c23.png' />
        <view>
          <view class="title">商品标题</view>
          <view class="dec">商品介绍</view>
          <view class="vip-price"><nut-tag>vip</nut-tag><nut-price thousands :price="20" size="small" /></view>
          <view class="price"><nut-price thousands :price="21.5" size="normal" /></view>
          <view class="push" v-if="val == 0" @click="val = 1">+</view>
          <nut-input-number v-model="val" :min="0" v-else />
        </view>
      </view>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'
import { useStore } from '../../stores/common';
const store = useStore()
const categoryInfo = store.categoryInfo?.slice(0, 8)

const search = ref('')
const value = ref('0')
const val = ref(0)
</script>

<style lang="scss">
.brand-wrap {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  .brand-box {
    width: 80%;
    white-space: nowrap;

    button {
      margin-right: 10px;
    }
  }

  .commodity {}
}

.img {
  width: 100px;
  height: 100px;
}
</style>
