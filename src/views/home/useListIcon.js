import { reactive } from "@vue/reactivity";

import hupuLogo from "../../assets/hupu-logo.png";
import ngaLogo from "../../assets/nga-logo.png";
import weiboLogo from "../../assets/weibo-logo.png";
import zhihuLogo from "../../assets/zhihu-logo.png";
import guanchaLogo from "../../assets/guancha-logo.png";

const useListIcon = () => {
  const imgMap = reactive({
    hupu12: hupuLogo,
    hupuAllGambia: hupuLogo,
    ngaDuelLink: ngaLogo,
    weiboHotSearch: weiboLogo,
    zhihuTopList: zhihuLogo,
    guanchaLatestArticle: guanchaLogo
  });
  return {
    imgMap
  }
}

export default useListIcon
