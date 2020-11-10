<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
     
      </div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"> </slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    path: { type: String },
    activeColor: { type: String, default: "red" },
  },
  methods: {
    itemClick() {
      return this.$router.replace(this.path);
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : { color: "" };
    },
  },

  components: {},
};
</script>
<style  scoped>
.tab-bar-item img {
  width: 24px;
  margin-top: 5px;
  height: 24px;
  vertical-align: middle;
}
.tab-bar-item {
  height: 49px;
  flex: 1;
  text-align: center;
}
</style>