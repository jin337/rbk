<template>
  <nut-address-list :data="data" show-bottom-button @click-item="clickItem" @del-icon="delClick" @edit-icon="editClick"
    :data-options="dataOptions">
  </nut-address-list>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, reactive } from 'vue';

const data = ref([
  {
    testid: 3,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: false,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  {
    testid: 4,
    testaddressName: '姓名',
    phone: '123****4567',
    defaultAddress: true,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试'
  }
])
const dataOptions = reactive({
  id: 'testid',
  addressDetail: 'testaddressDetail',
  addressName: 'testaddressName'
})
const clickItem = () => {
  console.log('下新增')
}
const delClick = () => {
  console.log('删除')
}
const editClick = () => {
  console.log('编辑')
}
</script>

<style lang='scss'>
</style>
