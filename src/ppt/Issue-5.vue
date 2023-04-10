<script>
import { usePPTStore } from "../stores/ppt";

export default {
  name: "Issue5",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      selectedOption:"",
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
          label: "吸管越粗，液柱变化越明显",
          value: "A",
          checked: false,
        },
        {
          label: "吸管越细，液柱变化越明显",
          value: "B",
          checked: false,
        },
        {
          label: "吸管越细，液柱变化越不明显",
          value: "C",
          checked: false,
        },
        {
          label: "液柱变化与吸管粗细无关",
          value: "D",
          checked: false,
        },
      ],
    };
  },
  methods: {
    selectOption: function (index) {
      if (this.selectedOption === index && this.selectedOption) {
        this.selectedOption = null;
        this.store.answer.issue5 = "";
      } else {
        this.selectedOption = index;

        this.store.answer.issue5 = index;
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div>
      <p>
        为探究
        “吸管的粗细是否对液柱变化明显程度产生影响”，小红收集到一下实验数据。
      </p>
      <p>
        根据实验数据，你认为以下结论正确的是
        <span style="padding-right: 40px;">（</span>
        <span>{{ selectedOption }}</span>
        <span style="padding-left: 40px;">）</span>
      </p>
      <ol>
        <el-radio-group v-model="selectedOption">
          <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option.value)"
          >
            <el-radio :label="option.value">{{ "" }}</el-radio>
            {{ option.value }}.
            {{ option.label }}
            
          </li>
        </el-radio-group>
      </ol>
    </div>
    <el-table border style="width: 100%" :data="tableData" :max-height="290">
      <el-table-column prop="bottleSize" label="瓶子大小"></el-table-column>
      <el-table-column prop="pipeSize" label="吸管大小"></el-table-column>
      <el-table-column prop="temp" label="温度"></el-table-column>
      <el-table-column prop="spoutHeight" label="水柱高度"></el-table-column>
      <el-table-column label="操作"> </el-table-column>
    </el-table>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  padding: 10px;
  p {
    margin: 16px 0;
    line-height: 2;
  }
  ol {
    list-style-position: inside;
    list-style-type: none;
    margin: 40px 0;
    li {
      cursor: pointer;
      padding: 10px 0;
      font-size: 18px;
      
    }
  }
  ::v-deep .el-table tr {
    height: 25px;
  }
  ::v-deep .el-table .el-table__cell {
    padding: 0;
  }
}
</style>
