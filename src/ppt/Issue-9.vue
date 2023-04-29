<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/10-2.jpg";
import img2 from "../assets/images/10-3.jpg";
import img from "../assets/images/10-4.jpg";
import { useProcessStore } from "../stores/process";

export default {
  name: "Test1",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      processStore: useProcessStore(),
      img1,
      img2,
      img,
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
    selectOption: function (option) {
      if (this.store.nowPage.firstEvent === 0) {
        this.store.nowPage.firstEvent = Date.now();
      }
      this.selectedOption = option;
      if (
        this.store.nowPage.firstEnterInto ||
        this.store.answer.issue9.firstResult === ""
      ) {
        this.store.answer.issue9.firstResult = option;
        this.store.answer.issue9.lastResult = option;
      } else {
        this.store.answer.issue9.lastResult = option;
      }
    },
  },
  mounted() {
    if (this.store.recallData) {
      this.selectedOption = this.store.answer.issue9.lastResult;
    }
    this.$watch(
      () => this.store.answer.issue9,
      function (val) {
        const { firstResult, lastResult } = val;
        this.processStore.page11.answer.firstResult = firstResult;
        this.processStore.page11.answer.lastResult = lastResult;
        this.$postMessage();

      },
      { deep: true }
    );
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question-stem">
      <p style="font-size: 1.25rem; line-height: 1.5">
        小明用两个相同的瓶子分别做了甲乙两支“简易温度计”（甲的吸管粗一些），记录某天同一地点不同时段甲乙两支温度计管内液柱高度的变化情况，得到曲线A和B。
      </p>
      <div class="images">
        <div class="images-inner">
          <img :src="img" alt="" />
          <p>
            <span>甲</span>
            <span>乙</span>
          </p>
        </div>
        <!-- <div class="images-inner">
          <img :src="img2" alt="" />
          <p>乙</p>
        </div> -->
      </div>
      <p style="margin: 5px 0; font-size: 1.25rem; line-height: 1.5">
        请你判断乙温度计对应的曲线是
      </p>
    </div>
    <ol>
      <el-radio-group v-model="selectedOption">
        <li
          v-for="option in options"
          @click.prevent="selectOption(option.value)"
        >
          <el-radio :label="option.value">{{ "" }}</el-radio>
          {{ option.value }}.
          {{ option.lable }}
        </li>
      </el-radio-group>
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
      margin-top: 15px;
      .images-inner {
        display: flex;
        flex-direction: column;
        img {
          height: 370px;
          width: auto;
        }
        p {
          font-size: 22px;
          font-weight: bold;
          text-align: center;
          span {
            padding: 0 50px;
          }
        }
      }
    }
    p {
      line-height: 2;
    }
  }
  ol {
    list-style-position: inside;
    list-style-type: none;
    li {
      cursor: pointer;
      padding: 5px 0;
      font-size: 1.25rem;
    }
  }
}
</style>
