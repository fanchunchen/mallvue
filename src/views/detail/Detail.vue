<!--  -->
<template>
  <div id="detail">
    <detail-nav-bar
      ref="nav"
      class="detail-nav"
      @detailClick="detailClick"
    ></detail-nav-bar>
    <scroll
      class="content"
      :pull-up-load="true"
      :probe-type="3"
      @scroll="contentScroll"
      ref="detailScroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-param-info
        ref="param"
        :param-info="paramInfo"
      ></detail-param-info>
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <!-- <detail-recommend-info></detail-recommend-info> -->
      <goods-list ref="recommend" :goods="recommends"></goods-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="backClick"></back-top>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <!-- <div><ul><li v-for="item in $store.state.cartList" :key="item.title">{{item}}</li></ul></div> -->
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
// import DetailRecommendInfo from "./childComps/DetailCommentInfo"
import DetailBottomBar from "./childComps/DetailBottomBar";

import Scroll from "@/components/common/scroll/Scroll";
import GoodsList from "@/components/content/goods/GoodsList";

import BackTop from "@/components/content/backtop/BackTop";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "@/network/detail";
export default {name:"Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      currentIndex: 0,
      isShowBackTop: false,
    };
  },

  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then((res) => {
      const data = res.result;
      console.log(data);
      console.log(res);
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      // 4.保存商品的详情数据
      this.detailInfo = data.detailInfo;

      // 5.获取参数的信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then((res) => {
      // console.log(res);
      this.recommends = res.data.list;
    });
  },

  methods: {
    imageLoad() {
      this.$refs.detailScroll.refresh();
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.param.$el.offsetTop);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
      this.themeTopYs.push(Number.MAX_VALUE);
    },

    detailClick(index) {
      this.$refs.detailScroll.scrollTo(0, -this.themeTopYs[index], 500);
    },
    contentScroll(position) {
      const positionY = -position.y;
      const length = this.themeTopYs.length;
      // console.log(position);
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = positionY > 3000;
    },
    backClick() {
      this.$refs.detailScroll.scrollTo(0, 0);
    },
    addToCart() {
      
      let product = {};
      product.iid = this.iid;
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.image = this.topImages[0];
      this.$store.commit('addCart',product)
    },
  },
  mounted() {
    this.$bus.$on("homeItemImgLoad", () => {
      this.$refs.detailScroll.refresh();
    });
  },
  components: {
    DetailNavBar,

    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    // DetailRecommendInfo,
    DetailBottomBar,

    BackTop,

    Scroll,
    GoodsList,
  },
};
</script>
<style  scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 59px;
  overflow: hidden;
 
}

</style>