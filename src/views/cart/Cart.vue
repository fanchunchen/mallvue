<!--  -->
<template>
  <div class="cart">
    <nav-bar class="nav-bar"
      ><div slot="center">购物车({{ length }})</div></nav-bar
    >
    <cart-list></cart-list>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from './childComps/CartList'

import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    // ...mapGetters(["cartList", "cartLength"]),
    ...mapGetters({ length: "cartLength", list: "cartList" }),
  },

  components: { NavBar ,CartList},
};
</script>
<style  scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #f0f0f0;
  text-align: center;
}
</style>