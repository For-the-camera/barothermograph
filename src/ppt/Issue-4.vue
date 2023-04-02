<script>
import { usePPTStore } from "../stores/ppt";
export default {
  name: "Issue4",
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
      this.store.answer.issue4.splice(index, 1);
      this.store.answer.issue4.forEach((item, i) => {
        this.$set(this.tableData, i, item);
      });
      this.tableData.forEach((item, i) => {
        if (i + 1 > this.store.answer.issue4.length) {
          this.$set(this.tableData, i, {});
          if (i > 7) {
            this.tableData.splice(i, 1);
          }
        }
      });
    },
  },
  mounted() {
    if (this.store.answer.issue4.length > 0) {
      this.store.answer.issue4.forEach((item, index) => {
        this.$set(this.tableData, index, item);
      });
    }
    this.$watch("store.putData.issue4", function (val) {
      if (val) {
        this.store.answer.issue4.forEach((item, index) => {
          this.$set(this.tableData, index, item);
        });
        this.store.putData.issue4 = false;
      }
    });
  },
};
</script>
<template>
  <div class="page-container">
    <div>
      <p>
        左图是一个实验模拟器，如果你想了解如何使用该实验模拟器，请尝试以下操作：
      </p>
      <ol>
        <li>选择不同大小的瓶子</li>
        <li>选择不同粗细的吸管</li>
        <li>
          调节温度按钮观察液柱变化，模拟器自动显示管内液面高度；<br>
          （当温度是10℃时，管内液面恰好与瓶口向平）
        </li>
        <li>点击记录按钮，可将数据记录在以下表格中</li>
      </ol>
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
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  ol {
    list-style-position: inside;
    li {
      padding: 10px 0;
      
    }
  }
  p {
    line-height: 2;
    
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
