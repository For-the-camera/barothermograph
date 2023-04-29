<script>
import Index from "./views/Index.vue";
import { usePPTStore } from "./stores/ppt";
import { useProcessStore } from "./stores/process";
export default {
  components: { Index },
  data() {
    return {
      pptStore: usePPTStore(),
      processStore: useProcessStore(),
      lastPageIndex: 0,
      pageMap: {
        page2: "issue1",
        page3: "issue2",
        page4: "issue3",
        page5: "issue4",
        page6: "issue5",
        page7: "issueExtra1",
        page8: "issue6",
        page9: "issue7",
        page10: "issue8",
        page11: "issue9",
      },
    };
  },
  methods: {
    recallData() {
      const urlParams = new URLSearchParams(window.location.search);
      const taskAnswer = urlParams.get("taskAnswer");
      const result = JSON.parse(decodeURIComponent(taskAnswer));
      const data = result.data;
      if (result.isAnswered) {
        Object.keys(data).forEach((key) => {
          this.processStore[key] = data[key];
          if (key in this.pageMap) {
            this.pptStore.answer[this.pageMap[key]] = data[key].answer;
          }
        });
        this.pptStore.recallData = true;
      } else {
        console.log("===========");
      }
    },
  },
  mounted() {
    // window.addEventListener("message", (e) => {
    //   console.log(e.data);
    // });
    this.recallData();
    this.$watch(
      () => this.processStore,
      (val) => {
        
      },
      { deep: true }
    );
  },
};
</script>

<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<style scoped></style>
