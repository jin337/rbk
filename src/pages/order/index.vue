<template>
  <view class="empty" v-if="isEmpty"><nut-empty image-size="300" description="亲，你还没有订单哦~"></nut-empty></view>

  <view class="order-wrap" v-else>
    <nut-sticky top="0">
      <view class="order-title">
        <view v-for="item in tabList" :key="item.paneKey" class="item" @click="cutTab(item)">
          <view class="title" :class="{ active: tab === item.paneKey }">{{ item.title }}</view>
        </view>
      </view>
    </nut-sticky>

    <view class="order-content">
      <view class="item" v-for="item in orderData" :key="item.id">
        <view class="time-type">
          <view class="time">{{ item.time }}</view>
          <view class="type" v-if="item.type == 'o1'">已完成</view>
          <view class="type" v-if="item.type == 'o2'">待付款</view>
          <view class="type" v-if="item.type == 'o3'">待配送</view>
          <view class="type" v-if="item.type == 'o4'">待收货</view>
        </view>
        <view class="cover-num" @click="toDetail(item)">
          <view class="img-list">
            <img :src="k.src" class="img" v-for="(k, v) in item.backImg" :key="v" mode="heightFix" />
          </view>
          <view class="count">共{{ item.number }}件<IconFont name="rect-right" color="#666" size="12"></IconFont>
          </view>
        </view>
        <view class="price">合计：&#xa5;{{ item.price }}</view>
        <view class="btn" v-if="item.type == 'o2'">
          <nut-button size="mini" type="primary" plain>去付款</nut-button>
        </view>
        <view class="btn" v-if="item.type == 'o4'">
          <nut-button size="mini" type="primary" plain>查看物流</nut-button>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { computed, ref } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'
const tab = ref('o1')
const tabList = ref([
  {
    title: '已完成',
    paneKey: 'o1'
  },
  {
    title: '待付款',
    paneKey: 'o2'
  },
  {
    title: '待配送',
    paneKey: 'o3'
  },
  {
    title: '待收货',
    paneKey: 'o4'
  }
])

// 订单数据
const orderList = ref([
  {
    id: 1,
    time: "2024-05-03 16:24:12",
    type: 'o1',
    number: 4,
    price: 134.61,
    backImg: [
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg" },
    ],
  },
  {
    id: 2,
    time: "2024-05-03 16:24:12",
    type: 'o2',
    number: 4,
    price: 134.61,
    backImg: [
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg" },
    ],
  },
  {
    id: 3,
    time: "2024-05-03 16:24:12",
    type: 'o3',
    number: 4,
    price: 134.61,
    backImg: [
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg" },
    ],
  },
  {
    id: 4,
    time: "2024-05-03 16:24:12",
    type: 'o4',
    number: 4,
    price: 134.61,
    backImg: [
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg" },
      { src: "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg" },
    ],
  },
])
const orderData = computed(() => orderList.value.filter(e => e.type == tab.value) || [])

const isEmpty = computed(() => orderList.value.length === 0)

// 切换tab
const cutTab = (item) => {
  tab.value = item.paneKey
}

// 跳转页面-订单详情页
const toDetail = (item) => {
  Taro.navigateTo({ url: '/pages/sub-three/order-detail/index?id=' + item.id })
}
</script>

<style lang="scss">
.empty {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
}

.order-wrap {

  .order-title {
    height: 100px;
    display: flex;
    flex-direction: row;

    .item {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 25%;
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

  .order-content {
    padding-bottom: 100px;

    .item {
      padding: 20px;
      margin: 20px;
      border-radius: 10px;
      background-color: #fff;

      .time-type {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;

        .time {
          font-size: 30px;
          color: #333;
        }

        .type {
          font-size: 26px;
          color: #666;
        }
      }

      .cover-num {
        display: flex;
        flex-direction: row;
        margin: 20px 0;

        .img-list {
          overflow: hidden;
          width: calc(100% - #{230px});
          white-space: nowrap;

          .img {
            display: inline-block;
            max-width: 150px;
            height: 150px;
            margin-right: 10px;
          }
        }

        .count {
          font-size: 30px;
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: flex-end;
          width: 230px;
          color: #333;
        }
      }

      .price {
        font-size: 28px;
        font-weight: bold;
        text-align: right;
        color: #000;
      }

      .btn {
        text-align: right;
        margin-top: 20px;
      }
    }
  }
}
</style>
