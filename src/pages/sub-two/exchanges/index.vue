<template>
  <view class="exchanges">
    <view class="tap">仅展示近一年的消费明细</view>
    <nut-table :columns="columns" :data="data" :bordered="false" striped>
      <template #nodata>
        <div class="no-data"> 暂无明细 </div>
      </template></nut-table>
  </view>
</template>

<script setup>
import { ref } from 'vue';
const columns = ref([
  {
    title: '日期',
    key: 'date',
    align: 'center'
  },
  {
    title: '金额',
    key: 'money',
    align: 'center',
    render: (record) => {
      let type = record.type == 1 ? '-' : '+'
      return type + record.money
    }
  },
  {
    title: '来源',
    key: 'source',
    align: 'center'
  }
])

const data = ref([
  {
    date: '2024-04-30',
    money: 23.5,
    source: '门店消费',
    type: 1
  },
  {
    date: '2024-04-30',
    money: 50,
    source: '充值',
    type: 2
  },
  {
    date: '2024-04-30',
    money: 100,
    source: '快递外卖',
    type: 1
  },
  {
    date: '2024-04-30',
    money: 50,
    source: '门店配送',
    type: 1
  },
])

</script>

<style lang='scss'>
.exchanges {
  background-color: #fff;
  .tap {
    font-size: 26px;
    padding: 30px 0;
    text-align: center;
    color: #666;
  }
}
</style>
