<script>
import Index from "./views/Index.vue";
import { usePPTStore } from "./stores/ppt";
import { useProcessStore } from "./stores/process";
export default {
  components: { Index },
  data() {
    return {
      pptStore: usePPTStore(),
      // processStore: useProcessStore(),
      lastPageIndex: 0,
    };
  },
  // mounted() {
  //   this.$watch(
  //     () => this.pptStore.nowPage,
  //     (newPage, oldPage) => {
  //       // const { enterInto, leave, index, firstEvent } = oldPage;
  //       // const { totalTime, responseTime } = this.processStore[`page${index}`];
  //       // this.processStore[`page${index}`] = {
  //       //   totalTime:
  //       //     totalTime === 0 ? leave - enterInto : totalTime + leave - enterInto,
  //       //   responseTime:
  //       //     firstEvent === 0
  //       //       ? responseTime === 0
  //       //         ? 0
  //       //         : responseTime + leave - firstEvent
  //       //       : responseTime === 0
  //       //       ? leave - firstEvent
  //       //       : responseTime + leave - firstEvent,
  //       // };
        
  //     }
  //   );
  // },
};
</script>

<template>
  <div id="app">
    <Index></Index>
  </div>
</template>

<style scoped></style>
