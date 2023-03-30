<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/2-1.jpg";
import img2 from "../assets/images/2-2.jpg";
import imgA from "../assets/images/2-A.jpg";
import imgB from "../assets/images/2-B.jpg";
import imgC from "../assets/images/2-C.jpg";
import imgD from "../assets/images/2-D.jpg";
export default {
  name: "Issue1",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
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
      if (this.selectedOption === index && this.selectedOption) {
        this.$refs[`ref-issue-1-${this.selectedOption}`][0].style.color =
          "black";
        this.selectedOption = null;
        this.store.answer.issue1 = "";
      } else {
        if (this.selectedOption) {
          this.$refs[`ref-issue-1-${this.selectedOption}`][0].style.color =
            "black";
        }
        this.selectedOption = index;
        this.$refs[`ref-issue-1-${index}`][0].style.color = "red";
        this.store.answer.issue1 = index;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="left">
      <img :src="img1" class="question-stem" alt="" />
      <p>
        下图是某一天各个时段气温的曲线，右图拍照的时间是8:00，请你判断下午16:00时，该“简易温度计”的刻度应该是以下哪张图
      </p>
      <div class="options" ref="optionsRef">
        <div
          class="item"
          v-for="option in options"
          :key="option.name"
          @click="selectOption(option.name)"
        >
          <img :src="option.image" alt="" />
          <p :ref="'ref-issue-1-' + option.name">
            {{ option.name }}
          </p>
        </div>
      </div>
    </div>
    <div class="right">
      <img :src="img2" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  .left {
    width: 70%;
    p{
      line-height: 3rem;
      font-size: 1.25rem;
    }
    .question-stem {
      width: 50%;
      height: auto;
    }
    .options {
      display: flex;
      justify-content: space-between;
      padding-top: 20px;
      .item {
        cursor: pointer;
        img {
          width: 151px;
          height: 353px;
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
    width: 30%;
    display: flex;
    align-items: center;
    padding-left: 30px;
    img {
      width: 90%;
    }
  }
}
</style>
