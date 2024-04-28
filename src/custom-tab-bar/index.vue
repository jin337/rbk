<template>
  <cover-view class="tab-bar">
    <cover-view class="tab-bar-border"></cover-view>
    <cover-view v-for="(item, index) in list" :key="index" class="tab-bar-item" @tap="switchTab(index, item.pagePath)">
      <cover-image :src="selected === index ? item.selectedIconPath : item.iconPath" />
      <cover-view :style="{ color: selected === index ? selectedColor : color }">{{ item.text }}</cover-view>
    </cover-view>
  </cover-view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import { computed } from 'vue'
import { useStore } from '../stores/tabBar'

const store = useStore()
const selected = store.selected

const color = '#8a8a8a'
const selectedColor = '#000000'
const list = [
  {
    pagePath: '/pages/index/index',
    selectedIconPath: '../images/shouye_on.png',
    iconPath: '../images/shouye.png',
    text: '首页'
  },
  {
    pagePath: '/pages/buy/index',
    selectedIconPath: '../images/gouwu_on.png',
    iconPath: '../images/gouwu.png',
    text: '点单'
  },
  {
    pagePath: '/pages/order/index',
    selectedIconPath: '../images/dingdan_on.png',
    iconPath: '../images/dingdan.png',
    text: '订单'
  },
  {
    pagePath: '/pages/my/index',
    selectedIconPath: '../images/wode_on.png',
    iconPath: '../images/wode.png',
    text: '个人中心'
  }
]

function switchTab (index, url) {
  store.setSelected(index)
  Taro.switchTab({ url })
}
</script>

<style lang="scss">
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: #fff;
  display: flex;
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-bar-border {
  background-color: rgba(0, 0, 0, 0.33);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  transform: scaleY(0.5);
}

.tab-bar-item {
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.tab-bar-item cover-image {
  width: 56px;
  height: 56px;
}

.tab-bar-item cover-view {
  font-size: 20px;
  margin-top: 3px;
}
</style>
