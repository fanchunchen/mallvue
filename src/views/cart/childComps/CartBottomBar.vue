<!--  -->
<template>
  <div class="bottom-bar">
    <check-button
      class="check"
      :is-checked="isSelectAll"
      @click.native="checkClick"
    ></check-button>
    <span class="all">全选</span>
    <div class="total">合计:{{ totalPrice }}</div>
    <div class="calculate">去计算({{ checkLength }})</div>
  </div>
</template>

 <script>
// import func from "../../../../vue-temp/vue-editor-bridge";
import CheckButton from "./CheckButton";
// import { mapGetters } from "vue";
export default {
  name: "CartBottomBar",

  components: { CheckButton },
  computed: {
    // ...mapGetters(["cartList"]),
    totalPrice() {
      // return '¥'+this.$store.state.cartList
      //   .filter(function (item) {
      //     return (item.checked = true);
      //   })
      //   .reduce((preVious, item) => {
      //     return preVious + item.price * item.count;
      //   },0).toFixed(2);
      return (
        "¥" +
        this.$store.state.cartList

          .filter((item) => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.cartList.filter(function (item) {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.$store.state.cartList.length == 0) {
        return false;
      }
      return !this.$store.state.cartList.find((item) => {
        return item.checked === false;
      });
    },
  },
  methods: {
    checkClick() {
      // console.log(1);
      if (this.isSelectAll) {
        this.$store.state.cartList.forEach(
          (element) => (element.checked = false)
        );
        // for (let item of this.$store.state.cartList) {
        //   item.checked = false;
        // }
      } else {this.$store.state.cartList.forEach(
          (element) => (element.checked = true)
        );
        // for (let item of this.$store.state.cartList) {
        //   item.checked = true;
        // }
      }
    },
  },
};
</script>
<style  scoped>
.bottom-bar {
  height: 40px;
  position: fixed;
  left: 0;
  right: 0;

  bottom: 44px;

  background-color: #f0f0f0;
  display: flex;
  line-height: 40px;
}
.all {
  width: 60px;
  text-align: left;
}
.total {
  flex: 1;
}
.calculate {
  width: 80px;
  text-align: center;
  background-color: var(--color-tint);
}
.check {
  line-height: 0;
  margin-top: 8px;
  margin-right: 5px;
}
</style>