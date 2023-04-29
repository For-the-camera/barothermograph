
export default [
  {
    index: 1,
    title: "前言",
    single: true,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    page: import("../src/ppt/Preface.vue"),
  },
  {
    index: 2,
    title: "问题1",
    single: true,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    page: import("../src/ppt/Issue-1.vue"),
  },
  {
    index: 3,
    title: "问题2",
    single: true,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    page: import("../src/ppt/Issue-2.vue"),
  },
  {
    index: 4,
    title: "问题3.1",
    single: true,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    page: import("../src/ppt/Issue-3.vue"),
  },
  {
    index: 5,
    title: "问题3.2",
    single: false,
    actionIndex: 'page5',
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-4.vue"),
  }, {
    index: 6,
    title: "问题3.3",
    single: false,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-5.vue"),
  },
  {
    index: 7,
    title: "问题3.4",
    single:false,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    left: import("../src/ppt/Chart-2.vue"),
    right: import("../src/ppt/IssueExtra-1.vue"),
  },
  {
    index: 8,
    title: "问题4.1",
    single: false,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    left: import("../src/ppt/Chart-1.vue"),
    right: import("../src/ppt/Issue-6.vue"),
  },
  {
    index: 9,
    title: "问题4.2",
    single: false,
    actionIndex: "page9",
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-7.vue"),
  },
  {
    index: 10,
    title: "问题4.3",
    single: false,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-8.vue"),
  },
  {
    index: 11,
    title: "问题5",
    single: false,
    enterInto:0,
    leave:0,
    firstEvent:0,
    firstEnterInto:true,
    left: import("../src/ppt/Chart.vue"),
    right: import("../src/ppt/Issue-9.vue"),
  },
  {
    index: 12,
    title: "完成",
    left: import("../src/ppt/Chart-3.vue"),
    right: import("../src/ppt/End.vue")
  }
];
