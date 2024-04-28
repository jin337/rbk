import { defineStore } from "pinia";

export const useShopStore = defineStore("shop", {
  state: () => ({
    categorySelected: 0,
    categoryInfo: [
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/88907/33/6457/231663/5df33b56Eae1ffafd/819f96550ae520a3.jpg",
        catId: "1590",
        catName: "水果鲜食",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/199261/17/17179/132409/6191fb65E1d49e5d2/d42c69c018b646d0.jpg",
        catId: "1591",
        catName: "熟食冻品",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/126378/6/3795/857665/5ed5ab9fE61ee75df/79253ec46360ca43.png",
        catId: "1592",
        catName: "酒水冲饮",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/221194/12/2713/225980/6191fceeE2e5d1fee/b7140001d23c9198.jpg",
        catId: "1593",
        catName: "粮油调味",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/130034/25/15618/523938/5fac8e15E84b871da/45dc31dee1a4e220.png",
        catId: "1594",
        catName: "乳制品",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/177728/10/9717/731375/60cb77e9E4c10e9e1/7ae1d424f0c4d406.png",
        catId: "1595",
        catName: "休闲零食",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/171130/22/6024/128321/6020b2e4Ef4ba4542/353a556d47c25121.jpg",
        catId: "3986",
        catName: "母婴玩具",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/107411/30/15915/199263/5eaf6b4cE0a7b4080/41335d5d95f576ce.jpg",
        catId: "9434",
        catName: "纸品家清",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/206917/11/8226/66945/6184e893E5d49b030/9fa0ff3ea1c0f225.jpg",
        catId: "862",
        catName: "个护美妆",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/120377/21/4107/341055/5ed85e6dE336adeea/2c772c9d717511e9.png",
        catId: "866",
        catName: "家居百货",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/160485/24/20708/173705/607ecbabE197a1e08/c3b555933f691fa6.jpg",
        catId: "867",
        catName: "家纺服饰",
      },

      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/171130/22/6024/128321/6020b2e4Ef4ba4542/353a556d47c25121.jpg",
        catId: "3986",
        catName: "母婴玩具",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/107411/30/15915/199263/5eaf6b4cE0a7b4080/41335d5d95f576ce.jpg",
        catId: "9434",
        catName: "纸品家清",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/206917/11/8226/66945/6184e893E5d49b030/9fa0ff3ea1c0f225.jpg",
        catId: "862",
        catName: "个护美妆",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/120377/21/4107/341055/5ed85e6dE336adeea/2c772c9d717511e9.png",
        catId: "866",
        catName: "家居百货",
      },
      {
        backImg:
          "https://m.360buyimg.com/n2/jfs/t1/160485/24/20708/173705/607ecbabE197a1e08/c3b555933f691fa6.jpg",
        catId: "867",
        catName: "宠物用品",
      },
    ],
    classesInfo: [
      {
        catId: "1590",
        catName: "驱蚊防晒",
      },
      {
        catId: "1591",
        catName: "配方奶粉",
      },
      {
        catId: "1592",
        catName: "纸尿裤",
      },
      {
        catId: "1593",
        catName: "辅食零食",
      },
      {
        catId: "1594",
        catName: "清洁护肤",
      },
      {
        catId: "1595",
        catName: "奶瓶餐具",
      },
    ],
    shopCart: [],
  }),
  actions: {
    setCategorySelected(data) {
      this.categorySelected = data;
    },
    setShopCart(data) {
      this.shopCart = data;
    },
  },
});
