<script>
import { usePPTStore } from "../stores/ppt";
export default {
  name: "IssueExtra1",
  props: {},
  data() {
    return {
      store: usePPTStore(),
      reason: "",
    };
  },
  methods: {},
};
</script>
<template>
  <div class="page-container">
    <p>
      小红根据实验数据得出以下结论：吸管越细，液柱变化越明显；请你解释吸管越细液柱变化越明显的原因。
    </p>
    <div class="input-area">
      <el-input
        type="textarea"
        :rows="5"
        v-model="reason"
        @blur="store.answer.issueExtra1 = reason"
      ></el-input>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  p {
    line-height: 2;
    margin: 16px 0;
  }
  .input-area {
    margin-top: 30px;
  }
}
</style>
