<!--  -->
<template>
  <div class="cart-list">
    <scroll class="content" :pull-up-load="true">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
        >{{ index }}</cart-list-item
      >
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  data() {
    return {};
  },
  computed: { ...mapGetters(["cartList"]) },

  components: { Scroll, CartListItem },
};
</script>
<style  scoped>
.cart-list {
  height: 100vh;
  position: relative;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
</style>