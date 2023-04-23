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
          value: "瓶子容积越大，升温相同时液柱变化越明显",
          answer: "A",
        },
        {
          label: "猜想2",
          value: "瓶子容积越小，升温相同时液柱变化越明显",
          answer: "B",
        },
        {
          label: "猜想3",
          value: "瓶子的大小对液柱变化不会产生影响",
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
        this.store.answer.issue6.firstResult.guessNo === ""
      ) {
        this.store.answer.issue6.firstResult.guessNo = option.answer;
        this.store.answer.issue6.firstResult.guess = option.value;
        this.store.answer.issue6.lastResult.guessNo = option.answer;
        this.store.answer.issue6.lastResult.guess = option.value;
      } else {
        this.store.answer.issue6.lastResult.guessNo = option.answer;
        this.store.answer.issue6.lastResult.guess = option.value;
      }
    },
  },
  mounted(){
    this.$watch(
      () =>  this.store.answer.issue6,
      function(val){
        const { firstResult, lastResult } = val;
        this.processStore.page8.answer.firstResult = Object.assign({},firstResult);
        this.processStore.page8.answer.lastResult = Object.assign({},lastResult);
      },
      {deep:true}
    )
  }
};
</script>
<template>
  <div class="page-container">
    <div class="question-stem">
      <p>
        探究 “瓶子容积对液柱变化的影响” ，小明的三位同学分别提出以下猜想，请你选择你认为正确的猜想。
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
        @blur="store.answer.issue6.reason = reason"
        :rows="5"
      ></el-input>
    </div> -->
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  p {
    line-height: 1.5;
    font-size: 1.25rem;
  }
  ul {
    list-style: none;
    list-style-position: inside;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 1.25rem;
    }
  }
  .question-stem {
    margin: 20px 0;
  }
}
</style>
