<!--  -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar"
      ><div slot="center">购物车({{ length }})</div></nav-bar
    >
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["cartList", "cartLength"]),
    ...mapGetters({ length: "cartLength", list: "cartList" }),
  },

  components: { NavBar ,CartList,CartBottomBar},
};
</script>
<style  scoped>
.cart{position: relative;}
.nav-bar {
  background-color: var(--color-tint);
  color: #f0f0f0;
  text-align: center;
}
</style>