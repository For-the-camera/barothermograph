<script>
import { usePPTStore } from "../stores/ppt";

export default {
  name: "Issue7",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      tableData: [{}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  methods: {
    deleteRowData(index) {
      this.store.answer.issue7.splice(index, 1);
      this.store.answer.issue7.forEach((item, i) => {
        this.$set(this.tableData, i, item);
      });
      this.tableData.forEach((_item, i) => {
        if (i + 1 > this.store.answer.issue7.length) {
          this.$set(this.tableData, i, {});
          if (i > 7) {
            this.tableData.splice(i, 1);
          }
        }
      });
    },
  },
  mounted() {
    if (this.store.answer.issue7.length > 0) {
      this.store.answer.issue7.forEach((item, index) => {
        this.$set(this.tableData, index, item);
      });
    }
    this.$watch("store.putData.issue7", function (val) {
      if (val) {
        this.store.answer.issue7.forEach((item, index) => {
          this.$set(this.tableData, index, item);
        });
        this.store.putData.issue7 = false;
      }
    });
  },
};
</script>
<template>
  <div class="page-container">
    <div class="question-stem">
      <p>为了验证你的{{ store.answer.issue6.guess }}</p>
      <p>请通过实验模拟器收集数据验证你的猜想，并将数据记录在以下表格</p>
    </div>
    <div class="data-table">
      <el-table border style="width: 100%" :data="tableData" :max-height="290">
        <el-table-column prop="bottleSize" label="瓶子大小"></el-table-column>
        <el-table-column prop="pipeSize" label="吸管大小"></el-table-column>
        <el-table-column prop="temp" label="温度"></el-table-column>
        <el-table-column prop="spoutHeight" label="水柱高度"></el-table-column>
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
      font-weight: bold;
      margin: 20px 0;
    }
  }
  ::v-deep .el-table tr {
    height: 25px;
  }

  .data-table {
    width: 530px;
    ::v-deep .el-table .el-table__cell {
      padding: 0;
    }
  }
}
</style>
