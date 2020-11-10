<!--  -->
<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item.index">
      <img :src="item" alt="" 
       @load="imgLoad" 
       >
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  data() {
    return {};
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{imgLoad(){this.$emit('imgLoad')},
  
  
  
  },

  components: { Swiper, SwiperItem },
};
</script>
<style  scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
</style>