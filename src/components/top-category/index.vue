<template>
  <view class="category-wrap">
    <view class="surface">
      <scroll-view class="category" :scroll-x="true" :scroll-with-animation="true"
        :scroll-into-view="'category-' + modelValue">
        <view v-for="(item, index) in itemList" :key="item.catId" :id="'category-' + index"
          :class="['item', { 'active': index == modelValue }]" @click="handleSelect(index)">
          <img :src="item.backImg" class="avatar" />
          <view class="name">{{ item.catName }}</view>
        </view>
      </scroll-view>
      <view class="all" @click="showAllBox">
        <view>全</view>
        <view>部</view>
        <IconFont name="triangle-down" color="#666"></IconFont>
      </view>
    </view>

    <view v-show="showAll">
      <nut-overlay v-model:visible="showAll"></nut-overlay>
      <view class="exhibition">
        <view class="exhibition-top">
          <view class="title">全部分类</view>
          <view class="hide" @click="showAllBox">收起<IconFont name="triangle-up" color="#666"></IconFont>
          </view>
        </view>
        <view class="category-all">
          <view v-for="(item, index) in itemList" :key="item.catId" :class="['item', { 'active': index == modelValue }]"
            @click="handleSelect(index)">
            <img :src="item.backImg" class="avatar" />
            <view class="name">{{ item.catName }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { computed } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro';

const emit = defineEmits(['update:modelValue']);
// 传参
const props = defineProps({
  ['list-data']: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Number,
    required: true,
  },
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
const handleSelect = (index) => {
  if (showAll.value) {
    showAllBox()
  }
  emit('update:modelValue', index);
}

</script>

<style lang='scss'>
.category-wrap {
  position: relative;
  width: 100%;
  .item {
    box-sizing: border-box;
    width: 120px;
    margin-top: 30px;
    text-align: center;
    .avatar {
      overflow: hidden;
      box-sizing: border-box;
      width: 92px;
      height: 92px;
      border: 1px solid #fff;
      border-radius: 92px;
    }
    .name {
      font-size: 24px;
      overflow: hidden;
      margin-top: 4px;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-radius: 24px;
    }
  }
  .active {
    .avatar {
      border-color: #0077fa;
    }
    .name {
      color: #fff;
      background-color: #0077fa;
    }
  }
  .surface {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    .category {
      width: 90%;
      height: 180px;
      white-space: nowrap;
      .item {
        display: inline-block;
        padding-left: 14px;
      }
    }
    .all {
      font-size: 24px;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 10%;
      text {
        font-size: 20px;
      }
    }
  }
  .exhibition {
    position: fixed;
    z-index: 2001;
    top: 100px;
    left: 0;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    background-color: #fff;
    .exhibition-top {
      display: flex;
      align-items: flex-end;
      flex-direction: row;
      justify-content: space-between;
      .title {
        font-size: 28px;
        font-weight: bold;
        margin-top: 40px;
        padding: 0 32px;
      }
      .hide {
        font-size: 24px;
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: center;
        color: #666;
        text {
          font-size: 20px;
        }
      }
    }
    .category-all {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding-bottom: 30px;
      .item {
        margin-top: 40px;
        margin-left: 27px;
      }
    }
  }
}
</style>
