import Test1 from "../src/ppt/test1.vue";
import Test2 from "../src/ppt/test2.vue";
import Preface from "../src/ppt/Preface.vue";
import Issue1 from "../src/ppt/Issue-1.vue";
import Issue2 from "../src/ppt/Issue-2.vue";
import Issue3 from "../src/ppt/Issue-3.vue";
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
    left: import("../src/ppt/Thermometer.vue"),
    right: import("../src/ppt/Issue-4.vue"),
  }
];
