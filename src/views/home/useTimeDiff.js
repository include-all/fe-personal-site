import { reactive } from "@vue/reactivity";
import dayjs from "dayjs";

const useTimeDiff = (hotListKey, hotListMap) => {
  // 时间差
  const timeDiffMap = reactive({});
  const getTimeDiff = time => {
    // 如果没有time，不显示时间
    return time ? dayjs(Date.now()).diff(dayjs(time), "minute") : false
  };
  const initTimeDiffMap = () => {
    hotListKey.value.forEach(v => {
      // 避免空数组时报错
      const time = (hotListMap.value[v].list[0] || {}).create_time
      timeDiffMap[v] = getTimeDiff(time);
    });
  };
  return {
    timeDiffMap,
    initTimeDiffMap
  }
}

export default useTimeDiff
