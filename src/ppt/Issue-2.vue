<script>
import { usePPTStore } from "../stores/ppt";

export default {
  name: "Test1",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
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
          label: "液体具有蒸发作用",
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
        this.$refs[`ref-issue-2-${this.selectedOption}`][0].style.color =
          "black";
        this.selectedOption = null;
        this.store.answer["issue-2"] = "";
      } else {
        if (this.selectedOption) {
          this.$refs[`ref-issue-2-${this.selectedOption}`][0].style.color =
            "black";
        }
        this.selectedOption = index;
        this.$refs[`ref-issue-2-${index}`][0].style.color = "red";
        this.store.answer["issue-2"] = index;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question">
      <p>该温度计的基本原理是</p>
      <ul>
        <li
          v-for="(option, index) in options"
          :key="index"
          :ref="'ref-issue-2-' + option.value"
          @click="selectOption(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
    <div>
      <img src="../assets/images/3-1.jpg" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    color: red;
    margin-bottom: 50px;
    font-weight: bold;
  }
  ul {
    list-style: upper-alpha;
    list-style-position: inside;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
