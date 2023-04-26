<script>
import image from "../assets/images/1-1.jpg";
import { usePPTStore } from "../stores/ppt";
export default {
  name: "Preface",
  props: {},
  data() {
    return {
      image,
      store:usePPTStore(),
    };
  },
  methods: {},
  mounted(){
    this.store.nowPage.enterInto = Date.now();
  },
};
</script>
<template>
  <div class="container">
    <p>
      小明根据科普书籍上制作“简易温度计”的活动，利用一些简易材料（玻璃瓶、吸管、红墨水等），制作了一支如右图所示的温度计：在玻璃瓶里装满水并用红墨水染红，然后给玻璃瓶盖上盖子，从瓶盖中央插入一根吸管并保持瓶口的密封性，吸管上均匀地标上刻度，吸管内液柱的变化即可显示外界温度变化。
    </p>
    <div class="image">
      <img :src="image" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  p {
    font-size: 1.25rem;
    line-height: 1.5;
  }
  .image {
    display: flex;
    flex-direction: row-reverse;
    img{
      height: 450px;
      width: auto;
    }
  }
}
</style>
