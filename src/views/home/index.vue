<template>
  <div class="home-page">
    <van-button type="primary">主要按钮</van-button>
    <div class="test">测试文字</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  setup() {
    const url = import.meta.env.VITE_BASE_URL;
    console.log(url)
  },
});
</script>

<style lang="scss" scoped>
.home-page {
  .test {
    color:$color;
    @include text-center;
  }
}
</style>