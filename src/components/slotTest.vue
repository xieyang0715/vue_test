<template>
  <div>
    我是子组件
    <slot :data="childData"></slot>
  </div>
</template>

<script>
export default {
  name: "slot-test",
  props: {
    msg: String
  },
  data() {
    return {
      childData: {
        xxx: 0,
        nnn: {
          a: "aaa",
          b: "bbb"
        }
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
