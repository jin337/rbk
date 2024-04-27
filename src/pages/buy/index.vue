<template>
  <top-search />

  <nut-tabs v-model="value" direction="vertical" title-scroll class="tab-wrap">
    <nut-tab-pane v-for="(item, index) in categoryInfo" :key="item.catName" :title="item.catName" :pane-key="index">
      <view>111</view>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from '../../stores/common';
import topSearch from '../../components/top-search';

const store = useStore()
const categoryInfo = store.categoryInfo

const value = ref('0')
</script>

<style lang="scss">
.tab-wrap {
  box-sizing: border-box;
  height: calc(100vh - #{105px + 95px});
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
