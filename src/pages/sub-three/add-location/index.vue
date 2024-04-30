<template>
  <nut-form ref="formRef">
    <nut-form-item label="姓名" prop="name" :rules="[{ required: true, message: '请填写姓名' }]">
      <nut-input v-model="formData.name" placeholder="请输入姓名" type="text" />
    </nut-form-item>
    <nut-form-item label="电话" prop="tel" required :rules="[
      { required: true, message: '请填写联系电话' },
      { validator: asyncValidator, message: '电话格式不正确' }
    ]">
      <nut-input v-model="formData.tel" placeholder="请输入联系电话" type="text" />
    </nut-form-item>
    <nut-form-item label="地址" prop="address" required :rules="[{ required: true, message: '请填写地址' }]">
      <nut-input v-model="formData.address" placeholder="请输入地址" type="text" />
    </nut-form-item>
    <nut-form-item label="是否默认" prop="default">
      <nut-switch v-model="formData.default" active-text="是" inactive-text="否"></nut-switch>
    </nut-form-item>
  </nut-form>

  <view class="btn">
    <nut-button block type="primary" @click="submit">提交</nut-button>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref } from 'vue'
const formData = ref({
  name: '',
  tel: '',
  addr: '',
  default: ''
})
const formRef = ref(null)

const submit = () => {
  // formRef.value?.validate().then(({ valid, errors }) => {
  //   if (valid) {
  //     console.log('success:', formData.value)
  //   } else {
  //     console.warn('error:', errors)
  //   }
  // })
}

</script>

<style lang='scss'>
.btn {
  margin: 40px;
}
</style>
