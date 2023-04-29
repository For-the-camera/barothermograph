<script>
import image from "../assets/images/1-1.jpg";
import { usePPTStore } from "../stores/ppt";
export default {
  name: "Preface",
  props: {},
  data() {
    return {
      image,
      store: usePPTStore(),
    };
  },
  methods: {},
  mounted() {
    this.store.nowPage.enterInto = Date.now();
  },
};
</script>
<template>
  <div class="page-container">
    <div class="image">
      <img :src="image" />
    </div>
    <div>
      <p>
        <strong>前言</strong><br />
        小明参照科普书籍
        “制作简易温度计”的活动方案，利用玻璃瓶、吸管、红墨水等简易材料，制作了一支如右图所示的温度计：在玻璃瓶里装满水并用红墨水染色，然后给玻璃瓶盖上盖子，从瓶盖中央插入一根吸管并保持瓶口处的密封性，吸管上均匀地标上刻度，吸管内液柱高度的变化即可显示外界气温变化。
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 30px;
  p {
    font-size: 22px;
    line-height: 2em;
  }
  .image {
    img {
      height: 550px;
      width: auto;
    }
  }
}
</style>
