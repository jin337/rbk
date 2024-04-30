export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/buy/index",
    "pages/order/index",
    "pages/my/index",
  ],
  subPackages: [
    {
      root: "pages/sub-one",
      pages: [
        "search/index",
        "detail/index",
        "cart/index",
      ],
    },
    {
      root: "pages/sub-two",
      pages: [
        "coupon/index",
        "member/index",
        "wallet/index",
        "exchanges/index",
      ],
    },
    {
      root: "pages/sub-three",
      pages: [
        "location/index",
      ],
    },
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    custom: true,
    color: "#8a8a8a",
    selectedColor: "#000000",
    backgroundColor: "#ffffff",
    list: [
      {
        pagePath: "pages/index/index",
        selectedIconPath: "images/shouye_on.png",
        iconPath: "images/shouye.png",
        text: "首页",
      },
      {
        pagePath: "pages/buy/index",
        selectedIconPath: "images/gouwu_on.png",
        iconPath: "images/gouwu.png",
        text: "点单",
      },
      {
        pagePath: "pages/order/index",
        selectedIconPath: "images/dingdan_on.png",
        iconPath: "images/dingdan.png",
        text: "订单",
      },
      {
        pagePath: "pages/my/index",
        selectedIconPath: "images/wode_on.png",
        iconPath: "images/wode.png",
        text: "个人中心",
      },
    ],
  },
});
