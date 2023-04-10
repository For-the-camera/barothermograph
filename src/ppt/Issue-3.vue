<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/4-1.jpg";
import img2 from "../assets/images/4-2.png";
import img3 from "../assets/images/4-3.jpg";
export default {
  name: "Issue3",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      img1,
      img2,
      img3,
      options: [
        {
          label: "更换容积大一些的瓶子",
          value: "A",
          checked: false,
        },
        {
          label: "更换容积小一些的瓶子",
          value: "B",
          checked: false,
        },
        {
          label: "更换更粗的吸管",
          value: "C",
          checked: false,
        },
        {
          label: "更换更细的吸管",
          value: "D",
          checked: false,
        },
        {
          label: "更换更硬的吸管",
          value: "E",
          checked: false,
        }
      ],
      selectedOption: [],
    };
  },
  methods: {
    selectOption: function (index) {
      const answerIndex = this.selectedOption.indexOf(index);
      if (answerIndex === -1) {
        this.selectedOption.push(index);
      } else {
        this.selectedOption.splice(answerIndex, 1);
      }
      this.selectedOption.sort();
      this.store.answer.issue3 = this.selectedOption;
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question">
      <p>
        （多选）小红发现当外界的温度上升时，该“简易温度计”吸管内的液柱上升并不明显，为了解决该问题，你认为以下可行的改进方案是
        <span style="padding-right: 30px">（</span>
        <span v-for="answer in selectedOption" :key="answer" style="padding: 0 10px;">{{ answer }}</span>
        <span style="padding-left: 30px">）</span>
      </p>
      <ul>
        <el-checkbox-group v-model="selectedOption">
          <li
            v-for="(option, index) in options"
            :key="index"
            @click="selectOption(option.value)"
          >
            <el-checkbox :label="option.value">{{ "" }}</el-checkbox>
            {{ option.value }}.
            {{ option.label }}
          </li>
        </el-checkbox-group>
      </ul>
    </div>
    <div class="images">
      <img :src="img1" alt="" />
      <img :src="img2" class="arrow" alt="" />
      <img :src="img3" alt="" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    line-height: 2;
    margin-bottom: 50px;
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
