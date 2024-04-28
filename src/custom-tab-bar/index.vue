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
import { useTabBarStore } from '../stores/tabBar'

const tabBarStore = useTabBarStore()
const selected = tabBarStore.selected
const list = tabBarStore.list

const color = '#8a8a8a'
const selectedColor = '#000000'

function switchTab (index, url) {
  tabBarStore.setSelected(index)
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
