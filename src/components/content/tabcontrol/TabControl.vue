<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      v-bind:key="item"
      class="tab-control-item"
      :class="{ active: index == currentIndex }"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { currentIndex: 0 };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
       this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },

  components: {},
};
</script>
<style  scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  z-index: 9;
  background-color: #f6f6f6;
}
.tab-control-item {
  flex: 1;
}
.active {
    color: var(--color-high-text);
  }
.active span {
  border-bottom: 3px solid pink;
  padding: 5px;
}
</style>