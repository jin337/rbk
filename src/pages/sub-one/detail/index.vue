<template>
  <nut-swiper :auto-play="3000" @change="onChange">
    <nut-swiper-item v-for="(item, index) in detailInfo.backImg" :key="index" style="height: 375px">
      <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" @click="showFn(true)" />
    </nut-swiper-item>
    <template #page>
      <div class="swiper-pagination">图片 {{ current }}/{{ detailInfo.backImgCount }}</div>
    </template>
  </nut-swiper>

  <view class="deatil-wrap">
    <view class="title">{{ detailInfo.title }}</view>
    <view class="sub">{{ detailInfo.sub }}</view>
  </view>
  <view class="deatil-dec">
    <view class="title">商品详情</view>
    <view class="txt" v-html="detailInfo.dec"></view>
  </view>

  <view class="shop-cart-placeholder"></view>
  <view class="shop-cart">
    <view class="price-content">
      <view class="price-vip">
        <view class="price"><text class="unit">&#xa5;</text>{{ detailInfo.price }}</view>
        <view class="vip"><text class="tag">VIP</text>&#xa5;{{ detailInfo.vip }}</view>
      </view>

      <nut-input-number v-model="select" :min="1" :max="detailInfo.count">
        <template #left-icon>
          <view class="iconfont icon-icon_ajianshao_outline"></view>
        </template>
        <template #right-icon>
          <view class="iconfont icon-icon_atianjia_solid"></view>
        </template>
      </nut-input-number>
    </view>
    <view class="content">
      <view class="item" @click="showSheet">
        <IconFont name="share" color="#666" size="16"></IconFont>
        <view class="txt">分享</view>
      </view>
      <view class="item" @click="toCart">
        <IconFont name="cart" color="#666" size="16"></IconFont>
        <view class="txt">购物车</view>
      </view>
      <view class="btn">加入购物车</view>
    </view>
  </view>

  <!-- 图片预览 -->
  <nut-image-preview :show="showPreview" :images="imgData" :init-no="current" @close="showFn(false)" />
  <!-- 分享 -->
  <nut-action-sheet v-model:visible="show" :menu-items="menuItems" cancel-txt="取消" @choose="choose" />
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, reactive, computed } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

const detailInfo = reactive({
  id: 1,
  backImg: [
    "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/18629/34/3378/144318/5c263f64Ef0e2bff0/0d650e0aa2e852ee.jpg",
    "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/26597/30/4870/174583/5c35c5d2Ed55eedc6/50e27870c25e7a82.png",
    "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9542/17/12873/201687/5c3c4362Ea9eb757d/60026b40a9d60d85.jpg",
    "//m.360buyimg.com/mobilecms/s750x366_jfs/t1/30042/36/427/82951/5c3bfdabE3faf2f66/9adca782661c988c.jpg",
  ],
  backImgCount: 4,
  price: 12.75,
  vip: 10,
  count: 20,
  title: "润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片润本植物精油贴经典款36片",
  sub: "植物精油，随身携带",
  dec: '<p>配料:头水海苔、有机黑芝麻、千禾宝宝酱油、蜂蜜、少量林原海藻糖</p><p>规格:50克</p><p>最佳赏味期:常温密封保存30天</p>',
})
const select = ref(1)

// swiper翻页
const current = ref(1)
const onChange = (index) => {
  current.value = index + 1
}
// 预览图片
const showPreview = ref(false)
const imgData = computed(() => {
  let list = []
  let data = detailInfo.backImg
  data.forEach(element => {
    list.push({
      src: element
    })
  });
  return list
})
const showFn = (type) => {
  showPreview.value = type
}

// 分享
const show = ref(false)
const menuItems = [
  { name: '发送给朋友', id: 1 },
  { name: '生成海报', id: 2 }
]
const showSheet = () => {
  show.value = true
}
const choose = (item) => {
  console.log(item);
}

// 跳转页面-搜索页
const toCart = () => {
  Taro.navigateTo({ url: '/pages/sub-one/cart/index' })
}
</script>

<style lang='scss'>
.swiper-pagination {
  font-size: 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 10px 20px;
  transform: translate(-50%, 0);
  text-align: center;
  color: #fff;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.33);
}

.deatil-wrap {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;

  .title {
    font-size: 30px;
    font-weight: bold;
  }

  .sub {
    font-size: 28px;
    margin-top: 10px;
    color: #999;
  }
}

.deatil-dec {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #fff;

  .title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .txt {
    font-size: 28px;
  }
}

.shop-cart-placeholder {
  width: 100%;
  height: 200px;
}

.shop-cart {
  position: fixed;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  border-top: 1px solid #f5f5f5;
  background-color: #fff;

  .content {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;

    .item {
      padding: 0 30px;
      text-align: center;

      .txt {
        font-size: 20px;
      }
    }

    .btn {
      font-size: 26px;
      font-weight: bold;
      line-height: 70px;
      width: 460px;
      height: 70px;
      margin: 0 30px;
      text-align: center;
      color: #fff;
      border-radius: 10px;
      background-color: #0077fa;
    }
  }

  .price-content {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 100px;
    padding: 0 30px;

    .price-vip {
      display: flex;
      align-items: center;
      flex-direction: row;
    }

    .vip {
      font-size: 24px;
      display: inline-block;
      overflow: hidden;
      margin-left: 20px;
      padding-right: 10px;
      border-radius: 6px;
      background-color: #fac800;

      .tag {
        margin-right: 10px;
        padding: 0 10px;
        color: #fac800;
        background-color: #000;
      }
    }

    .price {
      font-size: 40px;
      font-weight: bold;
      color: hsl(7, 95%, 55%);

      .unit {
        font-size: 30px;
        margin-right: 4px;
      }
    }

    .iconfont {
      font-size: 50px;
      color: #0077fa;
    }
  }
}
</style>
