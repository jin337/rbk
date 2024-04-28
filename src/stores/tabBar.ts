import { defineStore } from "pinia";

export const useTabBarStore = defineStore("tabBar", {
  state: () => ({
    selected: 0,
    list: [
      {
        pagePath: "/pages/index/index",
        selectedIconPath: "../images/shouye_on.png",
        iconPath: "../images/shouye.png",
        text: "首页",
      },
      {
        pagePath: "/pages/buy/index",
        selectedIconPath: "../images/gouwu_on.png",
        iconPath: "../images/gouwu.png",
        text: "点单",
      },
      {
        pagePath: "/pages/order/index",
        selectedIconPath: "../images/dingdan_on.png",
        iconPath: "../images/dingdan.png",
        text: "订单",
      },
      {
        pagePath: "/pages/my/index",
        selectedIconPath: "../images/wode_on.png",
        iconPath: "../images/wode.png",
        text: "个人中心",
      },
    ],
  }),
  actions: {
    setSelected(index) {
      this.selected = index;
    },
  },
});
