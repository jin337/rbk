<template>
  <view class="tab-list">
    <scroll-view class="tab-left" :scroll-y="true" :scroll-with-animation="true" :scroll-into-view="'tab-' + modelValue">
      <view v-for="(item, index) in itemList" :key="index" :class="['item', { 'active': index == modelValue }]"
        :id="'tab-' + index" @click="handleSelect(index)">{{
          item.catName }}</view>
    </scroll-view>
    <view class="tab-right">
      <nut-sticky top="0">
        <slot name="header"></slot>
      </nut-sticky>
      <scroll-view :class="$slots.header ? 'tab-content' : 'tab-content1'" :scroll-y="true">
        <slot></slot>
      </scroll-view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

const emit = defineEmits(['update:modelValue']);
// 传参
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  ['list-data']: {
    type: Object,
    required: true
  }
})

// 数组数据
const itemList = computed({
  get: () => {
    let list = props.listData
    if (list != null && Array.isArray(list)) {
      list.forEach(element => {
        element.select = 0
      });
      return list
    }
    return []
  }
})

// 选择
const handleSelect = (index) => {
  emit('update:modelValue', index);
}
</script>

<style lang='scss'>
.tab-list {
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: flex-start;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  height: calc(100vh - #{100px + 100px + 180px});
  padding-bottom: env(safe-area-inset-bottom);
  background-color: #fff;

  .tab-left {
    box-sizing: border-box;
    width: 200px;
    height: 100%;
    padding: 20px 0;
    background-color: #f5f5f5;

    .item {
      font-size: 28px;
      padding: 20px 10px;
      text-align: center;
    }

    .active {
      position: relative;
      color: #0077fa;
      background-color: #fff;

      &::before {
        position: absolute;
        top: 20%;
        left: 0;
        width: 4px;
        height: 60%;
        content: '';
        border-radius: 4px;
        background-color: #0077fa;
      }
    }
  }

  .tab-right {
    position: relative;
    width: calc(100% - #{200px});
    height: 100%;
    transform: scale(1);

    .tab-content {
      height: calc(100% - #{84px});
    }

    .tab-content2 {
      height: 100%;
    }
  }
}
</style>
