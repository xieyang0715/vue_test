<template>
  <div class="hello">
      111111111111112555555
      4584ggggg
    <h1>{{ msg }}</h1>
    <slot-test v-slot="data">
      <template>
        <div @click="clickDis(data)">惦记我</div>
      </template>
      <button class="btn">Copy</button>
    </slot-test>
      <button @click="buyBtn">To buy</button>
  </div>
</template>
<script>
import slotTest from "./slotTest.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  components: { slotTest },
  methods: {
    clickDis(data) {
      console.log("clickDis(data):", data);
    },
    clip() {
      console.log("1111111111111111111");
      let clipboard = new this.clipboard(".btn", {
        text: function() {
          return "sssssssssssssssss to be or not to be";
        }
      });

      clipboard.on("success", function() {
        console.log("复制成功");
      });
      clipboard.on("error", function() {
        console.log("复制失败");
      });
      console.log("222222222222222222222");
    },
    buyBtn(){
      this.$router.push({
        name:"buy"
      });
    }
  },
  created() {
    this.clip();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
