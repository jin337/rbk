<template>
  <nut-overlay v-model:visible="showBottom"></nut-overlay>
  <view class="cart-wrap">
    <view class="popup-content">
      <view class="title">
        <view class="left">已选商品</view>
        <view class="right">
          <IconFont name="del" color="#666" size="14"></IconFont>&nbsp;清空购物车
        </view>
      </view>
      <view class="products">
        1111
      </view>
    </view>

    <view class="content">
      <view class="bag">
        <IconFont name="cart" color="#666" size="24"></IconFont>
        <text class="txt">购物车 * <text class="num">20</text></text>
      </view>
      <view class="shop">
        <text class="unit">&#xa5;</text>
        <text class="price">10000</text>
        <view class="btn">去结账</view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

const showBottom = ref(true)
</script>

<style lang='scss'>
.cart-wrap {
  position: absolute;
  bottom: 100px;
  left: 0;
  z-index: 3001;
  width: 100%;
  background-color: #fff;

  .content {
    height: 80px;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }

  .bag {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding-left: 20px;

    .txt {
      font-size: 24px;
      margin-left: 10px;
      color: #666;
    }

    .num {
      color: #0077fa;
    }
  }

  .shop {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100%;

    .unit {
      font-size: 24px;
    }

    .price {
      font-size: 42px;
    }

    .btn {
      font-size: 26px;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
      width: 180px;
      height: 100%;
      margin-left: 20px;
      color: #fff;
      background-color: #0077fa;
    }
  }
}

.popup-content {
  padding: 20px;
  .title {
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .left {
      font-size: 24px;
    }

    .right {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 24px;
      color: #666;
    }
  }
}
</style>
