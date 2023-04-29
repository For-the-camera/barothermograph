import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/main.css";
import { useProcessStore } from "./stores/process";
import { usePPTStore } from "./stores/ppt";

Vue.use(PiniaVuePlugin);
Vue.use(ElementUI);

new Vue({
  pinia: createPinia(),
  render: (h) => h(App),
}).$mount("#app");

Vue.prototype.$postMessage = function () {
  console.log("post");
  parent.postMessage(
    {
      data: useProcessStore().$state,
      postTime: Date.now(),
      cst: new Date(),
      isAnswered: usePPTStore().checkedAnswer,
    },
    "*"
  );
}