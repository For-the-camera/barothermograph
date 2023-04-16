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
    };
  },
  mounted() {
    window.addEventListener("message", (e) => {
      console.log(e.data);
    });
    this.$watch(
      () => this.processStore,
      (val) => {
        // console.log("触发");
        parent.postMessage(
          {
            data: val.$state,
            postTime: Date.now(),
            cst: new Date(),
            checkedAnswer: this.pptStore.checkedAnswer,

          },
          "*"
        );
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
