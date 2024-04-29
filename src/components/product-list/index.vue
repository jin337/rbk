<template>
  <view class="product-list">
    <view v-for="(item, index) in itemList" :key="index" class="item">
      <view class="cover" @click="toDetail(item.id)"><img :src="item.backImg[0]" alt=""></view>
      <view class="dec">
        <view class="name" @click="toDetail(item.id)">{{ item.title }}</view>
        <view class="sub">{{ item.sub }}</view>
        <view class="vip"><text class="tag">VIP</text>&#xa5;{{ item.vip }}</view>
        <view class="price-btn">
          <view class="price"><text class="unit">&#xa5;</text>{{ item.price }}</view>
          <view class="btn">
            <view class="iconfont icon-icon_atianjia_solid" v-if="item.select == 0" @click="changeInput(1, item)"></view>
            <template v-else>
              <nut-input-number v-model="item.select" :min="0" :max="item.count" @change="changeInput($event, item)">
                <template #left-icon>
                  <view class="iconfont icon-icon_ajianshao_outline"></view>
                </template>
                <template #right-icon>
                  <view class="iconfont icon-icon_atianjia_solid"></view>
                </template>
              </nut-input-number>
            </template>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import { ref, computed } from 'vue';
import { IconFont } from '@nutui/icons-vue-taro'

const emit = defineEmits(['update:modelValue']);
// 传参
const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
  ['list-data']: {
    type: Object,
    required: true
  }
})

// 数组数据
const itemList = computed({
  get: () => {
    let list = props.listData
    if (list != null && Array.isArray(list)) {
      list.forEach(element => {
        element.select = 0
      });
      return list
    }
    return []
  }
})

// 增加数量
const select = ref(0)
const changeInput = (value, item) => {
  item.select = value

  changeList()
}

// 获取增加数量的商品
const changeList = () => {
  let list = []
  itemList.value.forEach(element => {
    if (element.select) {
      list.push(element)
    }
  });
  emit('update:modelValue', list);
}

// 跳转页面-会员码
const toDetail = (id) => {
  Taro.navigateTo({ url: '/pages/sub-one/detail/index?id=' + id })
}
</script>

<style lang='scss'>
.product-list {
  width: 100%;

  .item {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid #f5f5f5;
    background-color: #fff;

    .cover {
      width: 150px;
      height: 150px;
      margin-right: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .dec {
      width: calc(100% - #{170px});

      .iconfont {
        font-size: 40px;
        color: #0077fa;
      }

      .name {
        font-size: 28px;
        display: -webkit-box;
        overflow: hidden;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;

        -webkit-line-clamp: 2;
      }

      .sub {
        font-size: 24px;
        margin-top: 8px;
        color: #999;
      }

      .vip {
        font-size: 22px;
        display: inline-block;
        overflow: hidden;
        margin-top: 10px;
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
        font-size: 30px;
        font-weight: bold;

        .unit {
          font-size: 20px;
          margin-right: 4px;
        }
      }

      .price-btn {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }
}
</style>
