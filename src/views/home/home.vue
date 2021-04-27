<template>
  <div class="home">
    <div class="content">
      <div v-for="item in hotListKey" :key="item" class="hot-wrap">
        <div class="hot-title">
          <div class="hot-title-inner">
            <img :src="imgMap[item]" />
            <span>{{ hotListMap[item].name }}</span>
            <span class="time-diff">{{
              `（${timeDiffMap[item]}分钟前）`
            }}</span>
          </div>
          <i
            :class="{
              'el-icon-refresh': true,
              'icon-rotate': isRefreshingMap[item]
            }"
            @click="execRefresh(item)"
          ></i>
        </div>
        <div class="hot-list">
          <li v-for="(post, index) in hotListMap[item].list" :key="post.id">
            <span class="mr-5">
              <span class="mr-5 li-index">{{ `${index + 1}. ` }}</span>
              <a
                :href="`${hotListMap[item].origin || ''}${post.post_href}`"
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
import { onMounted, onBeforeUnmount } from "vue";
import useListIcon from "./useListIcon";
import useHotList from "./useHotList";
import useTimeDiff from "./useTimeDiff";
import useRefresh from "./useRefresh";

export default {
  setup() {
    // 图片
    const { imgMap } = useListIcon();
    const { hotListKey, hotListMap, requestHotList } = useHotList();
    const { timeDiffMap, initTimeDiffMap } = useTimeDiff(
      hotListKey,
      hotListMap
    );
    const { isRefreshingMap, refreshItem } = useRefresh(hotListMap);
    const execRefresh = async item => {
      await refreshItem(item);
      initTimeDiffMap();
    };
    const init = async () => {
      await requestHotList();
      initTimeDiffMap();
    };
    init();
    // 处理计时
    let timer;
    onMounted(() => {
      timer = setInterval(() => {
        initTimeDiffMap();
      }, 60 * 1000);
    });
    onBeforeUnmount(() => {
      clearInterval(timer);
    });
    return {
      imgMap,
      hotListMap,
      hotListKey,
      timeDiffMap,
      isRefreshingMap,
      execRefresh
    };
  }
};
</script>
<style lang="less" scoped>
@import url("./home.less");
</style>
