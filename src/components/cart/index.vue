<template>
  <nut-overlay v-model:visible="showBottom" z-index="2300"></nut-overlay>
  <view class="cart-wrap" :style="{ bottom }">
    <view class="popup-content" v-show="showBottom">
      <view class="title">
        <view class="left">已选商品</view>
        <view class="right" @click="clearCart">
          <IconFont name="del" color="#666" size="14"></IconFont>&nbsp;清空购物车
        </view>
      </view>
      <scroll-view class="products" :scroll-y="true">
        <view class="item" v-for="item in modelValue" :key="item.id">
          <view class="cover"><img :src="item.backImg[0]" alt="" class="img" /></view>
          <view class="dec">
            <view class="name">{{ item.title }}</view>
            <view class="sub">{{ item.sub }}</view>
            <view class="price-btn">
              <view class="price"><text class="unit">&#xa5;</text>{{ item.price }}</view>
              <view class="btn">
                <input-number v-model="item.select" :min="1" :max="item.count" @change="changeInput(item)" />
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>

    <view class="content" v-show="modelValue.length">
      <view class="bag" @click="showBottom = !showBottom">
        <IconFont name="cart" color="#666" size="24"></IconFont>
        <text class="txt">购物车 * <text class="num">{{ productsNum }}</text></text>
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
import { ref, computed } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

const emit = defineEmits(['update:modelValue']);
// 传参
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  bottom: {
    type: Number
  }
})
// 蒙板
const showBottom = ref(false)

// 商品数量
const productsNum = computed(() => {
  const list = props.modelValue
  let num = 0
  if (list != null && Array.isArray(list)) {
    list.forEach(element => {
      num += element.select
    });
  }
  return num
})

// 清空购物车
const clearCart = () => {
  showBottom.value = false
  emit('update:modelValue', []);
}

// 监控数量
const changeInput = (item) => {
  const arr = props.modelValue.filter(e => e.select != 0)
  if (arr.length == 0) {
    showBottom.value = false
  }
  emit('update:modelValue', arr);
}
</script>

<style lang='scss'>
.cart-wrap {
  position: sticky;
  z-index: 3001;
  bottom: 100px;
  left: 0;
  width: 100%;
  background-color: #fff;

  .content {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    height: 80px;
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
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    .left {
      font-size: 24px;
    }

    .right {
      font-size: 24px;
      display: flex;
      align-items: center;
      flex-direction: row;
      color: #666;
    }
  }

  .products {
    max-height: 500px;

    .item {
      margin-top: 20px;
      display: flex;
      align-items: flex-start;
      flex-direction: row;
      width: 100%;

      .cover {
        width: 110px;
        height: 110px;
        margin-right: 20px;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .dec {
        width: calc(100% - #{130px});

        .name {
          font-size: 26px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #333;
        }

        .sub {
          font-size: 24px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          color: #666;
        }

        .price-btn {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
          margin-top: 4px;

          .price {
            font-size: 26px;
            font-weight: bold;
            color: red;
          }

          .btn {
            .iconfont {
              font-size: 40px;
              color: #0077fa;
            }
          }
        }
      }
    }
  }
}
</style>
