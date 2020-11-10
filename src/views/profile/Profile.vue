<!--  -->
<template>
  <div><ul>
      <li v-for="item in $store.state.cartList" :key="item.title">{{ item }}</li>
    </ul></div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},
};
</script>
<style  scoped>
</style>