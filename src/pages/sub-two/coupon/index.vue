<template>
  <nut-tabs v-model="value">
    <template #titles>
      <view v-for="item in list" :key="item.paneKey" class="custom-tab-item" @click="value = item.paneKey">
        <view class="title" :class="{ active: value === item.paneKey }">{{ item.title }}</view>
      </view>
    </template>
    <nut-tab-pane v-for="tab in list" :key="tab.paneKey" :pane-key="tab.paneKey" class="custom-tab-pane">
      <template v-if="value == 'c1'">
        <view class="coupon-card" v-for="item in cardList" :key="item.id">
          <view class="left" :class="item.coupon_type == 2 ? 'theme2' : 'theme1'">
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
              <nut-button size="mini" color="#ccc" disabled v-if="item.type == 2">已使用</nut-button>
              <nut-button size="mini" color="#ccc" disabled v-if="item.type == 0">已失效</nut-button>
              <nut-button size="mini" type="primary" plain v-if="item.type == 1"
                @click="showFn(item.imgData)">去使用</nut-button>
            </view>
          </view>
        </view>
      </template>
      <template v-if="value == 'c2'">
        <view class="coupon-card" v-for="item in cardList" :key="item.id">
          <view class="left">
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
              <nut-button size="mini" color="#ccc" disabled>已使用</nut-button>
            </view>
          </view>
        </view>
      </template>
      <template v-if="value == 'c3'">
        <view class="coupon-card" v-for="item in cardList" :key="item.id">
          <view class="left">
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
              <nut-button size="mini" color="#ccc" disabled>已失效</nut-button>
            </view>
          </view>
        </view>
      </template>
    </nut-tab-pane>
  </nut-tabs>

  <!-- 预览券 -->
  <nut-image-preview :show="showPreview" :images="imgData" @close="hideFn" />
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref } from 'vue'

const value = ref('c1')
const list = ref([
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

const cardList = ref([
  {
    id: 1,
    price: 20,
    type: 1,
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
    type: 1,
    coupon_type: 2,
    name: '免运费',
    sub: '配送&快递',
    start_time: '2024-04-30',
    end_time: '2024-05-30',
    imgData: [{
      src: '//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg'
    }]
  }
])

// 预览券
const showPreview = ref(false)
const imgData = ref([])
const showFn = (data) => {
  imgData.value = data
  showPreview.value = true
}
const hideFn = () => {
  imgData.value = []
  showPreview.value = false
}
</script>

<style lang='scss'>
.custom-tab-item {
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

.custom-tab-pane {
  padding: 30px;
  background-color: transparent;
}

.coupon-card {
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
</style>
