<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/3-1.jpg";

export default {
  name: "Issue2",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      img1,
      options: [
        {
          label: "瓶子的热胀冷缩",
          value: "A",
          checked: false,
        },
        {
          label: "液体的热胀冷缩",
          value: "B",
          checked: false,
        },
        {
          label: "吸管的热胀冷缩",
          value: "C",
          checked: false,
        },
        {
          label: "空气的热胀冷缩",
          value: "D",
          checked: false,
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    selectOption: function (index) {
      if (this.selectedOption === index && this.selectedOption) {
        this.selectedOption = null;
        this.store.answer.issue2 = "";
      } else {
        if (this.selectedOption) {
        }
        this.selectedOption = index;
        this.store.answer.issue2 = index;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question">
      <p>根据你所学的知识，请你判断该“简易温度计”的基本原理是</p>
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
      <img :src="img1" style="height: 500px;width: auto;" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.25rem;
    margin-bottom: 50px;
    line-height: 3rem;
  }
  ul {
    list-style: none;
    list-style-position: inside;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 18px;
    }
  }
}
</style>
