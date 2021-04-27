import { reactive } from "@vue/reactivity";
import { topListApi } from "../../data/api";

const useRefresh = (hotListMap) => {
  const isRefreshingMap = reactive({});
  const refreshItem = async item => {
    const requestMap = {
      hupu12: topListApi.reGetHupu12List,
      ngaDuelLink: topListApi.reGetNgaPostList,
      weiboHotSearch: topListApi.reGetThirdApiList,
      zhihuTopList: topListApi.reGetThirdApiList,
      guanchaLatestArticle: topListApi.reGetThirdApiList
    };
    const paramsMap = {
      weiboHotSearch: { type: "weibo" },
      zhihuTopList: { type: "zhihu" },
      guanchaLatestArticle: { type: "guancha" }
    };
    isRefreshingMap[item] = true;
    const res = await requestMap[item]({ params: paramsMap[item] || {} });
    hotListMap.value[item].list = res.list;
    isRefreshingMap[item] = false;
  };
  return {
    isRefreshingMap,
    refreshItem
  }
}

export default useRefresh
