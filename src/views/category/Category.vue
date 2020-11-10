<!--  -->
<template>
  <div>
    <scroll :probeType="3" :pullUpLoad="true" class="content" ref="scroll" @scroll="categoryScroll"
      ><ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>8</li>
        <li>9</li>
        <li>0</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>1</li>
        <li>9</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li></li>
        <li>7</li>
        <li>3</li>
        <li>8</li>
        <li>2</li>
        <li>2</li>
        <li>1</li>
        <li>3</li>
        <li>5</li>
        <li>9</li>
        <li>2</li>
        <li>2</li>
        <li>4</li>
        <li>9</li>
        <li>0</li>
        <li>8</li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li></ul
    ></scroll>
  </div>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
export default {
  data() {
    return { saveY: 0 };
  },

  components: { Scroll },
  methods: {
    categoryScroll(position) {
    //   this.saveY=-position.y;
    // console.log(this.saveY);
    console.log(position)
    },
  
  },
  destroyed(){console.log(2);},
  activated() {console.log(this.saveY);
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    
  },
  deactivated(){this.saveY = this.$refs.scroll.scroll.y;console.log(this.saveY);}

};
</script>
<style  scoped>
.content {
  margin-top: 200px;
  height: 100px;
  background-color: red;
}
</style>