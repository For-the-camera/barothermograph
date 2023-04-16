<script>
import { usePPTStore } from "../stores/ppt";
import { useProcessStore } from "../stores/process";

export default {
  props: {
    config: {
      type: Array,
      required: true,
    },
  },
  data() {
    const processStore = useProcessStore();
    return {
      renderList: this.transformData(this.config),
      store: usePPTStore(),
      processStore,
      answerMap: {
        1: null,
        2: "issue1",
        3: "issue2",
        4: "issue3",
        5: "issue4",
        6: "issue5",
        7: "issueExtra1",
        8: "issue6",
        9: "issue7",
        10: "issue8",
        11: "issue9",
      },
    };
  },
  methods: {
    go() {
      if (this.store.nowPage.index !== this.renderList.length) {
        const index = this.store.nowPage.index - 1;
        const now = this.renderList[index];
        now.state = "finish";
        this.$set(this.renderList, index, now);
        const next = this.renderList[index + 1];
        next.state = "process";
        this.$set(this.renderList, index + 1, next);
        // 记录当前页面的离开时间
        const leaveTime = Date.now();
        this.store.nowPage.leave = leaveTime;
        // 将首次进入标志设置为 false
        if (this.store.nowPage.firstEnterInto) {
          this.store.nowPage.firstEnterInto = false;
        }
        // if (
        //   index + 1 !== 1 &&
        //   this.store.answer[this.answerMap[index + 1]].lastResult !== "" &&
        //   this.store.nowPage.firstEvent !== 0
        // ) {
        //   const processResult = Object.assign(
        //     {},
        //     this.store.answer[this.answerMap[index + 1]].lastResult
        //   );
        //   this.store.answer[this.answerMap[index + 1]].processAnswer.push(
        //     processResult
        //   );
        // }
        this.recordProcessData(this.store.nowPage);
        this.store.nowPage.firstEvent = 0;
        // ----------- 渲染下一页 ---------------
        this.store.nowPage = this.renderList[index + 1];
        // 记录新页面的进入时间
        const enterTime = Date.now();
        this.store.nowPage.enterInto = enterTime;
      }
    },
    back() {
      const index = this.store.nowPage.index - 1;
      if (index !== 0) {
        const now = this.renderList[index];
        now.state = "wait";
        this.$set(this.renderList, index, now);
        const later = this.renderList[index - 1];
        later.state = "process";
        this.$set(this.renderList, index - 1, later);
        const leaveTime = Date.now();
        this.store.nowPage.leave = leaveTime;
        // if (
        //   index + 1 !== 1 &&
        //   this.store.answer[this.answerMap[index + 1]].lastResult !== "" &&
        //   this.store.nowPage.firstEvent !== 0
        // ) {
        //   const processResult = Object.assign(
        //     {},
        //     this.store.answer[this.answerMap[index + 1]].lastResult
        //   );
        //   this.store.answer[this.answerMap[index + 1]].processAnswer.push(
        //     processResult
        //   );
        // }
        this.recordProcessData(this.store.nowPage);
        this.store.nowPage.firstEvent = 0;
        // ----------- 渲染上一页 ---------------
        this.store.nowPage = this.renderList[index - 1];
        const enterTime = Date.now();
        this.store.nowPage.enterInto = enterTime;
      }
    },
    transformData: (configList) => {
      return Array.from(configList, (config, index) => {
        if (index === 0) {
          config.state = "process";
          return config;
        } else {
          config.state = "wait";
        }
        return config;
      });
    },
    recordProcessData(page) {
      const { enterInto, leave, index, firstEvent } = page;
      const { totalTime, responseTime } = this.processStore[`page${index}`];
      const answer = Object.assign(
        {},
        this.processStore[`page${index}`].answer
      );
      const { firstResult, lastResult, processAnswer } = answer;
      if (index !== 1) {
        processAnswer.push(lastResult);
      }
      this.processStore[`page${index}`] = {
        totalTime:
          totalTime === 0 ? leave - enterInto : totalTime + leave - enterInto,
        responseTime:
          firstEvent === 0
            ? responseTime === 0
              ? 0
              : responseTime
            : responseTime === 0
            ? leave - firstEvent
            : responseTime + leave - firstEvent,
        answer:
          index === 1
            ? {}
            : {
                firstResult,
                lastResult,
                processAnswer,
              },
      };
    },
  },
  mounted() {
    this.store.nowPage = this.renderList[0];
  },
};
</script>
<template>
  <nav class="ppt-step" style="border-bottom: 1px solid #f2f2f2">
    <div
      class="item"
      style="padding-left: 0"
      v-for="(item, index) in renderList"
      :key="item.index"
    >
      <div :class="{ step: true, is_process: item.state == 'process' }">
        <div class="step-index" v-if="item.state == 'process'">
          {{ item.index }}
        </div>
        <div class="step-index-wait" v-if="item.state == 'wait'">
          {{ item.index }}
        </div>
        <div class="step-icon-finsih" v-if="item.state == 'finish'">
          <i class="el-icon-check"></i>
        </div>
        <div
          :class="{
            'step-title': true,
            is_finish_text: item.state === 'finish',
            is_wait_text: item.state === 'wait',
          }"
        >
          {{ item.title }}
        </div>
      </div>
      <div class="arrow" v-if="renderList.length !== item.index">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
$theme-color: #1890ff;
$indicator-color: #1890ff;
$finish-text-color: #8b8a87;
$wait-color: #bbb7ad;
.ppt-step {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 10px;
  .item {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 10%;
    .step {
      display: flex;
      align-items: center;
      padding: 20px 0px 13px 0px;
      .step-title {
        font-size: 14px;
      }
      .step-index {
        width: 23px;
        height: 23px;
        background-color: $theme-color;
        color: white;
        border-radius: 50%;
        margin-right: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .step-icon-finsih {
        width: 23px;
        height: 23px;
        background-color: none;
        color: $theme-color;
        border: 1px solid $theme-color;
        border-color: $theme-color;
        border-radius: 50%;
        margin-right: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .step-index-wait {
        width: 23px;
        height: 23px;
        background-color: none;
        color: $wait-color;
        border: 1px solid $wait-color;
        border-radius: 50%;
        margin-right: 9px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .arrow {
      font-size: 24px;
      color: #bbb7ad;
    }
  }
  .item:last-child {
    justify-content: start;
  }
  .is_process {
    border-bottom: 2px solid $indicator-color;
  }
  .is_finish_text {
    color: $finish-text-color;
  }
  .is_wait_text {
    color: $wait-color;
  }
}
</style>
