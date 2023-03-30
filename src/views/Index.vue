<script>
import NavBar from "../components/NavBar.vue";
import pptConfig from "../ppt.config";
import { usePPTStore } from "../stores/ppt";

export default {
  components: { NavBar },
  props: {},

  data() {
    const store = usePPTStore();
    return {
      pptConfig,
      pptRender: [undefined, undefined, undefined],
      store,
    };
  },
  mounted() {
    const store = usePPTStore();
    let promiseList = [];
    if (store.nowPage.left && store.nowPage.right) {
      promiseList = [store.nowPage.left, store.nowPage.right];
    }
    if (store.nowPage.page) {
      promiseList = [store.nowPage.page];
    }
    Promise.all([...promiseList]).then((valueList) => {
      if (valueList.length === 1) {
        this.pptRender = [undefined, undefined, valueList[0].default];
      } else {
        this.pptRender = [
          valueList[0].default,
          valueList[1].default,
          undefined,
        ];
      }
    });
    this.$watch("store.nowPage.left", function (newVal) {
      if (newVal) {
        newVal.then((value) => {
          this.$set(this.pptRender, 0, value.default);
        });
      }
    });
    this.$watch("store.nowPage.right", function (newVal) {
      if (newVal) {
        newVal.then((value) => {
          this.$set(this.pptRender, 1, value.default);
        });
      }
    });
    this.$watch("store.nowPage.page", function (newVal) {
      if (newVal) {
        newVal.then((value) => {
          this.$set(this.pptRender, 2, value.default);
        });
      }
    });
  },
};
</script>
<template>
  <div class="container">
    <NavBar ref="navBarRef" :config="pptConfig"></NavBar>
    <div class="ppt-content" v-if="!store.nowPage.single">
      <div class="left">
        <keep-alive>
          <component v-bind:is="pptRender[0]"></component>
        </keep-alive>
      </div>
      <div class="right">
        <keep-alive>
          <component v-bind:is="pptRender[1]"></component>
        </keep-alive>
      </div>
    </div>
    <div class="ppt-content" v-else>
      <div class="single">
        <keep-alive>
          <component :is="pptRender[2]" />
        </keep-alive>
      </div>
    </div>
    <div class="ctrl">
      <el-button
        type="primary"
        @click="
          () => {
            this.$refs.navBarRef.back();
          }
        "
        >上一页</el-button
      >
      <el-button
        type="primary"
        @click="
          () => {
            this.$refs.navBarRef.go();
          }
        "
        >下一页</el-button
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
$ppt-border: 5px;
$ppt-padding: 5px;
$ppt-bg-left: #e2f0d9;
$ppt-bg-right: #fff2cc;
$ppt-border-radius: 30px;
$single-padding: 30px;
$ppt-border-basic: .1rem solid #353b48;
.container {
  height: 100%;
  display: flex;
  flex-direction: column;

  .ppt-content {
    flex-grow: 2;
    margin-top: 20px;

    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    .left,.right,.single{
      border: $ppt-border-basic;
    }
    
    .left {
      border-radius: $ppt-border-radius;
      background-color: $ppt-bg-left;
      padding: $ppt-padding;
      margin-right: .5rem;
    }
    .right {
      border-radius: $ppt-border-radius;
      background-color: $ppt-bg-right;
      padding: $ppt-padding;
      margin-left: .5rem;
    }
    .single {
      background-color: $ppt-bg-right;
      border-radius: $ppt-border-radius;
      grid-column: span 2 / span 2;
      padding: $single-padding;
    }
  }
  .ctrl {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
}
</style>
