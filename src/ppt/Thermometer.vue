<script>
import { usePPTStore } from "../stores/ppt";
import bottle100 from "../assets/images/bottle-100.png";
import bottle200 from "../assets/images/bottle-200.png";
import bottle300 from "../assets/images/bottle-300.png";
import pipe3 from "../assets/images/pipe-3.png";
import pipe4 from "../assets/images/pipe-4.png";
import pipe5 from "../assets/images/pipe-5.png";
import T1 from "../assets/images/100-3.png";
import T2 from "../assets/images/100-4.png";
import T3 from "../assets/images/100-5.png";
import T4 from "../assets/images/200-3.png";
import T5 from "../assets/images/200-4.png";
import T6 from "../assets/images/200-5.png";
import T7 from "../assets/images/300-3.png";
import T8 from "../assets/images/300-4.png";
import T9 from "../assets/images/300-5.png";
export default {
  name: "Thermometer",
  props: {},
  data() {
    const store = usePPTStore();
    return {
      store,
      bottles: [
        {
          imageName: bottle100,
          size: 100,
          label: "小",
          value: "小",
          checked: false,
        },
        {
          imageName: bottle200,
          size: 200,
          label: "中",
          value: "中",
          checked: false,
        },
        {
          imageName: bottle300,
          size: 300,
          label: "大",
          value: "大",
          checked: false,
        },
      ],
      pipes: [
        {
          imageName: pipe3,
          size: 3,
          label: "细",
          value: "细",
          checked: false,
          width: 10,
        },
        {
          imageName: pipe4,
          size: 4,
          label: "中",
          value: "中",
          checked: false,
          width: 13,
        },
        {
          imageName: pipe5,
          size: 5,
          label: "粗",
          value: "粗",
          checked: false,
          width: 19,
        },
      ],
      thermometer: {
        "100-3": T1,
        "100-4": T2,
        "100-5": T3,
        "200-3": T4,
        "200-4": T5,
        "200-5": T6,
        "300-3": T7,
        "300-4": T8,
        "300-5": T9,
      },
      temp: 10,
      // 当前选中的瓶子和吸管规格
      currentBottle: null,
      currentPipe: null,
      currentPipeWidth: 0,
      // 当前选中的瓶子、吸管索引
      currentBottleIndex: null,
      currentPipeIndex: null,
      coefficientList: {
        "100-3": 0.44,
        "100-4": 0.25,
        "100-5": 0.13,
        "200-3": 0.61,
        "200-4": 0.34,
        "200-5": 0.18,
        "300-3": 0.78,
        "300-4": 0.44,
        "300-5": 0.23,
      },
      // 临界值
      maxSpoutHeight: 0.0021156706755459664,
    };
  },
  mounted() {
    this.checkedBottle(100, 0);
    this.checkedPipe(3, 10, 0);
    this.$watch(
      () => this.store.nowPage,
      () => {
        if (this.currentBottle !== 100) {
          this.checkedBottle(100, 0);
        }
        if (this.currentPipe !== 3) {
          this.checkedPipe(3, 10, 0);
        }
        this.temp = 10;
      },
      { deep: true }
    );
  },
  computed: {
    // 计算系数 C
    coefficient: function () {
      if (this.currentBottle && this.currentPipe) {
        return this.coefficientList[
          `${this.currentBottle}-${this.currentPipe}`
        ];
      }
      return 0;
    },
    // 计算刻度值
    spoutHeight: function () {
      const T = this.temp; // 温度
      const C = this.coefficient; // 系数
      // 中间结果
      const intermediateRes = {
        a: 0.067 * T + 1000,
        b: -(0.009 * Math.pow(T, 2)),
        c: 9 * Math.pow(10, -5) * Math.pow(T, 3),
        d: -(8.9 * Math.pow(10, -7) * Math.pow(T, 4)),
        e: 4.44 * Math.pow(10, -9) * Math.pow(T, 5),
        f: -(1000 / 999.94),
      };
      const { a, b, c, d, e, f } = intermediateRes;
      const sum = a + b + c + d + e;
      const g = 1000 / sum + f;
      const result = C * g; // 结果
      const H = (result / this.maxSpoutHeight) * 10;
      if (T === 10) {
        return 0;
      }
      return H > 10 ? 10 : H.toFixed(1);
    },
    // 刻度值转换为水柱高度
    spoutHeightToPx: function () {
      if (this.spoutHeight < 10) {
        return (this.spoutHeight / 10) * 247;
      } else {
        return 248;
      }
    },
  },
  methods: {
    checkedBottle: function (size, index) {
      if (this.currentBottle === size && this.currentBottle) {
        this.$refs[
          `ref-bottle-${this.currentBottle}`
        ][0].style.backgroundColor = "#fff";
        this.currentBottle = null;
        this.currentBottleIndex = null;
      } else {
        if (this.currentBottle) {
          this.$refs[
            `ref-bottle-${this.currentBottle}`
          ][0].style.backgroundColor = "#fff";
        }
        this.currentBottle = size;
        this.currentBottleIndex = index;
        this.$refs[`ref-bottle-${size}`][0].style.backgroundColor = "#000";
      }
    },
    checkedPipe: function (size, width, index) {
      if (this.currentPipe === size && this.currentPipe) {
        this.$refs[`ref-pipe-${this.currentPipe}`][0].style.backgroundColor =
          "#fff";
        this.currentPipeWidth = 0;
        this.currentPipe = null;
        this.currentPipeIndex = null;
      } else {
        if (this.currentPipe) {
          this.$refs[`ref-pipe-${this.currentPipe}`][0].style.backgroundColor =
            "#fff";
        }
        this.currentPipe = size;
        this.currentPipeWidth = width;
        this.currentPipeIndex = index;
        this.$refs[`ref-pipe-${size}`][0].style.backgroundColor = "#000";
      }
    },
    postRecord: function () {
      if (this.store.nowPage.firstEvent === 0) {
        this.store.nowPage.firstEvent = Date.now();
      }
      const postSite = this.store.nowPage.actionIndex;
      if (this.currentBottleIndex !== null && this.currentPipeIndex !== null) {
        const data = {
          bottleSize: this.bottles[this.currentBottleIndex].value,
          pipeSize: this.pipes[this.currentPipeIndex].value,
          temp: this.temp,
          spoutHeight: this.spoutHeight,
        };
        if (this.store.nowPage.firstEnterInto) {
          this.store.answer[postSite].firstResult.push(data);
          this.store.answer[postSite].lastResult.push(data);
        } else {
          this.store.answer[postSite].lastResult.push(data);
        }
        this.store.putData[`${postSite}`] = true;
        if (postSite === "issue7") {
          this.store.putData["issue8"] = true;
        }
      }
    },
  },
};
</script>
<template>
  <div class="page-container">
    <div class="material-list">
      <div
        class="material-list-item"
        v-for="(bottle, index) in bottles"
        :key="bottle.size"
        @click="checkedBottle(bottle.size, index)"
      >
        <div>
          <img
            :src="bottle.imageName"
            style="height: auto; width: 100px"
            alt=""
          />
        </div>
        <p>{{ bottle.label }}</p>
        <div class="radio" :ref="`ref-bottle-${bottle.size}`"></div>
      </div>
      <div
        class="material-list-item"
        v-for="(pipe, index) in pipes"
        :key="pipe.size"
        @click="checkedPipe(pipe.size, pipe.width, index)"
      >
        <div>
          <img :src="pipe.imageName" alt="" />
        </div>
        <p>{{ pipe.label }}</p>
        <div
          class="radio"
          style="border-color: #ff174f"
          :ref="`ref-pipe-${pipe.size}`"
        ></div>
      </div>
    </div>
    <div class="preview">
      <div class="overflow-tip">
        <p v-show="spoutHeightToPx === 248">水柱溢出！！！</p>
      </div>
      <div class="thermometer">
        <div class="image">
          <img
            :src="
              currentBottle && currentPipe
                ? thermometer[`${this.currentBottle}-${this.currentPipe}`]
                : ''
            "
            v-show="currentBottle && currentPipe"
            alt=""
          />
        </div>
        <div class="mask" v-show="currentBottle && currentPipe">
          <div class="spout-mask" :style="{ width: currentPipeWidth + 'px' }">
            <div
              class="pointer"
              :style="{ bottom: spoutHeightToPx - 10 + 'px' }"
            >
              <div class="pointer-line"></div>
              <div class="pointer-value">{{ spoutHeight }}</div>
            </div>
            <div
              class="spout"
              :style="{ height: spoutHeightToPx + 'px' }"
            ></div>
          </div>
        </div>
      </div>
      <div class="ctrl">
        <span style="background-color: yellow">温度调节</span>
        <div class="marks">
          <div class="scale">
            <span v-for="i in [10, 15, 20, 25, 30]" :key="i">{{ i }}</span>
          </div>
          <div class="line">
            <div class="point">
              <div v-for="n in 5" :key="n" class="item"></div>
            </div>
          </div>
        </div>
        <el-slider v-model="temp" :min="10" :max="30"></el-slider>
        <el-button
          type="success"
          @click="postRecord"
          :disabled="!store.nowPage.actionIndex"
          >记录</el-button
        >
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
$radio-border-color: #1890ff;
.page-container {
  display: flex;
  gap: 30px;
  .material-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    .material-list-item {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 5px;
      padding: 10px 0;
      cursor: pointer;
      .radio {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        border: 1px solid $radio-border-color;
        background-color: #fff;
      }
    }
  }
  .preview {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .overflow-tip {
      margin-left: 30px;
      height: 1.5rem;
      p {
        margin: 10px 0 0 0;
        text-align: center;
        font-size: 1.3rem;
        color: red;
      }
    }
    .thermometer {
      background-color: #f0f7ec;
      margin: 0 0 0 30px;
      position: relative;
      .image {
        width: 184px;
        height: 450px;
        img {
          height: 100%;
          width: auto;
        }
      }
      .mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 258px;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        .spout-mask {
          height: 96%;
          background-color: transparent;
          position: relative;
          display: flex;
          align-items: flex-end;
          .pointer {
            width: 100px;
            display: flex;
            align-items: center;
            position: absolute;
            bottom: -10px;
            .pointer-line {
              width: 60px;
              height: 1px;
              background-color: red;
            }
            .pointer-value {
              color: red;
            }
          }
          .spout {
            width: 100%;
            background-color: #db5eda;
          }
        }
      }
    }
    .ctrl {
      width: 100%;
      .marks {
        width: 100%;
        .scale {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .line {
          height: 1px;
          background-color: #000;
          position: relative;
        }
        .point {
          display: flex;
          position: absolute;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          top: -3px;
          .item {
            width: 4px;
            height: 4px;
            background-color: #000;
            border-radius: 50%;
          }
          .item:nth-child(3) {
            width: 8px;
            height: 8px;
          }
        }
      }
      ::v-deep .el-slider__runway {
        height: 15px;
        border-radius: none;
        background-image: linear-gradient(
          to right,
          #1dafef,
          #7896fd,
          #d268dc,
          #ff198b,
          #fe151c
        );
      }
      ::v-deep .el-slider__button-wrapper {
        top: -30px;
      }
      ::v-deep .el-slider__button {
        width: 0;
        height: 0;
        border-style: solid;
        border-color: transparent;
        border-bottom-color: #000;
        border-width: 25px 10px;
        border-radius: 0;
        background-color: transparent;
        margin-bottom: 1px;
      }
      ::v-deep .el-slider__bar {
        background-color: transparent;
      }
    }
  }
}
</style>
