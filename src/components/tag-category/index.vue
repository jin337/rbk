<template>
  <view class="tag-category">
    <view class="surface">
      <scroll-view :scroll-x="true" class="group">
        <view v-for="(item, index) in itemList" :key="item.id"
          :class="['item', { 'active': index == modelValue, 'first': index == 0 }]" @click="handleSelect(index)">
          {{ item.name }}</view>
      </scroll-view>
      <view class="icon" @click="showAllBox">
        <IconFont name="rect-down" color="#666" size="12"></IconFont>
      </view>
    </view>

    <view v-show="showAll">
      <nut-overlay v-model:visible="showAll"></nut-overlay>
      <view class="exhibition">
        <view class="exhibition-top">
          <view class="title">全部品牌</view>
          <view class="icon" @click="showAllBox">
            <IconFont name="rect-up" color="#666" size="12"></IconFont>
          </view>
        </view>
        <view class="category-all">
          <view v-for="(item, index) in itemList" :key="item.id" :class="['item', { 'active': index == modelValue }]"
            @click="handleSelect(index)">{{ item.name }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, computed } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

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
      return list
    }
    return []
  }
})

// 收起蒙板
const showAll = ref(false)
const showAllBox = () => {
  showAll.value = !showAll.value
}

// 选择
const emit = defineEmits(['update:modelValue']);
const handleSelect = (index) => {
  if (showAll.value) {
    showAllBox()
  }
  emit('update:modelValue', index);
}

</script>

<style lang='scss'>
.tag-category {
  width: 100%;
  .surface {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #f2f2f2;
    .group {
      width: 90%;
      height: 84px;
      white-space: nowrap;
      .item {
        font-size: 24px;
        line-height: 24px;
        display: inline-block;
        margin-top: 20px;
        margin-left: 10px;
        padding: 10px 20px;
        color: #6b7075;
        border-radius: 24px;
        background-color: #f2f2f2;
      }
      .first {
        margin-left: 20px;
      }
      .active {
        color: #fa2c19;
      }
    }
    .icon {
      font-size: 24px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 10%;
      padding: 10px 0;
    }
  }
  .exhibition {
    position: fixed;
    z-index: 2001;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 30px 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #fff;
    .exhibition-top {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      .title {
        font-size: 24px;
      }
      .icon {
        font-size: 24px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        color: #666;
      }
    }
    .category-all {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      .item {
        font-size: 24px;
        line-height: 24px;
        width: 30%;
        margin-top: 20px;
        margin-right: 18px;
        padding: 20px 0;
        text-align: center;
        border-radius: 40px;
        background-color: #f2f2f2;
      }
      .active {
        color: #fa2c19;
      }
    }
  }
}
</style>
