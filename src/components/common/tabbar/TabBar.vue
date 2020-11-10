<!--  -->
<template>
  <div id="tabbar">
    <slot></slot>
  </div>
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
#tabbar {
  background-color: #f6f6f6;
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>