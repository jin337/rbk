<template>
  <view class="wallet-wrap">
    <view class="card">
      <view class="title-num">
        <view class="txt">我的余额（元）</view>
        <view class="txt" @click="toExchanges">交易明细<IconFont name="rect-right" size="12"></IconFont>
        </view>
      </view>
      <view class="money">0.00</view>
      <view class="btn">
        <nut-button plain type="info" size="small" @click="toMember">
          <template #icon>
            <IconFont name="scan" class="icon"></IconFont>
          </template>
          门店支付码
        </nut-button>
      </view>
    </view>
  </view>

  <view class="wallet-ecard">
    <nut-cell>
      <nut-ecard v-model="money" :data-list="dataList" choose-text="请选择面值" @input-change="inputChange" @change="change"
        @change-step="changeStep"></nut-ecard>
    </nut-cell>
    <nut-button block color="#0077fa" class="btn">立即支付{{ money }}</nut-button>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

// 跳转页面-会员码
const toMember = () => {
  Taro.navigateTo({ url: '/pages/sub-two/member/index' })
}
// 跳转页面-交易明细
const toExchanges = () => {
  Taro.navigateTo({ url: '/pages/sub-two/exchanges/index' })
}

const dataList = ref([
  {
    price: 10
  },
  {
    price: 50
  },
  {
    price: 100
  },
  {
    price: 200
  }
])
const money = ref(10)
const inputChange = (val) => {
  money.value = val
}
const change = (item) => {
  money.value = item.price
}
const changeStep = (num, price) => {
  const val = price * num
  money.value = val
}
</script>

<style lang='scss'>
.wallet-wrap {
  margin: 20px;
  border-radius: 16px;
  background: #0077fa;
  background: linear-gradient(to top, #0077fa, #3494e6);
  box-shadow: 0 4px 10px 1px rgba(0, 121, 250, 0.4);
  .card {
    padding: 30px;
    color: #fff;

    .title-num {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      .txt {
        font-size: 26px;
        display: flex;
        align-items: center;
        flex-direction: row;
      }
    }

    .money {
      font-size: 80px;
      font-weight: bold;
      margin-top: 10px;
    }

    .btn {
      text-align: right;
      margin-top: 10px;
    }
  }

}

.wallet-ecard {
  padding: 0 20px 40px 20px;
  width: 100%;
  box-sizing: border-box;
  font-size: 28px;
  line-height: 1;

  .btn {
    margin-top: 50px;
  }
}

.nut-ecard__list__input--con {

  .h5-input,
  .nut-ecard-input {
    font-size: 30px;
  }
}
</style>
