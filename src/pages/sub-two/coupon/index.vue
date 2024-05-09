<template>
  <nut-sticky top="0">
    <view class="coupon-title">
      <view v-for="item in tabList" :key="item.paneKey" class="item" @click="cutTab(item)">
        <view class="title" :class="{ active: tab === item.paneKey }">{{ item.title }}</view>
      </view>
    </view>
  </nut-sticky>

  <view class="coupon-wrap">
    <view class="item" v-for="item in couponData" :key="item.id">
      <view class="left" :class="item.type == 'c1' && (item.coupon_type == 2 ? 'theme2' : 'theme1')">
        <view class="circle top"></view>
        <view class="circle bottom"></view>
        <view class="price"><text class="unit">&#xa5;</text>{{ item.price }}</view>
        <view class="sub" v-if="item.coupon_type == 1">满减劵</view>
        <view class="sub" v-if="item.coupon_type == 2">运费劵</view>
      </view>
      <view class="right">
        <view class="name">{{ item.name }}</view>
        <view class="sub">{{ item.sub }}</view>
        <view class="time-btn">
          <view class="time">{{ item.start_time }}至{{ item.end_time }}</view>
          <nut-button size="mini" color="#ccc" disabled v-if="item.type == 'c3'">已失效</nut-button>
          <nut-button size="mini" color="#ccc" disabled v-if="item.type == 'c2'">已使用</nut-button>
          <nut-button size="mini" type="primary" plain v-if="item.type == 'c1'"
            @click="showFn(item.imgData, true)">去使用</nut-button>
        </view>
      </view>
    </view>
  </view>

  <!-- 预览券 -->
  <nut-image-preview :show="showPreview" :images="imgData" @close="showFn([], false)" />
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, computed } from 'vue'

const tab = ref('c1')
const tabList = ref([
  {
    title: '未使用',
    paneKey: 'c1'
  },
  {
    title: '已使用',
    paneKey: 'c2'
  },
  {
    title: '已失效',
    paneKey: 'c3'
  }
])
// 优惠券数据
const couponList = ref([
  {
    id: 1,
    price: 20,
    type: 'c1',
    coupon_type: 1,
    name: '满80-20优惠券',
    sub: '门店&配送&快递',
    start_time: '2024-04-30',
    end_time: '2024-05-30',
    imgData: [{
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    }]
  },
  {
    id: 2,
    price: 20,
    type: 'c1',
    coupon_type: 2,
    name: '免运费',
    sub: '配送&快递',
    start_time: '2024-04-30',
    end_time: '2024-05-30',
    imgData: [{
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    }]
  },
  {
    id: 3,
    price: 20,
    type: 'c2',
    coupon_type: 2,
    name: '免运费',
    sub: '配送&快递',
    start_time: '2024-04-30',
    end_time: '2024-05-30',
    imgData: [{
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    }]
  },
  {
    id: 4,
    price: 20,
    type: 'c3',
    coupon_type: 2,
    name: '免运费',
    sub: '配送&快递',
    start_time: '2024-04-30',
    end_time: '2024-05-30',
    imgData: [{
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    }]
  },
])
const couponData = computed(() => couponList.value.filter(e => e.type == tab.value) || [])

// 切换tab
const cutTab = (item) => {
  tab.value = item.paneKey
}

// 预览券
const showPreview = ref(false)
const imgData = ref([])
const showFn = (data, type) => {
  imgData.value = data
  showPreview.value = type
}
</script>

<style lang='scss'>
.coupon-title {
  height: 100px;
  display: flex;
  flex-direction: row;

  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 33.33%;
    background-color: #fff;

    .title {
      font-size: 26px;
      cursor: pointer;
      color: #333;
    }

    .active {
      font-weight: bold;
      color: #0077fa;
    }
  }
}


.coupon-wrap {
  padding: 30px;

  .item {
    position: relative;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
    background-color: #fff;

    .left {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 200px;
      background-color: #ccc;

      .circle {
        position: absolute;
        right: -15px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        background-color: #f2f2f2;
      }

      .top {
        top: -15px;
      }

      .bottom {
        bottom: -15px;
      }

      .price {
        font-size: 60px;
        color: #fff;

        .unit {
          font-size: 30px;
          margin-right: 4px;
        }
      }

      .sub {
        font-size: 28px;
        color: #f5f5f5;
      }
    }

    .theme1 {
      background-color: #0077fa !important;
    }

    .theme2 {
      background-color: #ffbd20 !important;
    }

    .right {
      width: calc(100% - #{200px});
      padding: 30px;

      .name {
        font-size: 30px;
      }

      .sub {
        font-size: 24px;
        margin-top: 10px;
        color: #666;
      }

      .time-btn {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;

        .time {
          font-size: 22px;
          color: #999;
        }
      }
    }
  }
}
</style>
