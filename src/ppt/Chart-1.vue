<script>
import img from "../assets/images/c-1.jpg"
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
    <img :src="img" style="height: 580px; width: auto;" alt="">
  </div>
</template>
<style scoped lang="scss">
.page-container{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
