<template>
  <view class="detail-top">
    <view class="type">
      <view>
        <view class="txt" v-if="orderDetail.type == 'o1'">交易完成</view>
        <view class="txt" v-if="orderDetail.type == 'o2'">待付款</view>
        <view class="txt" v-if="orderDetail.type == 'o3'">待配送</view>
        <view class="txt" v-if="orderDetail.type == 'o4'">待收货</view>

        <view class="sub">感谢您在瑞贝卡母婴生活馆购物</view>
      </view>
      <IconFont class="icon" name="success" v-if="orderDetail.type == 'o1'"></IconFont>
      <IconFont class="icon" name="issue" v-else></IconFont>
    </view>
    <view class="local">
      <IconFont name="locationg3" color="#333" size="18"></IconFont>
      <view class="box">
        <view class="name">{{ orderDetail.local.addressName }} {{ orderDetail.local.phone }}</view>
        <view class="address">{{ orderDetail.local.fullAddress }}</view>
      </view>
    </view>
  </view>
  <view class="detail-product">
    <view :class="showAll ? 'product' : ''">
      <view class="item" v-for="item in orderDetail.products" :key="item.id">
        <view class="cover"><img :src="item.backImg[0]" alt="" class="img" /></view>
        <view class="name-sub">
          <view class="name">{{ item.title }}</view>
          <view class="sub">{{ item.sub }}</view>
        </view>
        <view class="price-num">
          <view class="txt">&#xa5;{{ item.price }}</view>
          <view class="txt">*{{ item.count }}</view>
        </view>
      </view>
    </view>
    <view class="show" v-if="showAll" @click="showAll = false">查看全部 <IconFont class="icon" name="rect-down"></IconFont>
    </view>
    <view class="show" v-else @click="showAll = true">收起 <IconFont class="icon" name="rect-up"></IconFont>
    </view>
  </view>
  <view class="detail-list">
    <view class="item">
      <view class="left">商品金额</view>
      <view class="right">&#xa5;{{ orderDetail.price }}</view>
    </view>
    <view class="item">
      <view class="left">优惠券</view>
      <view class="right">-&nbsp;&#xa5;{{ orderDetail.price }}</view>
    </view>
    <view class="item">
      <view class="left">运费</view>
      <view class="right">+&nbsp;&#xa5;{{ orderDetail.price }}</view>
    </view>
    <view class="item">
      <view class="left">包装费</view>
      <view class="right">+&nbsp;&#xa5;{{ orderDetail.price }}</view>
    </view>
    <view class="item">
      <view class="left"></view>
      <view class="right">实际支付&nbsp;<text class="unit">&#xa5;</text>
        <text class="price">{{ orderDetail.price }}</text>
      </view>
    </view>
  </view>
  <view class="detail-list">
    <view class="item">
      <view class="left">买家留言</view>
      <view class="right">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</view>
    </view>
  </view>
  <view class="detail-sub">
    <view class="item">
      <view class="left">订单编号</view>
      <view class="right">{{ orderDetail.order_id }}</view>
    </view>
    <view class="item">
      <view class="left">下单时间</view>
      <view class="right">{{ orderDetail.time }}</view>
    </view>
    <view class="item">
      <view class="left">交易编号</view>
      <view class="right">{{ orderDetail.price_id }}</view>
    </view>
    <view class="item">
      <view class="left">支付时间</view>
      <view class="right">{{ orderDetail.price_time }}</view>
    </view>
    <view class="item">
      <view class="left">支付方式</view>
      <view class="right" v-if="orderDetail.price_type == 1">现金</view>
      <view class="right" v-if="orderDetail.price_type == 2">支付宝</view>
      <view class="right" v-if="orderDetail.price_type == 3">微信</view>
    </view>
    <view class="item">
      <view class="left">订单完成时间</view>
      <view class="right">{{ orderDetail.over_time }}</view>
    </view>
  </view>
  <view class="detail-handle" v-if="orderDetail.type != 'o1'">
    <view class="btn" v-if="orderDetail.type == 'o2'">
      <nut-button size="small" type="primary" plain>去付款</nut-button>
    </view>
    <view class="btn" v-if="orderDetail.type == 'o4'">
      <nut-button size="small" type="primary" plain>查看物流</nut-button>
    </view>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, reactive } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

const orderDetail = ref({
  id: 1,
  order_id: 123456789,
  price_id: 458963217,
  price_time: "2024-05-03 16:24:12",
  price_type: 1,
  over_time: "2024-05-03 16:24:12",
  time: "2024-05-03 16:24:12",
  type: 'o2',
  order_type: 1,
  local: {
    id: 3,
    addressName: '姓名',
    phone: '123****4567',
    defaultAddress: false,
    fullAddress: '北京市通州区测试测试测试测试测试测试测试测试测试北京市通州区测试测试测试测试测试测试测试测试测试'
  },
  remark: '联系不上请放在房门口',
  number: 4,
  price: 134.61,
  products: [
    {

      id: 1,
      backImg: [
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
      ],
      price: 12.75,
      count: 1,
      title: "润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片",
      sub: "植物精油，随身携带",
      dec: `啦啦啦啦
        啦啦啦
        啦啦啦
        啦啦啦啦啦啦啦`,
    },
    {

      id: 2,
      backImg: [
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
      ],
      price: 12.75,
      count: 2,
      title: "润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片",
      sub: "植物精油，随身携带",
      dec: `啦啦啦啦
        啦啦啦
        啦啦啦
        啦啦啦啦啦啦啦`,
    },
    {

      id: 3,
      backImg: [
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
      ],
      price: 12.75,
      count: 5,
      title: "润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片",
      sub: "植物精油，随身携带",
      dec: `啦啦啦啦
        啦啦啦
        啦啦啦
        啦啦啦啦啦啦啦`,
    },
    {

      id: 4,
      backImg: [
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
        "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
      ],
      price: 12.75,
      count: 10,
      title: "润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片",
      sub: "植物精油，随身携带",
      dec: `啦啦啦啦
        啦啦啦
        啦啦啦
        啦啦啦啦啦啦啦`,
    },
  ],
})

const showAll = ref(true)
</script>

<style lang='scss'>
page {
  padding-bottom: 100px;
}
.detail-top {
  padding: 80px 20px 20px;
  background: #0887f4;
  background: linear-gradient(to bottom, #0887f4 40%, #d5e7f5 80%, #f5f5f5);
  .type {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
    .txt {
      font-size: 46px;
      font-weight: bold;
      color: #fff;
    }
    .sub {
      font-size: 26px;
      margin-top: 10px;
      color: #fff;
    }
    .icon {
      font-size: 160px;
      font-weight: bold;
      position: absolute;
      top: 30px;
      right: 80px;
      color: #0071ce;
    }
  }
  .local {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    margin-top: 20px;
    padding: 30px;
    border-radius: 20px;
    background-color: #fff;
    .box {
      margin-left: 20px;
      .name {
        font-size: 28px;
        color: #333;
      }
      .address {
        font-size: 26px;
        margin-top: 10px;
        color: #666;
      }
    }
  }
}
.detail-sub,
.detail-list {
  margin: 20px;
  padding-top: 30px;
  border-radius: 20px;
  background-color: #fff;
  .item {
    font-size: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px 30px;
    color: #333;
    .left {
      width: 25%;
    }
    .right {
      width: 75%;
      text-align: right;
    }
    .price {
      font-size: 32px;
      font-weight: bold;
      color: red;
    }
    .unit {
      font-size: 20px;
      font-weight: bold;
      color: red;
    }
  }
}
.detail-sub {
  .item {
    font-size: 24px;
    color: #666;
  }
}
.detail-product {
  overflow: hidden;
  margin: 0 20px 20px;
  border-radius: 20px;
  background-color: #fff;
  .product {
    overflow: hidden;
    height: 571px;
  }
  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid #f5f5f5;
    .cover {
      width: 150px;
      height: 150px;
      margin-right: 20px;
      .img {
        width: 100%;
        height: 100%;
      }
    }
    .name-sub {
      width: 400px;
    }
    .price-num {
      width: 140px;
      text-align: right;
    }
    .name {
      font-size: 28px;
      display: -webkit-box;
      overflow: hidden;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      color: #333;

      -webkit-line-clamp: 2;
    }
    .sub {
      font-size: 24px;
      margin-top: 8px;
      color: #999;
    }
    .txt {
      font-size: 24px;
      margin-top: 8px;
      color: #333;
    }
  }
  .show {
    font-size: 24px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
    color: #666;
    .icon {
      font-size: 20px;
      line-height: 1;
    }
  }
}
.detail-handle {
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100px;
  border-top: 1px solid #f2f2f2;
  background-color: #fff;
  .btn {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    height: 100%;
    padding: 0 20px;
  }
}
</style>
