import { ref } from "@vue/reactivity";
import { watch } from "vue";
import { useStore } from "vuex";

const useTheme = () => {
  const store = useStore();
  const theme = ref(store.state.home.theme);
  watch(
    () => store.state.home.theme,
    newVal => {
      theme.value = newVal;
    }
  );
  return {
    theme
  }
}

export default useTheme
