<script>
import { usePPTStore } from "../stores/ppt";
import img1 from "../assets/images/4-1.jpg";
import img2 from "../assets/images/4-2.jpg";
import { useProcessStore } from "../stores/process";
export default {
  name: "Issue3",
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
          label: "选择容积大一些的瓶子",
          value: "A",
          checked: false,
        },
        {
          label: "选择容积小一些的瓶子",
          value: "B",
          checked: false,
        },
        {
          label: "选择直径更大的吸管",
          value: "C",
          checked: false,
        },
        {
          label: "选择直径更小的吸管",
          value: "D",
          checked: false,
        },
      ],
      selectedOption: [],
    };
  },
  methods: {
    selectOption: function (index) {
      if (this.store.nowPage.firstEvent === 0) {
        this.store.nowPage.firstEvent = Date.now();
      }
      const answerIndex = this.selectedOption.indexOf(index);
      if (answerIndex === -1) {
        this.selectedOption.push(index);
      } else {
        this.selectedOption.splice(answerIndex, 1);
      }
      this.selectedOption.sort();
      if (
        this.store.nowPage.firstEnterInto ||
        this.store.answer.issue3.firstResult.length === 0
      ) {
        console.log("active");
        this.store.answer.issue3.firstResult = JSON.parse(
          JSON.stringify(this.selectedOption)
        );
        this.store.answer.issue3.lastResult = JSON.parse(
          JSON.stringify(this.selectedOption)
        );
      } else {
        this.store.answer.issue3.lastResult = JSON.parse(
          JSON.stringify(this.selectedOption)
        );
      }
    },
  },
  mounted() {
    this.$watch(
      () => this.store.answer.issue3,
      function (val) {
        const { firstResult, lastResult } = val;
        this.processStore.page4.answer.firstResult = JSON.parse(
          JSON.stringify(firstResult)
        );
        this.processStore.page4.answer.lastResult = JSON.parse(
          JSON.stringify(lastResult)
        );
      },
      { deep: true }
    );
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question">
      <p>
        （可多选）小明发现当外界的温度上升时（如右图所示），“简易温度计”吸管内的液柱变化并不明显，为了解决该问题，以下可行的改进方案是
      </p>
      <ul>
        <el-checkbox-group v-model="selectedOption">
          <li
            v-for="(option, index) in options"
            :key="index"
            @click.prevent="selectOption(option.value)"
          >
            <el-checkbox :label="option.value">{{ "" }}</el-checkbox>
            {{ option.value }}.
            {{ option.label }}
          </li>
        </el-checkbox-group>
      </ul>
    </div>
    <div class="images">
      <div>
        <img :src="img1" alt="" />
        <p>上午 8:00 (21℃)</p>
      </div>

      <div>
        <img :src="img2" alt="" />
        <p>中午 12:00 (26℃)</p>
      </div>
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
    img {
      height: 400px;
      width: auto;
      margin: 0 30px;
    }
    p{
      margin: 0 30px;
      text-align: center;
    }
    .arrow {
      width: 100px;
      height: 100px;
      padding: 25px;
    }
  }
}
</style>
