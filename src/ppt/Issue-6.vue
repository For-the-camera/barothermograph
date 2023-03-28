<script>
import { usePPTStore } from "../stores/ppt";

export default {
  name: "Issue6",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      options: [
        {
          label: "猜想1",
          value: "瓶子的大小对液柱变化明显程度不会产生影响",
        },
        {
          label: "猜想2",
          value: "瓶子越大，相同升温时液柱变化得越明显",
        },
        {
          label: "猜想3",
          value: "瓶子越小，相同升温时液柱变化得越明显",
        },
      ],
      currentSelect: null,
      reason: null,
    };
  },
  methods: {
    selectOption: function (index) {
      this.currentSelect = index;
      const { label, value } = this.options[index];
      this.store.answer.issue6.guess = label + "：" + value;
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question-stem">
      <p>
        针对 “瓶子的大小是否对液柱变化明显程度产生影响”
        ，小刚、小红和小明分别提出以下猜想
      </p>
    </div>
    <div class="question-stem">
      <p v-for="(option, index) in options" :key="index">
        {{ option.label + "：" + option.value }}
      </p>
    </div>
    <div class="question-stem">
      <span>你认为</span>
      <el-dropdown @command="selectOption">
        <span style="color: #409eff; padding: 0 10px">
          {{ currentSelect !== null ? options[currentSelect].label : "猜想"
          }}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item
            v-for="(option, index) in options"
            :key="option.value"
            :command="index"
            >{{ option.label }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
      <span>是正确的，请在下方填写你的判断理由</span>
    </div>
    <div>
      <el-input
        type="textarea"
        v-model="reason"
        @blur="store.answer.issue6.reason = reason"
        :rows="5"
      ></el-input>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  p,
  span {
    font-weight: bold;
  }
  .question-stem {
    margin: 20px 0;
  }
}
</style>
