<script>
import img1 from "../assets/images/10-1.png";
export default {
  name: "Chart",
  props: {},
  data() {
    return {
      img1,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="page-conatiner">
    <img :src="img1" alt="" />
  </div>
</template>
<style scoped lang="scss">
.page-conatiner {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 10px;
  img {
    width: 100%;
    height: auto;
  }
}
</style>
