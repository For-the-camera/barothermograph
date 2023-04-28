<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/2-1.png";
import img2 from "../assets/images/2-2.jpg";
import imgA from "../assets/images/2-A.jpg";
import imgB from "../assets/images/2-B.jpg";
import imgC from "../assets/images/2-C.jpg";
import imgD from "../assets/images/2-D.jpg";
import { useProcessStore } from "../stores/process";
export default {
  name: "Issue1",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      processStore: useProcessStore(),
      img1,
      img2,
      options: [
        {
          image: imgA,
          name: "A",
          checked: false,
        },
        {
          image: imgB,
          name: "B",
          checked: false,
        },
        {
          image: imgC,
          name: "C",
          checked: false,
        },
        {
          image: imgD,
          name: "D",
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
          this.store.answer.issue1.firstResult = "";
          this.store.answer.issue1.lastResult = "";
        } else {
          this.store.answer.issue1.lastResult = "";
        }
      } else {
        this.selectedOption = index;
        if (
          this.store.nowPage.firstEnterInto ||
          this.store.answer.issue1.firstResult === ""
        ) {
          this.store.answer.issue1.firstResult = index;
          this.store.answer.issue1.lastResult = index;
        } else {
          this.store.answer.issue1.lastResult = index;
        }
      }
    },
  },
  mounted() {
    this.$watch(
      () => this.store.answer.issue1,
      function (val) {
        const { firstResult, lastResult } = val;
        this.processStore.page2.answer.firstResult = firstResult;
        this.processStore.page2.answer.lastResult = lastResult;
      },
      { deep: true }
    );
  },
};
</script>
<template>
  <div class="page-container">
    <div class="left">
      <p>
        图1-1是小明所在城市某天各时段的气温记录曲线，上午9:00时“简易温度计”液柱高度如图1-2所示，请判断下午15:00时液柱高度是：
      </p>
      <div class="options" ref="optionsRef">
        <div
          class="item"
          v-for="option in options"
          :key="option.name"
          @click.prevent="selectOption(option.name)"
        >
          <img :src="option.image" alt="" />
          <p :ref="'ref-issue-1-' + option.name">
            <el-radio-group v-model="selectedOption">
              <el-radio :label="option.name">{{ option.name }}</el-radio>
            </el-radio-group>
          </p>
        </div>
      </div>
    </div>
    <div class="right">
      <img :src="img1" style="width: 400px" alt="" />
      <p>图 1-1</p>
      <img :src="img2" style="height: 350px; width: auto" alt="" />
      <p>图 1-2 （上午9:00）</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  .left {
    width: 60%;
    p {
      line-height: 1.5;
      font-size: 1.25rem;
    }

    .options {
      display: flex;
      gap: 20px;
      padding-top: 20px;
      .item {
        cursor: pointer;
        img {
          width: 151px;
          height: 300px;
        }
        p {
          text-align: center;
          font-size: 24px;
        }
        .checked {
          color: red;
        }
      }
    }
  }
  .right {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding-left: 30px;
    img {
      width: 90%;
    }
    p {
      margin: 5px 0;
      font-size: 18px;
    }
  }
  ::v-deep .el-radio__label {
    font-size: 18px;
  }
}
</style>
