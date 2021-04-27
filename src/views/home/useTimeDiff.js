import { reactive } from "@vue/reactivity";
import dayjs from "dayjs";

const useTimeDiff = (hotListKey, hotListMap) => {
  // 时间差
  const timeDiffMap = reactive({});
  const getTimeDiff = time => {
    return dayjs(Date.now()).diff(dayjs(time), "minute");
  };
  const initTimeDiffMap = () => {
    hotListKey.value.forEach(v => {
      timeDiffMap[v] = getTimeDiff(hotListMap.value[v].list[0].create_time);
    });
  };
  return {
    timeDiffMap,
    initTimeDiffMap
  }
}

export default useTimeDiff
