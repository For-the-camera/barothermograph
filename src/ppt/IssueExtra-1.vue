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
  methods: {
    startResponse() {
      if (this.store.nowPage.firstEvent === 0) {
        this.store.nowPage.firstEvent = Date.now();
      }
    },
    postAnswer() {
      if (
        this.store.nowPage.firstEnterInto ||
        this.store.answer.issueExtra1.firstResult === ""
      ) {
        this.store.answer.issueExtra1.firstResult = this.reason;
        this.store.answer.issueExtra1.lastResult = this.reason;
      } else {
        this.store.answer.issueExtra1.lastResult = this.reason;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <p>
      小红根据实验数据得出以下结论：吸管越细，液柱变化越明显；请你运用所学知识，解释吸管越细液柱变化越明显的原因。
    </p>
    <div class="input-area">
      <el-input
        type="textarea"
        :rows="5"
        v-model="reason"
        @focus="startResponse"
        @blur="postAnswer"
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
