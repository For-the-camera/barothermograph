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
          lable: "曲线A",
          value: "A",
        },
        {
          lable: "曲线B",
          value: "B",
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    selectOption: function (index) {
      if (this.selectedOption === index && this.selectedOption) {
        this.$refs[`ref-issue-9-${this.selectedOption}`][0].style.color =
          "black";
        this.selectedOption = null;
        this.store.answer.issue9 = "";
      } else {
        if (this.selectedOption) {
          this.$refs[`ref-issue-9-${this.selectedOption}`][0].style.color =
            "black";
        }
        this.selectedOption = index;
        this.$refs[`ref-issue-9-${index}`][0].style.color = "red";
        this.store.answer.issue9 = index;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question-stem">
      <div class="images">
        <div class="images-inner">
          <img src="../assets/images/10-2.jpg" alt="" />
          <p>甲</p>
        </div>
        <div class="images-inner">
          <img src="../assets/images/10-2.jpg" alt="" />
          <p>乙</p>
        </div>
      </div>
      <p style="margin: 20px 0">
        有甲乙两简易温度计，乙温度计的吸管细一些，左图分别录了某一天液柱的变化情况，请你判断乙温度计对应的刻度曲线是
      </p>
    </div>
    <ol>
      <li
        v-for="option in options"
        @click="selectOption(option.value)"
        :ref="'ref-issue-9-' + option.value"
      >
        {{ option.lable }}
      </li>
    </ol>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  .question-stem {
    display: flex;
    flex-direction: column;
    .images {
      width: 100%;
      display: flex;
      justify-content: space-around;
      .images-inner {
        display: flex;
        flex-direction: column;
        img {
          height: 350px;
          width: auto;
        }
        p {
          font-size: 28px;
          font-weight: bold;
          text-align: center;
        }
      }
    }
    p{
      font-weight: bold;
    }
  }
  ol {
    list-style-position: inside;
    list-style-type: upper-alpha;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
</style>
