<template>
  <div class="top-box">
    <div class="theme-wrap">
      <span class="mr-10">夜间模式:</span>
      <el-switch v-model="isDarkTheme" @change="changeTheme"> </el-switch>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";

export default {
  name: "Side",
  setup() {
    const store = useStore();
    const isDarkTheme = ref(true);
    const changeTheme = () => {
      const theme = isDarkTheme.value ? "dark" : "light";
      store.commit("setTheme", theme);
      console.log(store.state.home.theme);
    };
    return {
      isDarkTheme,
      changeTheme
    };
  }
};
</script>

<style lang="less" scoped>
.top-box {
  background-color: #1f2025;
  .theme-wrap {
    float: right;
  }
  .mr-10 {
    margin-right: 10px;
  }
}
</style>
