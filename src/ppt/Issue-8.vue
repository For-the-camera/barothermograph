<script>
import { usePPTStore } from "../stores/ppt";

export default {
  name: "Issue8",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      conclusion: "",
      tableData: [],
    };
  },
  mounted() {
    this.store.answer.issue7.lastResult.forEach((item, index) => {
      this.$set(this.tableData, index, item);
    });
    this.$watch(
      "store.putData.issue8",
      function (val) {
        if (val) {
          const length = this.store.answer.issue7.lastResult.length;

          this.store.answer.issue7.lastResult.forEach((item, index) => {
            this.$set(this.tableData, index, item);
          });
          if (length < this.tableData.length) {
            this.tableData.pop();
          }
          this.store.putData.issue8 = false;
        }
      },
      { immediate: true }
    );
  },
  methods: {
    startResponse() {
      if (this.store.nowPage.firstEvent === 0) {
        this.store.nowPage.firstEvent = Date.now();
      }
    },
    postAnswer() {
      if (
        this.store.nowPage.firstEnterInto ||
        this.store.answer.issue8.firstResult === ""
      ) {
        this.store.answer.issue8.firstResult = this.conclusion;
        this.store.answer.issue8.lastResult = this.conclusion;
      } else {
        this.store.answer.issue8.lastResult = this.conclusion;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <p>根据你收集到的实验数据，你能得到什么样的结论，请填写在以下空白处</p>
    <el-input
      type="textarea"
      :rows="6"
      v-model="conclusion"
      @blur="postAnswer"
      @focus="startResponse"
    ></el-input>
    <div class="data-table">
      <el-table border style="width: 100%" :data="tableData" :max-height="290">
        <el-table-column prop="bottleSize" label="瓶子大小"></el-table-column>
        <el-table-column prop="pipeSize" label="吸管大小"></el-table-column>
        <el-table-column prop="temp" label="温度(℃)"></el-table-column>
        <el-table-column
          prop="spoutHeight"
          label="水柱高度(cm)"
        ></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  p {
    line-height: 2;
    margin: 20px 0;
  }
  ::v-deep .el-table tr {
    height: 25px;
  }

  .data-table {
    width: 550px;
    margin: 30px 0 0 0;
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
}
</style>
