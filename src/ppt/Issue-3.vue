<script>
import { usePPTStore } from "../stores/ppt";

export default {
  name: "Issue3",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      options: [
        {
          label: "更换大一些的瓶子",
          value: "A",
          checked: false,
        },
        {
          label: "更换更粗的吸管",
          value: "B",
          checked: false,
        },
        {
          label: "更换小一些的瓶子",
          value: "C",
          checked: false,
        },
        {
          label: "更换更细的吸管",
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
        this.$refs[`ref-issue-3-${this.selectedOption}`][0].style.color =
          "black";
        this.selectedOption = null;
        this.store.answer["issue-2"] = "";
      } else {
        if (this.selectedOption) {
          this.$refs[`ref-issue-3-${this.selectedOption}`][0].style.color =
            "black";
        }
        this.selectedOption = index;
        this.$refs[`ref-issue-3-${index}`][0].style.color = "red";
        this.store.answer["issue-2"] = index;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question">
      <p>
        小红发现按照课本示例自制温度计时，当外接的温度上升时，吸管内液柱有变化但并不明显，为了解决该问题，他们提出以下几种可能的措施，你认为可行的是
      </p>
      <ul>
        <li
          v-for="(option, index) in options"
          :key="index"
          :ref="'ref-issue-3-' + option.value"
          @click="selectOption(option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
    <div class="images">
      <img src="../assets/images/4-1.jpg" alt="" />
      <img src="../assets/images/4-2.png" class="arrow" alt="" />
      <img src="../assets/images/4-3.jpg" alt="" />
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
  .images {
    display: flex;
    align-items: center;
    height: 100%;
    .arrow {
      width: 100px;
      height: 100px;
      padding: 25px;
    }
  }
}
</style>
