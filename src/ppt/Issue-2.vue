<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/3-1.jpg";
import { useProcessStore } from "../stores/process";

export default {
  name: "Issue2",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      processStore: useProcessStore(),
      img1,
      options: [
        {
          label: "瓶子热胀冷缩",
          value: "A",
          checked: false,
        },
        {
          label: "液体热胀冷缩",
          value: "B",
          checked: false,
        },
        {
          label: "吸管热胀冷缩",
          value: "C",
          checked: false,
        },
        {
          label: "空气热胀冷缩",
          value: "D",
          checked: false,
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    selectOption: function (index) {
      if (this.store.nowPage.firstEvent === 0) {
        this.store.nowPage.firstEvent = Date.now();
      }
      if (this.selectedOption === index && this.selectedOption) {
        this.selectedOption = null;
        if (this.store.nowPage.firstEnterInto) {
          this.store.answer.issue2.firstResult = "";
          this.store.answer.issue2.lastResult = "";
        } else {
          this.store.answer.issue2.lastResult = "";
        }
      } else {
        this.selectedOption = index;
        if (
          this.store.nowPage.firstEnterInto ||
          this.store.answer.issue2.firstResult === ""
        ) {
          this.store.answer.issue2.firstResult = index;
          this.store.answer.issue2.lastResult = index;
        } else {
          this.store.answer.issue2.lastResult = index;
        }
      }
    },
  },
  mounted() {
    if (this.store.recallData) {
      this.selectedOption = this.store.answer.issue2.lastResult;
    }
    this.$watch(
      () => this.store.answer.issue2,
      function (val) {
        const { firstResult, lastResult } = val;
        this.processStore.page3.answer.firstResult = firstResult;
        this.processStore.page3.answer.lastResult = lastResult;
        this.$postMessage();
      },
      { deep: true }
    );
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question">
      <p>根据你所学的科学知识，解释“简易温度计” 的基本原理是</p>
      <ul>
        <el-radio-group v-model="selectedOption">
          <li
            v-for="(option, index) in options"
            :key="index"
            :ref="'ref-issue-2-' + option.value"
            @click.prevent="selectOption(option.value)"
          >
            <el-radio :label="option.value">{{ "" }}</el-radio>
            {{ option.value }}.
            {{ option.label }}
          </li>
        </el-radio-group>
      </ul>
    </div>
    <div>
      <img :src="img1" style="height: 500px; width: auto" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: space-between;

  p {
    font-size: 22px;
    margin-bottom: 50px;
    line-height: 2em;
  }
  ul {
    list-style: none;
    list-style-position: inside;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 22px;
    }
  }
}
</style>
