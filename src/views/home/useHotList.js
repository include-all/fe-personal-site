import { ref } from "@vue/reactivity";

import { topListApi } from "../../data/api";

const useHotList = () => {
  const hotListKey = ref([]);
  const hotListMap = ref({});
  // 请求数据
  const requestHotList = async () => {
    const res = await topListApi.getList();
    hotListMap.value = res;
    hotListKey.value = Object.keys(res);
  };
  return {
    hotListKey,
    hotListMap,
    requestHotList,
  }
}

export default useHotList
