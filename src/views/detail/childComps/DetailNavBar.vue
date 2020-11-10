<!--  -->
<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick"><img src="@/assets/img/common/back.svg" alt="" /></div>
      <div slot="center" class="center">
        <div
          :class="{ active: currentIndex == index }"
          @click="detailClick(index)"
          class="detail-center"
          v-for="(item, index) in titles"
          :key="item.index"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  data() {
    return { currentIndex: 0, titles: ["商品", "参数", "评论", "推荐"] };
  },
  methods: {
    detailClick(index) {
      this.currentIndex = index;
      this.$emit('detailClick',index)
    },
    backClick(){this.$router.back()}
  },

  components: { NavBar },
};
</script>
<style  scoped>
img {
  margin-top: 10px;
}
.center {
  display: flex;
  font-size: 16px;
}
.detail-center {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>