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
  }
};
</script>
<template>
  <div class="container">
    <p>
      小明、小刚和小红在一本科普书籍中看到有“自制温度计”的小活动，于是他们三人组成了一个兴趣小组，找来了一些简易材料（玻璃瓶、吸管、红墨水等），制作了一支如右图所示的简易温度计。他们在玻璃瓶里装满水，然后给玻璃瓶盖上盖子，从瓶盖中央插入一根吸管并保持瓶口的密封性，吸管上均匀地标上刻度，吸管内液柱的变化即可显示外界温度变化。
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
    line-height: 2;
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
