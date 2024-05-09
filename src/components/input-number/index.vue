<template>
  <view class="input-number">
    <view class="iconfont icon-icon_ajianshao_outline" @click="decrease" v-if="modelValue"></view>
    <view class="txt" v-if="modelValue">{{ modelValue }}</view>
    <view class="iconfont icon-icon_atianjia_solid" @click="increase"></view>
  </view>
</template>

<script setup>
import { } from 'vue';
const emit = defineEmits(['update:modelValue', 'change']);
// 传参
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  }
})

// 增加
const increase = () => {
  let num = props.modelValue
  num += 1
  if (num >= props.max) {
    num = props.max
  }
  emit('update:modelValue', num);
  emit('change', num);
}
// 减少
const decrease = () => {
  let num = props.modelValue
  num -= 1
  if (num <= props.min) {
    num = 0
  }
  emit('update:modelValue', num);
  emit('change', num);
}
</script>

<style lang='scss'>
.input-number {
  display: flex;
  flex-direction: row;
  align-items: center;

  .txt {
    font-size: 28px;
    font-weight: bold;
    width: 60px;
    text-align: center;
  }

  .iconfont {
    font-size: 50px;
    color: #0077fa;
  }
}
</style>
