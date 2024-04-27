<template>
  <nut-swiper :init-page="2" :auto-play="3000" pagination-visible pagination-color="#666"
    pagination-unselected-color="#f6f6f6">
    <nut-swiper-item v-for="(item, index) in itemList" :key="index" :style="styleHei">
      <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
    </nut-swiper-item>
  </nut-swiper>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  height: String,
  list: Object
})

const styleHei = computed(() => props.height || 200 + 'px')
const itemList = computed({
  get () {
    let list = props.list
    if (list != null && Array.isArray(list)) {
      return list
    }
    return []
  }
})
</script>

<style lang='scss'>
</style>
