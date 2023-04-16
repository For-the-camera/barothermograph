<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  name: "Issue7",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      processStore: useProcessStore(),
      tableData: [],
    };
  },
  methods: {
    deleteRowData(index) {
      if (this.store.nowPage.firstEvent) {
        this.store.answer.issue7.firstResult.splice(index, 1);
        this.store.answer.issue7.lastResult.splice(index, 1);
      } else {
        this.store.answer.issue7.lastResult.splice(index, 1);
      }
      this.store.answer.issue7.lastResult.forEach((item, i) => {
        this.$set(this.tableData, i, item);
      });
      this.tableData.forEach((item, i) => {
        if (i + 1 > this.store.answer.issue7.lastResult.length) {
          this.$set(this.tableData, i, {});
          if (i > 7) {
            this.tableData.splice(i, 1);
          }
        }
      });
      this.store.putData.issue8 = true;
    },
  },
  mounted() {
    if (this.store.answer.issue7.lastResult.length > 0) {
      this.store.answer.issue7.lastResult.forEach((item, index) => {
        this.$set(this.tableData, index, item);
      });
    }
    this.$watch("store.putData.issue7", function (val) {
      if (val) {
        this.store.answer.issue7.lastResult.forEach((item, index) => {
          this.$set(this.tableData, index, item);
        });
        this.store.putData.issue7 = false;
      }
    });
    this.$watch(
      () => this.store.answer.issue7,
      function (val) {
        const { firstResult, lastResult } = val;
        this.processStore.page9.answer.firstResult = JSON.parse(
          JSON.stringify(firstResult)
        );
        this.processStore.page9.answer.lastResult = JSON.parse(
          JSON.stringify(lastResult)
        );
      },
      {deep: true}
    );
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question-stem">
      <p>你的猜想是：{{ store.answer.issue6.lastResult.guess }}</p>
      <p>请通过实验模拟器收集数据验证你的猜想，并将数据记录在以下表格</p>
    </div>
    <div class="data-table">
      <el-table
        border
        style="width: 100%; height: 340px"
        :data="tableData"
        :max-height="340"
      >
        <el-table-column prop="bottleSize" label="瓶子大小"></el-table-column>
        <el-table-column prop="pipeSize" label="吸管大小"></el-table-column>
        <el-table-column prop="temp" label="温度(℃)"></el-table-column>
        <el-table-column
          prop="spoutHeight"
          label="水柱高度(cm)"
        ></el-table-column>
        <el-table-column prop="action" label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="deleteRowData(scope.$index)"
              v-if="scope.row.bottleSize"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  .question-stem {
    margin-bottom: 30px;
    p {
      margin: 20px 0;
    }
  }
  ::v-deep .el-table tr {
    height: 25px;
  }

  .data-table {
    width: 550px;
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
