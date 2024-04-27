<template>
  <view class="category-wrap">
    <view class="surface">
      <scroll-view :scroll-x="true" class="category">
        <view v-for="(item, index) in itemList" :key="item.catId" :class="['item', { 'active': index == modelValue }]"
          @click="handleSelect(index)">
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

// 收起蒙板
const showAll = ref(false)
const showAllBox = () => {
  showAll.value = !showAll.value
}

// 选择
const emit = defineEmits(['update:modelValue']);
const selected = computed(() => props.active || 0)
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
    margin: 40px 10px;
    text-align: center;

    .avatar {
      overflow: hidden;
      width: 90px;
      height: 90px;
      border: 1px solid #fff;
      border-radius: 90px;
    }

    .name {
      padding: 0 12px;
      font-size: 28px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      border-radius: 28px;
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
    }
  }

  .all {
    font-size: 28px;
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
    justify-content: center;
    padding: 20px 0;

    .item {
      margin: 30px 7px;
    }
  }

  .hide {
    font-size: 28px;
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
