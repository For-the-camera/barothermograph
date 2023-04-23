<script>
export default {
  name: "End",
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<template>
  <div class="page-container">
    <p>恭喜你，完成本题</p>
    <div class="tip">
      <p>请先点击下方的 【提交答案】，再点击 【进入下一题】</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  p {
    margin: 20px;
    font-size: 1.25rem;
    line-height: 1.5;
  }
  .tip {
    background-color: #4472c4;
    width: 400px;
    height: 100px;
    p {
      color: white;
    }
  }
}
</style>
