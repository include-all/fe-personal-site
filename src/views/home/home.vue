<template>
  <div class="home">
    <div class="content">
      <div v-for="item in hotListKey" :key="item" class="hot-wrap">
        <div class="hot-title">
          <div class="hot-title-inner">
            <img :src="imgMap[item]" class="mr-5" />
            <span>{{ hotListMap[item].name }}</span>
            <span class="time-diff">{{
              `（${getTimeDiff(hotListMap[item].list[0].create_time)}分钟前）`
            }}</span>
          </div>
          <i
            :class="{ 'el-icon-refresh': true, 'icon-rotate': isRefreshing }"
            @click="refreshItem(item)"
          ></i>
        </div>
        <div class="hot-list">
          <li v-for="(post, index) in hotListMap[item].list" :key="post.id">
            <span class="mr-5">
              <span class="mr-5 li-index">{{ `${index + 1}. ` }}</span>
              <a
                :href="`${hotListMap[item].origin}${post.post_href}`"
                target="_blank"
                >{{ post.post_name }}</a
              >
            </span>
            <span>{{ post.reply_count || post.hot_count || "" }}</span>
          </li>
        </div>
      </div>
    </div>
    <div class="side"></div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { ref } from "@vue/reactivity";
import { topListApi } from "../../data/api";
import hupuLogo from "../../assets/hupu-logo.png";

export default {
  setup() {
    const hotListMap = ref({});
    const hotListKey = ref([]);
    const imgMap = ref({
      hupu12: hupuLogo
    });
    const requesthotList = async () => {
      const res = await topListApi.getList();
      hotListMap.value = res;
      hotListKey.value = Object.keys(res);
    };
    requesthotList();
    const getTimeDiff = time => {
      return dayjs(Date.now()).diff(dayjs(time), "minute");
    };
    // refresh
    const isRefreshing = ref(false);
    const refreshItem = async item => {
      const requestMap = {
        hupu12: topListApi.reGetHupu12List
      };
      isRefreshing.value = true;
      const res = await requestMap[item]();
      hotListMap.value[item].list = res.list;
      isRefreshing.value = false;
    };
    return {
      hotListMap,
      hotListKey,
      imgMap,
      getTimeDiff,
      isRefreshing,
      refreshItem
    };
  }
};
</script>
<style lang="less" scoped>
@import url("./home.less");
</style>
