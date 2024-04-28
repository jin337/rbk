<template>
  <view class="product-list">
    111
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

</script>

<style lang='scss'>
.product-list {
  width: 100%;
}
</style>
