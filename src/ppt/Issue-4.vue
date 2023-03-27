<script>
export default {
  name: "Issue4",
  props: {},
  data() {
    return {
      tableData:[
        {
          bottleSize: "中",
          pipeSize:"粗",
          temp:10,
          spoutHeight: 0
        },
        {
          bottleSize: "中",
          pipeSize:"粗",
          temp:20,
          spoutHeight: 1.5
        },
        {
          bottleSize: "中",
          pipeSize:"中",
          temp:10,
          spoutHeight: 0
        },
        {
          bottleSize: "中",
          pipeSize:"中",
          temp:20,
          spoutHeight: 2.5
        },
        {
          bottleSize: "中",
          pipeSize:"细",
          temp:10,
          spoutHeight: 0
        },
        {
          bottleSize: "中",
          pipeSize:"细",
          temp:20,
          spoutHeight: 5.8
        },
  
      ]
    };
  },
  methods: {},
};
</script>
<template>
  <div class="page-container">
    <div>
      <p>左图是一个实验模拟器,</p>
      <ul>
        <li>选择不同大小的瓶子</li>
        <li>选择不同粗细的管子</li>
        <li>调节温度按钮观察液柱高度变化</li>
        <li>点击记录按钮，可将数据记录在以下表格中</li>
      </ul>
    </div>
    <div>
      <el-table border style="width:100%" :data="tableData">
        <el-table-column prop="bottleSize" label="瓶子大小"></el-table-column>
        <el-table-column prop="pipeSize" label="吸管大小"></el-table-column>
        <el-table-column prop="temp" label="温度"></el-table-column>
        <el-table-column prop="spoutHeight" label="水柱高度"></el-table-column>
        <el-table-column prop="action" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped></style>
