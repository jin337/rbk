<template>
  <view class="category-wrap">
    <scroll-view :scroll-x="true" class="category">
      <view v-for="item in itemList" :key="item.catId" class="item">
        <nut-avatar size="large">
          <img :src="item.backImg" />
        </nut-avatar>
        <view class="name">{{ item.catName }}</view>
      </view>
    </scroll-view>
    <view class="all">
      <text>全</text>
      <text>部</text>
      <IconFont name="triangle-down" color="#666"></IconFont>
    </view>
  </view>
</template>

<script setup>
import { computed } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro';

const props = defineProps({
  ['list-data']: Object
})
const itemList = computed({
  get () {
    let list = props.listData
    if (list != null && Array.isArray(list)) {
      return list
    }
    return []
  }
})

</script>

<style lang='scss'>
.category-wrap {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  background-color: #fff;
}

.category {
  width: 90%;
  height: 240px;
  white-space: nowrap;

  .item {
    display: inline-block;
    width: 150px;
    margin: 0 10px;
    margin-top: 41px;
    text-align: center;

    .name {
      font-size: 28px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.all {
  font-size: 28px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 10%;
}
</style>
