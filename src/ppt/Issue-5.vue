<script>
export default {
  name: "Issue5",
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
      <p>为探究 “吸管的粗细是否对液柱变化明显程度产生影响”，小红收集到一下实验数据。</p>
      <p>根据实验数据，你认为以下结论正确的是</p>
    </div>
  </div>
</template>
<style scoped></style>