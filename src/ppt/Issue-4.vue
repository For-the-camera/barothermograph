<script>
import { usePPTStore } from "../stores/ppt";
export default {
  name: "Issue4",
  props: {},

  data() {
    const store = usePPTStore();
    return {
      store,
      tableData: [],
    };
  },
  methods: {
    deleteRowData(index) {
      if (this.store.nowPage.firstEvent) {
        this.store.answer.issue4.firstResult.splice(index, 1);
        this.store.answer.issue4.lastResult.splice(index, 1);
      } else {
        this.store.answer.issue4.lastResult.splice(index, 1);
      }
      this.store.answer.issue4.lastResult.forEach((item, i) => {
        this.$set(this.tableData, i, item);
      });
      this.tableData.forEach((item, i) => {
        if (i + 1 > this.store.answer.issue4.lastResult.length) {
          this.$set(this.tableData, i, {});
          if (i > 7) {
            this.tableData.splice(i, 1);
          }
        }
      });
    },
  },
  mounted() {
    if (this.store.answer.issue4.lastResult.length > 0) {
      this.store.answer.issue4.lastResult.forEach((item, index) => {
        this.$set(this.tableData, index, item);
      });
    }
    this.$watch("store.putData.issue4", function (val) {
      if (val) {
        this.store.answer.issue4.lastResult.forEach((item, index) => {
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
        <li>
          <span>点击第一行的</span>
          <div class="inline-radio"></div>
          <span> 选择不同大小的瓶子 </span>
        </li>
        <li>
          <span>点击第二行的</span>
          <div class="inline-radio"></div>
          <span>选择不同粗细的吸管</span>
        </li>
        <li>
          <span>调节温度按钮</span>
          <div class="inline-triangle">
            <div class="inline-triangle-inner"></div>
          </div>
          <span>观察液柱变化，模拟器自动显示管内液面高度；</span>
        </li>
        <li>
          <span style="padding-right: 5px">点击</span>
          <span style="background-color: #67c23a; padding: 0 5px; color: white"
            >记录</span
          >
          <span style="padding-left: 5px">按钮，可将数据记录在以下表格中</span>
        </li>
      </ol>
    </div>
    <div class="data-table">
      <el-table border style="width: 100%;height: 340px;" :data="tableData" :max-height="340">
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
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  ol {
    list-style-position: inside;
    li {
      padding: 10px 0;
      .inline-radio {
        background-color: white;
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin: 0 10px;
        border: 1px solid #1890ff;
      }
      .inline-triangle {
        display: inline-block;
        margin: 0 20px;
        position: relative;
        height: 1rem;
      }
      .inline-triangle-inner {
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent;
        border-bottom-color: #000;
        border-width: 25px 10px;
        border-radius: 0;
        background-color: transparent;
        margin-bottom: 1px;
        position: absolute;
        top: -30px;
        left: -10px;
      }
    }
  }
  p {
    line-height: 2;
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
