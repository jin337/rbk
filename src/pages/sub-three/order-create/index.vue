<template>
  <nut-radio-group v-model="type" direction="horizontal" class="switch-cut">
    <nut-radio label="1" shape="button">配送</nut-radio>
    <nut-radio label="2" shape="button">自取</nut-radio>
    <nut-radio label="3" shape="button">快递</nut-radio>
  </nut-radio-group>

  <view class="create-item">
    <view class="title">配送信息</view>
    <view class="item" v-if="type != 2">
      <view class="left">收货地址</view>
      <view class="right" @click="toLocation">
        <text class="txt">选择地址</text>
        <IconFont name="rect-right" color="#666" size="12"></IconFont>
      </view>
    </view>
    <view class="item" v-if="type == 2">
      <view class="left">预约电话</view>
      <view class="right">
        <input class="input" type="number" placeholder="填写" v-model="formData.tel">
        <IconFont name="rect-right" color="#666" size="12"></IconFont>
      </view>
    </view>
    <view class="item" v-if="type != 3">
      <view class="left">预约时间</view>
      <view class="right" @click="timeShow = true">
        <text class="txt" v-if="type == 1">立即送出</text>
        <text class="txt" v-if="type == 2">立即取单</text>
        <IconFont name="rect-right" color="#666" size="12"></IconFont>
      </view>
    </view>
    <view class="item">
      <view class="left">订单备注</view>
      <view class="right" @click="toRemark">
        <text class="txt">买家留言</text>
        <IconFont name="rect-right" color="#666" size="12"></IconFont>
      </view>
    </view>
  </view>

  <view class="create-item">
    <view class="title">结算</view>
    <view class="cover-num" @click="productShow = true">
      <view class="img-list">
        <img :src="k.backImg[0]" class="img" v-for="(k, v) in orderData" :key="v" mode="heightFix" />
      </view>
      <view class="count">共{{ orderNumber }}件<IconFont name="rect-right" color="#666" size="12"></IconFont>
      </view>
    </view>
    <view class="item">
      <view class="left">运费</view>
      <view class="right">&#xa5;10</view>
    </view>
    <view class="item">
      <view class="left">优惠券</view>
      <view class="right" @click="toCoupon">
        <text class="txt">无可用券</text>
        <IconFont name="rect-right" color="#666" size="12"></IconFont>
      </view>
    </view>
    <view class="item">
      <view class="left">合计</view>
      <view class="right">&#xa5;34.90</view>
    </view>
  </view>

  <view class="create-item">
    <view class="title">支付方式</view>
    <nut-radio-group v-model="val" text-position="left">
      <nut-radio label="1">微信支付</nut-radio>
      <nut-radio label="2">余额支付</nut-radio>
    </nut-radio-group>
  </view>

  <view class="submit-order">
    <text class="txt1">商品合计：</text>
    <text class="txt2">&#xa5;34.90</text>
    <nut-button type="primary" @click="submit">去支付</nut-button>
  </view>

  <!-- 商品信息 -->
  <nut-popup v-model:visible="productShow" position="bottom" closeable round>
    <view class="order-product">
      <view class="title">商品信息</view>
      <scroll-view class="product" :scroll-y="true">
        <view class="item" v-for="item in orderData" :key="item.id">
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
      </scroll-view>
    </view>
  </nut-popup>

  <!-- 时间选择 -->
  <nut-popup v-model:visible="timeShow" position="bottom">
    <nut-date-picker v-model="formData.time" type="datetime" :min-date="min" :max-date="max" :three-dimensional="false"
      @confirm="confirm"></nut-date-picker>
  </nut-popup>

  <!-- toast信息 -->
  <nut-toast :msg="toast.msg" v-model:visible="toast.show" :type="toast.type" @closed="onClosed" />
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, computed } from 'vue'
import { IconFont } from '@nutui/icons-vue-taro'
// 配送方式
const type = ref('1')
const val = ref('1')
const productShow = ref(false)
const timeShow = ref(false)

const formData = ref({
  tel: '', // 电话
  time: '', // 配送时间
  location: '', // 配送地址
  remark: '', // 备注
  coupon: '' // 优惠券
})
// 时间选择
const min = new Date(2020, 0, 1, 10, 40)
const max = new Date(2025, 10, 1, 23, 29)
const confirm = ({ selectedValue }) => {
  formData.value.time = selectedValue.slice(0, 3).join('/') + ' ' + selectedValue.slice(3, 5).join(':')
}

// 跳转页面-备注页
const toRemark = () => {
  Taro.navigateTo({ url: '/pages/sub-one/remark/index' })
}

// 跳转页面-地址页
const toLocation = () => {
  Taro.navigateTo({ url: '/pages/sub-three/location/index' })
}
// 跳转页面-优惠券页
const toCoupon = () => {
  Taro.navigateTo({ url: '/pages/sub-two/coupon/index' })
}
// 订单数据
const orderData = ref([
  {
    id: 1,
    backImg: [
      "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
      "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
      "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
      "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
    ],
    price: 12.75,
    vip: 10,
    select: 2,
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
    price: 13,
    vip: 9.9,
    select: 2,
    title: "润本柠檬贴30条/袋润本柠檬贴30条/袋润本柠檬贴30条/袋",
    sub: "植物精油帖，防水止汗",
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
    price: 20,
    vip: 19.9,
    select: 2,
    title: "333润本植物精油贴经典款36片",
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
    price: 43,
    vip: 39.9,
    select: 1,
    title: "444润本柠檬贴30条/袋",
    sub: "植物精油帖，防水止汗",
    dec: `啦啦啦啦
        啦啦啦
        啦啦啦
        啦啦啦啦啦啦啦`,
  },
])
const orderNumber = computed(() => {
  const list = orderData.value
  let num = 0
  if (list != null && Array.isArray(list)) {
    list.forEach(element => {
      num += element.select
    });
  }
  return num
})

// 去支付
const toast = ref({
  show: false,
  type: '',  //fail success
  msg: ''
})
const submit = () => {
  toast.value = {
    show: true,
    type: 'success',
    msg: '支付成功'
  }
}
// 支付后跳转
const onClosed = () => {
  Taro.switchTab({ url: "/pages/order/index" })
}
</script>

<style lang='scss'>
.switch-cut {
  margin: 30px 20px 10px 20px;
  border-radius: 30px;
  background-color: #f6f7f9;

  .nut-radio--button {
    margin: 0;
  }
}

.create-item {
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;

  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .item {
    font-size: 28px;
    line-height: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 8px 0;
    color: #333;

    &:last-child {
      margin-bottom: 0;
    }

    .left {
      width: 25%;
    }

    .right {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      width: 75%;

      .txt {
        font-size: 26px;
        color: #666;
      }

      .input {
        font-size: 26px;
        width: 100%;
        height: 26px;
        min-height: 26px;
        text-align: right;
        color: #333;
      }
    }
  }

  .cover-num {
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    color: #333;

    .img-list {
      overflow: hidden;
      width: calc(100% - #{180px});
      white-space: nowrap;

      .img {
        display: inline-block;
        max-width: 120px;
        height: 120px;
        margin-right: 10px;
      }
    }

    .count {
      font-size: 28px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;
      width: 180px;
    }
  }

  .nut-radio-group {
    width: 100%;

    .nut-radio {
      margin-bottom: 20px;
    }
  }
}

.submit-order {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;

  .txt1 {
    font-size: 24px;
  }

  .txt2 {
    font-size: 36px;
    font-weight: bold;
    margin-right: 20px;
    color: red;
  }
}

.order-product {
  .title {
    font-size: 30px;
    font-weight: bold;
    padding: 30px 0;
    text-align: center;
  }

  .product {
    max-height: 500px;
  }

  .item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid #f5f5f5;

    .cover {
      width: 110px;
      height: 110px;
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
      font-size: 26px;
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
}
</style>
