<script>
import img from "../assets/images/1-1.jpg"
export default {
  name: "Chart1",
  props: {},
  data() {
    return {
      img,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="page-container">
    <img :src="img" alt="">
  </div>
</template>
<style scoped lang="scss">
.page-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
