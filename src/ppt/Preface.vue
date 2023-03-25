<script>
export default {
  name: "Preface",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="container">
    <p>
      小明、小刚和小红在物理课本上看到有“自制温度计”的小活动，因此他们三人组成了一个兴趣小组，找来了一些简易的材料，探究如何制作一支简易温度计
    </p>
    <div class="image">
      <img src="../assets/images/1-1.jpg" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  p {
    color: red;
    font-size: 20px;
  }
  .image {
    display: flex;
    flex-direction: row-reverse;
  }
}
</style>
