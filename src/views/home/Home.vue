<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-contro"
      v-show="isTabFixed"
      :title="['流行', '新款', '精选']"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @pullingUp="LoadMore"
      
      ><home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view></feature-view>
      <tab-control
        @tabClick="tabClick"
        :title="['流行', '新款', '精选']"
        ref="tabControl2"
      ></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list
    ></scroll>
    <back-top
      v-show="isShowBackTop"
      class="back-top"
      @click.native="backClick"
    ></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/backtop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: "false",
      tabOffsetTop: 0,
      isTabFixed: false,
      // saveY:0,
    };
  },

  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,

    HomeSwiper,
    RecommendView,
    FeatureView,
  },

  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  // destroyed(){console.log(1);},
  deactivated(){this.saveY=this.$refs.scroll.scroll.y;
  console.log(this.saveY);
},
activated(){
  this.$refs.scroll.refresh()
  this.$refs.scroll.scrollTo(0,this.saveY,0)
},
  
  mounted() {
    this.$bus.$on("homeItemImgLoad", () => {
     
      this.$refs.scroll.refresh();
    });
  },
  methods: {
// contentScroll1(position){console.log(position)},

    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType - "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // this.result = res;
        this.banners = res.data.banner.list;

        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        // console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000;
      this.isTabFixed =( -position.y) > this.tabOffsetTop;
      // console.log(this.tabOffsetTop);
    },
    LoadMore() {
      this.getHomeGoods(this.currentType);
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offSetTop;
      
    },
  },
};
</script>
<style  scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #f0f0f0;
   /* position: fixed;
  left: 0;
  right: 0;
  top: 0;  */
} 
#home {
  /* padding-top: 44px; */
  position: relative;
  height: 100vh;
}

.content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 49px;
}
.tab-control {
  position: relative;
  
  z-index: 9;
}
</style>