<!--  -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
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
.nav-bar {
  line-height: 44px;
  height: 44px;
  text-align: center;
  display: flex;
  font-size:20px;
  
  
  box-shadow: 0 1px 1px rgb(100,100,100,.5);
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
  
}
</style>