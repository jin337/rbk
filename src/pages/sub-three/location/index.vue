<template>
  <nut-address-list :data="data" show-bottom-button @add="addItem" @del-icon="delClick" @edit-icon="editClick"
    :data-options="dataOptions">
  </nut-address-list>

  <nut-dialog content="是否确认删除该项？" v-model:visible="del" @ok="onOk" />
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
const addItem = () => {
  Taro.navigateTo({ url: '/pages/sub-three/add-location/index' })
}

const del = ref(false)
const delClick = () => {
  del.value = true
}
const onOk = () => {
  console.log('确认删除');
};

const editClick = () => {
  Taro.navigateTo({ url: '/pages/sub-three/add-location/index' })
}
</script>

<style lang='scss'>
</style>
