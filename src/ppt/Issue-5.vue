<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  name: "Issue5",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      processStore:useProcessStore(),
      selectedOption: "",
      tableData: [
        {
          bottleSize: "中",
          pipeSize: "粗",
          temp: 10,
          spoutHeight: 0,
        },
        {
          bottleSize: "中",
          pipeSize: "粗",
          temp: 20,
          spoutHeight: 1.4,
        },
        {
          bottleSize: "中",
          pipeSize: "中",
          temp: 10,
          spoutHeight: 0,
        },
        {
          bottleSize: "中",
          pipeSize: "中",
          temp: 20,
          spoutHeight: 2.6,
        },
        {
          bottleSize: "中",
          pipeSize: "细",
          temp: 10,
          spoutHeight: 0,
        },
        {
          bottleSize: "中",
          pipeSize: "细",
          temp: 20,
          spoutHeight: 4.6,
        },
      ],
      options: [
        {
          label: "当瓶子一定，升高相同温度，吸管越粗液柱高度变化越明显",
          value: "A",
          checked: false,
        },
        {
          label: "当瓶子一定，升高相同温度，吸管越细液柱高度变化越明显",
          value: "B",
          checked: false,
        },
        {
          label: "升高相同温度，吸管越粗液柱高度变化越明显",
          value: "C",
          checked: false,
        },
        {
          label: "液柱高度变化与吸管粗细无关",
          value: "D",
          checked: false,
        },
      ],
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
          this.processStore.page6.answer.firstResult = "";
          this.processStore.page6.answer.lastResult = "";
        } else {
          this.processStore.page6.answer.lastResult = "";
        }
      } else {
        this.selectedOption = index;
        if (
          this.store.nowPage.firstEnterInto ||
          this.processStore.page6.answer.firstResult === ""
        ) {
          this.processStore.page6.answer.firstResult = index;
          this.processStore.page6.answer.lastResult = index;
        } else {
          this.processStore.page6.answer.lastResult = index;
        }
      }
      this.$postMessage();
    },
  },
  mounted(){
    if (this.store.recallData) {
      this.selectedOption = this.store.answer.issue5.lastResult;
    }
    // this.$watch(
    //   () =>  this.processStore.page6.answer,
    //   function(val){
    //     const { firstResult, lastResult } = val;
    //     this.processStore.page6.answer.answer.firstResult = firstResult;
    //     this.processStore.page6.answer.answer.lastResult = lastResult;
    //     this.$postMessage();
    //   },
    //   {deep:true}
    // )
  }
};
</script>
<template>
  <div class="page-container">
    <div>
      <p>
        为探究 “吸管粗细对液柱高度变化的影响”，小明通过实验模拟器收集到以下实验数据。
      </p>
      <el-table border style="width: 100%" :data="tableData" :max-height="290">
        <el-table-column prop="bottleSize" label="瓶子大小"></el-table-column>
        <el-table-column prop="pipeSize" label="吸管粗细"></el-table-column>
        <el-table-column prop="temp" label="温度(℃)"></el-table-column>
        <el-table-column
          prop="spoutHeight"
          label="水柱高度(cm)"
        ></el-table-column>
      </el-table>
      <p>根据实验数据，下列结论正确的是</p>
      <ol>
        <el-radio-group v-model="selectedOption">
          <li
            v-for="option in options"
            :key="option.value"
            @click.prevent="selectOption(option.value)"
          >
            <el-radio :label="option.value">{{ "" }}</el-radio>
            {{ option.value }}.
            {{ option.label }}
          </li>
        </el-radio-group>
      </ol>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  p {
    line-height: 2em;
    font-size: 19px;

  }
  ol {
    list-style-position: inside;
    list-style-type: none;
    margin: 20px 0;
    li {
      cursor: pointer;
      padding: 5px 0;
      line-height: 2em;
      font-size: 19px;
    }
  }
  ::v-deep .el-table__header-wrapper table thead tr th {
    background-color: #fafafa;
    border-bottom: 1px solid #e8e8e8;
    border-right: none;
    padding: 10px 5px;
    div {
      text-align: center;
      padding: 0;
    }
  }
  ::v-deep .el-table__body-wrapper table tbody tr td {
    padding: 0;
    height: 33px;
    border-right: none;
    div {
      text-align: center;
      padding: 0;
    }
  }
}
</style>
