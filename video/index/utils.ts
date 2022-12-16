/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2022-12-06 17:42:30
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-16 15:54:31
 * @FilePath: \cain-video\video\index\utils.ts
 */
import { ref, nextTick, reactive, toRefs } from "vue";
import { anxia, propressState, TimerStart } from "../appbar/utils";

export interface VideoOption {
  autoplay: boolean;
  src: string;
  loop: boolean;
  muted: boolean;
  width: string;
  height: string;
  current: number;
}
export const m3u8_video = ref<HTMLVideoElement>();

// 全局变量
export const useState = reactive<{
  isPlay: boolean;
  isWebFullScreen: boolean;
  isHover: boolean;
  isProgHover: boolean;
  isbrowserFullScreen: boolean;
  isPicture: boolean;
}>({
  isPlay: true,
  isWebFullScreen: false,
  isHover: false,
  isProgHover: false,
  isbrowserFullScreen: false,
  isPicture: false,
});

// 配置变量
export const VideoOptionState = reactive<VideoOption>({
  autoplay: false,
  src: "",
  loop: false,
  muted: false,
  width: "900px",
  height: "500px",
  current: 0,
});
export const {
  isPlay,
  isWebFullScreen,
  isHover,
  isProgHover,
  isbrowserFullScreen,
  isPicture,
} = toRefs(useState);

export const VideoLoad = async (ref: HTMLVideoElement, option: VideoOption) => {
  // 配置选项
  ObjKeys(VideoOptionState, option);
  m3u8_video.value = ref;
  // 绑定键盘事件
  document.addEventListener("keydown", VideoSuspend);
  document.addEventListener("resize", VideoResize);
  window.addEventListener("resize", VideoResize);
};

export const VideoResize = () => {
  if (isbrowserFullScreen.value) {
    // isWebFullScreen.value = false;
  }
  // isbrowserFullScreen.value = !isbrowserFullScreen.value
};

/**
 * @name: 键盘空格事件
 * @msg: 按下空格视频暂停
 * @return {*}
 */
export const VideoSuspend = (event: any) => {
  if (event.keyCode == 32) {
    if (isPlay.value) {
      m3u8_video.value?.play();
    } else {
      m3u8_video.value?.pause();
    }
    isPlay.value = !isPlay.value;
  }
  if (event.keyCode == 37) {
    (m3u8_video.value as any).currentTime -= 1;
    m3u8_video.value?.play();
  }
  if (event.keyCode == 39) {
    (m3u8_video.value as any).currentTime += 1;
    m3u8_video.value?.play();
  }
  if (event.keyCode == 27) {
    isWebFullScreen.value = false;
  }
};

/**
 * @name: 视频结束事件
 * @msg:
 * @return {*}
 */
export const VideoEnded = () => {
  isPlay.value = true;
};

/**
 * @name: 视频播放中
 * @msg:
 * @return {*}
 */

export const VideoPlaying = () => {
  isPlay.value = false;
  TimerStart();
};

/**
 * @name: 视频暂停
 * @msg:
 * @return {*}
 */
export const VideoPause = () => {
  clearInterval(propressState.timer);
  console.log("视频暂停中");
};

/**
 * @name: 视频点击事件
 * @msg:
 * @return {*}
 */
export const VideoClick = () => {
  if (isPlay.value) {
    m3u8_video.value?.play();
  } else {
    m3u8_video.value?.pause();
  }
  isPlay.value = !isPlay.value;
};

/**
 * @name: AppBar移入事件
 * @msg:
 * @return {*}
 */
export const VideoMouseover = () => {
  isHover.value = true;
  isProgHover.value = false;
  anxia.value = false;
};

/**
 * @name: AppBar移出事件
 * @msg:
 * @return {*}
 */
export const VideoMouseout = () => {
  setTimeout(() => {
    isHover.value = false;
  }, 500);
};

const ObjKeys = (obj: any, item: any) => {
  Object.keys(obj).forEach((v: string) => {
    obj[v] = item[v];
  });
};

const ClearObj = (obj: any) => {
  Object.keys(obj).forEach((v: string) => {
    obj[v] = "";
  });
};
