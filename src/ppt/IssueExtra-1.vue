<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";
export default {
  name: "IssueExtra1",
  props: {},
  data() {
    return {
      store: usePPTStore(),
      processStore: useProcessStore(),
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
  mounted(){
    if (this.store.recallData) {
      this.reason = this.store.answer.issueExtra1.lastResult;
    }
    this.$watch(
      () =>  this.store.answer.issueExtra1,
      function(val){
        const { firstResult, lastResult } = val;
        this.processStore.page7.answer.firstResult = firstResult;
        this.processStore.page7.answer.lastResult = lastResult;
        this.$postMessage();

      },
      {deep:true}
    )
  }
};
</script>
<template>
  <div class="page-container">
    <p>
      小明根据上述实验数据得出以下结论：当瓶子一定，升高相同温度，吸管越细液柱变化越明显。
      <br><br>
      请你运用所学的科学知识，解释吸管越细液柱变化越明显的原因。
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
    line-height: 2em;
    font-size: 22px;
    margin: 16px 0;
  }
  .input-area {
    margin-top: 30px;
  }
}
</style>
