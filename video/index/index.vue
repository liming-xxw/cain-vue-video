<!--
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-06 17:42:11
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-13 17:54:34
 * @FilePath: \cain-video\video\index\index.vue
-->
<script lang="ts" setup>
import { VideoOption, VideoLoad } from "./utils";
import { onMounted, onBeforeUnmount, watch, toRefs, ref } from "vue";

// 获取appbar
import Appbar from "../appbar/appbar.vue";

//  props 获取传过来的值
const props = withDefaults(
  defineProps<{
    autoplay: boolean;
    src: string;
    loop: boolean;
    muted: boolean;
    width: string | number;
    height: string | number;
    current: number;
  }>(),
  {
    autoplay: false,
    src: "",
    loop: false,
    muted: false,
    width: "900",
    height: "500",
    current: 0,
  }
);
const { autoplay, src, muted, width, height, loop, current } = toRefs(props);

const m3u8_video = ref();

const option: VideoOption = {
  current: current.value,
  autoplay: autoplay.value,
  src: src.value,
  loop: loop.value,
  muted: muted.value,
  width: width.value,
  height: height.value,
};

onMounted(() => {
  VideoLoad(m3u8_video.value, option);
});

// @ts-ignore
defineOptions({
  name: "CainVideo",
});
</script>

<template>
  <div id="videoBox">
    <div
      class="videoPlay"
      :style="{ width: width + 'px', height: height + 'px' }"
    >
      <video
        ref="m3u8_video"
        class="video"
        :src="src"
        :loop="loop"
        :style="{ width: width + 'px', height: height + 'px' }"
      ></video>
      <Appbar />
    </div>
  </div>
</template>

<style lang="scss"></style>
