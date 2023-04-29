<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  name: "Issue6",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      processStore: useProcessStore(),
      options: [
        {
          label: "猜想1",
          value: "升高相同的温度，瓶子容积越大液柱高度变化越明显",
          answer: "A",
        },
        {
          label: "猜想2",
          value: "升高相同的温度，瓶子容积越小液柱高度变化越明显",
          answer: "B",
        },
        {
          label: "猜想3",
          value: "瓶子的大小对液柱高度变化不会产生影响",
          answer: "C",
        },
      ],
      currentSelect: null,
      reason: null,
    };
  },
  methods: {
    selectOption: function (option) {
      if (this.store.nowPage.firstEvent === 0) {
        this.store.nowPage.firstEvent = Date.now();
      }
      this.currentSelect = option.answer;
      if (
        this.store.nowPage.firstEnterInto ||
        this.processStore.page8.answer.firstResult.guessNo === ""
      ) {
        this.processStore.page8.answer.firstResult.guessNo = option.answer;
        this.processStore.page8.answer.firstResult.guess = option.value;
        this.processStore.page8.answer.lastResult.guessNo = option.answer;
        this.processStore.page8.answer.lastResult.guess = option.value;
      } else {
        this.processStore.page8.answer.lastResult.guessNo = option.answer;
        this.processStore.page8.answer.lastResult.guess = option.value;
      }
      this.$postMessage();
    },
  },
  mounted() {
    if (this.store.recallData) {
      const { guessNo, guess } = this.store.answer.issue6.lastResult;
      this.currentSelect = guessNo;
    }
    // this.$watch(
    //   () => this.processStore.page8.answer,
    //   function (val) {
    //     const { firstResult, lastResult } = val;
    //     this.processStore.page8.answer.answer.firstResult = Object.assign(
    //       {},
    //       firstResult
    //     );
    //     this.processStore.page8.answer.answer.lastResult = Object.assign(
    //       {},
    //       lastResult
    //     );
    //     this.$postMessage();
    //   },
    //   { deep: true }
    // );
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question-stem">
      <p>
        探究 “瓶子容积对液柱高度变化的影响”
        ，小明的三位同学分别提出以下猜想，请你选择其中最合理的猜想。
      </p>
    </div>

    <ul>
      <el-radio-group v-model="currentSelect">
        <li
          v-for="item in options"
          :key="item.answer"
          @click="selectOption(item)"
        >
          <el-radio :label="item.answer">{{ "" }}</el-radio>
          {{ item.label }}: {{ item.value }}
        </li>
      </el-radio-group>
    </ul>

    <!-- <p style="margin: 10px 0">请在下方空白方框处填写你判断的理由</p>
    <div>
      <el-input
        type="textarea"
        v-model="reason"
        @blur="processStore.page8.answer.reason = reason"
        :rows="5"
      ></el-input>
    </div> -->
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  p {
    line-height: 2em;
    font-size: 22px;
  }
  ul {
    list-style: none;
    list-style-position: inside;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 22px;
      line-height: 2em;
    }
  }
  .question-stem {
    margin: 20px 0;
  }
}
</style>
