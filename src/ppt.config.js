
export default [
  {
    index: 1,
    title: "前言1",
    single: true,
    page: import("../src/ppt/Preface.vue"),
  },
  {
    index: 2,
    title: "前言2",
    single: true,
    page: import("../src/ppt/Issue-1.vue"),
  },
  {
    index: 3,
    title: "前言3",
    single: true,
    page: import("../src/ppt/Issue-2.vue"),
  },
  {
    index: 4,
    title: "前言4",
    single: true,
    page: import("../src/ppt/Issue-3.vue"),
  },
  {
    index: 5,
    title: "前言5",
    single: false,
    actionIndex: 'issue4',
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-4.vue"),
  }, {
    index: 6,
    title: "前言6",
    single: false,
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-5.vue"),
  },
  {
    index: 7,
    title: "前言7",
    single: false,
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-6.vue"),
  },
  {
    index: 8,
    title: "前言8",
    single: false,
    actionIndex: "issue7",
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-7.vue"),
  },
  {
    index: 9,
    title: "前言9",
    single: false,
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-8.vue"),
  },
  {
    index: 10,
    title: "前言10",
    single: false,
    left: import("../src/ppt/Chart.vue"),
    right: import("../src/ppt/Issue-9.vue"),
  }
];
