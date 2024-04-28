<template>
  <top-search />
  <top-category :list-data="categoryInfo" v-model="categorySelected" />

  <nut-tabs v-model="value" direction="vertical" title-scroll class="tab-wrap">
    <nut-tab-pane class="category-content" v-for="(item, index) in categoryInfo" :key="item.catName" :title="item.catName"
      :pane-key="index">
      <view>
        <tag-category :list-data="tags" v-model="categoryTag" />
      </view>
    </nut-tab-pane>
  </nut-tabs>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useStore } from '../../stores/common';
import topSearch from '../../components/top-search/index.vue';
import topCategory from '../../components/top-category/index.vue';
import tagCategory from '../../components/tag-category/index.vue';

const store = useStore()

// 全部分类选中
const categorySelected = computed({
  get: () => store.categorySelected,
  set: (value) => store.setCategorySelected(value)
});
// 全部分类
const categoryInfo = store.categoryInfo

// tabs选中
const value = ref(0)

// tag选中
const categoryTag = ref(0)
const tags = [
  {
    id: 1,
    name: '好奇'
  },
  {
    id: 2,
    name: '帮宝适'
  },
  {
    id: 3,
    name: 'BABYCARE'
  },
  {
    id: 4,
    name: '碧芭'
  },
  {
    id: 5,
    name: '大王'
  },
  {
    id: 6,
    name: '尤妮佳'
  },
  {
    id: 7,
    name: '花王'
  },
]
</script>

<style lang="scss">
.tab-wrap {
  position: relative;
  z-index: 1;
  box-sizing: border-box;
  height: calc(100vh - #{100px + 100px + 180px});
  padding-bottom: env(safe-area-inset-bottom);
}

.category-content {
  padding: 0;
  width: calc(100vw - #{200px});
}
</style>
