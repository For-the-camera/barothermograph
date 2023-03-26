<script>
export default {
  name: "Test1",
  props: {},
  data() {
    return {
      baseSrc: "src/assets/images/",
      bottles: [
        {
          imageName: "bottle-100.png",
          size: 100,
          label: "100ml（小）",
          checked: false,
        },
        {
          imageName: "bottle-200.png",
          size: 200,
          label: "200ml（中）",
          checked: false,
        },
        {
          imageName: "bottle-300.png",
          size: 300,
          label: "300ml（大）",
          checked: false,
        },
      ],
      pipes: [
        {
          imageName: "pipe-3.png",
          size: 3,
          label: "3ml（细）",
          checked: false,
        },
        {
          imageName: "pipe-4.png",
          size: 4,
          label: "4ml（中）",
          checked: false,
        },
        {
          imageName: "pipe-5.png",
          size: 5,
          label: "5ml（粗）",
          checked: false,
        },
      ],
      temp:10,
    };
  },
  methods: {},
};
</script>
<template>
  <div class="page-container">
    <div class="material-list">
      <div
        class="material-list-item"
        v-for="bottle in bottles"
        :key="bottle.size"
      >
        <div>
          <img :src="baseSrc + bottle.imageName" alt="" />
        </div>
        <p>{{ bottle.label }}</p>
        <div class="radio"></div>
      </div>
      <div class="material-list-item" v-for="pipe in pipes" :key="pipe.size">
        <div>
          <img :src="baseSrc + pipe.imageName" alt="" />
        </div>
        <p>{{ pipe.label }}</p>
        <div class="radio"></div>
      </div>
    </div>
    <div class="preview">
      <div class="thermometer">
        <div>
          <img src="../assets/images/100-3.png" alt="" />
        </div>
      </div>
      <div class="ctrl">
        <p>温度调节</p>
        <div class="marks">
          <div class="line"></div>
        </div>
        <el-slider v-model="temp" :min="10" :max="30"></el-slider>
        <el-button>记录</el-button>
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

    .thermometer {
      background-color: #f0f7ec;
      margin: 30px 0 0 30px;

      img {
        height: 450px;
        width: auto;
      }
    }
    .ctrl {
      width: 100%;
      .marks{
        width: 100%;
        .line{
          height: 1px;
          background-color: #000;
        }
      }
      ::v-deep .el-slider__runway{
        height: 15px;
        border-radius: none;
        background-image: linear-gradient(to right, #1dafef, #7896fd, #d268dc, #ff198b, #fe151c);
      }
      ::v-deep .el-slider__button-wrapper{
        top:-30px
      }
      ::v-deep .el-slider__button{
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
      ::v-deep .el-slider__bar{
        background-color: transparent;
      }
    }
  }
}
</style>
