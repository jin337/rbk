<template>
  <top-search />
  <top-category :list-data="categoryInfo" v-model="selected" />

  <nut-tabs v-model="value" direction="vertical" title-scroll class="tab-wrap">
    <nut-tab-pane v-for="(item, index) in categoryInfo" :key="item.catName" :title="item.catName" :pane-key="index">
      <view>111</view>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from '../../stores/common';
import topSearch from '../../components/top-search/index.vue';
import topCategory from '../../components/top-category/index.vue';

const store = useStore()
const categoryInfo = store.categoryInfo

const value = ref('0')


const selected = computed({
  get: () => store.selected,
  set: (value) => store.setSelected(value)
});
</script>

<style lang="scss">
.tab-wrap {
  box-sizing: border-box;
  height: calc(100vh - #{100px + 100px + 240px});
  padding-bottom: env(safe-area-inset-bottom);
}
</style>
