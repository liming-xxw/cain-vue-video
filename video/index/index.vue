<!--
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-06 17:42:11
 * @LastEditors: 黎明 3111345436@qq.com
 * @LastEditTime: 2022-12-15 23:51:06
 * @FilePath: \cain-video\video\index\index.vue
-->
<script lang="ts" setup>
import {
  VideoOption,
  VideoLoad,
  VideoEnded,
  isPlay,
  VideoPlaying,
  isWebFullScreen,
  isHover,
  VideoMouseover,
  VideoMouseout,
  VideoClick,
  VideoPause,
  isPicture,
} from "./utils";
import { onMounted, toRefs, ref } from "vue";
import { IconPlay } from "../appbar/utils";
// 获取appbar
import Appbar from "../appbar/appbar.vue";

//  props 获取传过来的值
const props = withDefaults(
  defineProps<{
    autoplay: boolean;
    src: string;
    loop: boolean;
    muted: boolean;
    width: string;
    height: string;
    current: number;
  }>(),
  {
    autoplay: false,
    src: "",
    loop: false,
    muted: false,
    width: "900px",
    height: "500px",
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
  <div id="videoBox" :style="{ width: width, height: height }">
    <div
      class="videoPlay"
      :class="{ isWebFullScreen: isWebFullScreen }"
      :style="{ width: width, height: height }"
    >
      <video
        ref="m3u8_video"
        class="video"
        :src="src"
        :loop="loop"
        :style="{ width: width, height: height }"
        @click="VideoClick"
        @ended="VideoEnded"
        @playing="VideoPlaying"
        @mousemove.stop="VideoMouseover"
        @mouseout="isHover = false"
        @pause="VideoPause"
      ></video>
      <Appbar />

      <svg
        v-show="isPlay"
        class="font playBtn"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        @click="IconPlay"
      >
        <path
          d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"
        />
      </svg>
      <!-- </div> -->
    </div>
  </div>
</template>

<style lang="scss"></style>
