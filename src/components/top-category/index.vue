<template>
  <view class="category-wrap">
    <view class="surface">
      <scroll-view :scroll-x="true" class="category" :scrollWithAnimation="true" :scrollLeft="scrollLeft">
        <view v-for="(item, index) in itemList" :key="item.catId"
          :class="['item', { 'active': index == modelValue, 'first': index == 0 }]" @click="handleSelect(index)">
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
        <view class="title">全部分类</view>
        <view class="category-all">
          <view v-for="(item, index) in itemList" :key="item.catId" :class="['item', { 'active': index == modelValue }]"
            @click="handleSelect(index)">
            <img :src="item.backImg" class="avatar" />
            <view class="name">{{ item.catName }}</view>
          </view>
        </view>
        <view class="hide" @click="showAllBox">点击收起<IconFont name="triangle-up" color="#666"></IconFont>
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
  get () {
    let list = props.listData
    if (list != null && Array.isArray(list)) {
      return list
    }
    return []
  }
})

const scrollLeft = computed({
  get: () => {
    let num = 0
    const index = props.modelValue
    const difference = 68
    const firstTerm = difference / 2
    if (index < 4) {
      return 0;
    }
    const termNumber = index - 3;
    const value = firstTerm + termNumber * difference;
    return value;
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
.category-wrap {
  position: relative;
  width: 100%;

  .item {
    box-sizing: border-box;
    width: 120px;
    margin-top: 40px;
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
      border-color: #fa2c19;
    }

    .name {
      color: #fff;
      background-color: #fa2c19;
    }
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
    height: 240px;
    white-space: nowrap;

    .item {
      display: inline-block;
      margin-left: 4px;
    }

    .first {
      margin-left: 14px;
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

  .title {
    font-weight: bold;
    margin-top: 40px;
    padding: 0 32px;
  }

  .category-all {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 20px 0;

    .item {
      margin-left: 27px;
    }
  }

  .hide {
    font-size: 24px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
    color: #666;
    border-top: 1px solid rgba(28, 31, 35, 0.08);

    text {
      font-size: 20px;
    }
  }
}
</style>
