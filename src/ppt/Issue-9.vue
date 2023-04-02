<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/10-2.jpg";
import img2 from "../assets/images/10-3.jpg";

export default {
  name: "Test1",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      img1,
      img2,
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
        this.selectedOption = null;
        this.store.answer.issue9 = "";
      } else {
        this.selectedOption = index;

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
          <img :src="img1" alt="" />
          <p>甲</p>
        </div>
        <div class="images-inner">
          <img :src="img2" alt="" />
          <p>乙</p>
        </div>
      </div>
      <p style="margin: 20px 0">
        小明使用大小相同的两个瓶子分别做了以上甲乙两支简易温度计，记录同一天不同时段甲乙两支温度计管内液柱高度的变化情况，得到变化曲线A和变化曲线B，请你判断乙温度计对应的曲线是
        <span style="padding-right: 40px;">（</span>
        <span>{{ selectedOption }}</span>
        <span style="padding-left: 40px;">）</span>
      </p>
    </div>
    <ol>
      <el-radio-group v-model="selectedOption">
        <li v-for="option in options" @click="selectOption(option.value)">
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
      line-height: 2;
    }
  }
  ol {
    list-style-position: inside;
    list-style-type: none;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 18px;
    }
  }
}
</style>
