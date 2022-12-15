/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2022-12-13 17:01:09
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-15 18:18:18
 * @FilePath: \cain-video\video\appbar\utils.ts
 */
import {
  isbrowserFullScreen,
  isHover,
  isPicture,
  isPlay,
  isWebFullScreen,
  m3u8_video,
  VideoOptionState,
} from "../index/utils";
import { reactive, ref } from "vue";

const progress = ref<HTMLDivElement>();
const propressbuffer = ref<HTMLDivElement>();
const line_btn = ref<HTMLDivElement>();
export const propressState = reactive<{
  ProgWidth: number;
  BufferWidth: number;
  timer: any;
  duration: number | undefined;
  current: number | undefined;
}>({
  ProgWidth: 0,
  BufferWidth: 0,
  timer: null,
  duration: 0,
  current: 0,
});

/**
 * @name: Appbar周期函数赋值
 * @msg:
 * @return {*}
 */
export const AppBarLoad = (
  progressRef: HTMLDivElement,
  propressbufferRef: HTMLDivElement,
  line_btnRef: HTMLDivElement
) => {
  progress.value = progressRef;
  propressbuffer.value = propressbufferRef;
  line_btn.value = line_btnRef;
  // 拿到宽度并计算
  propressState.ProgWidth = progress.value.clientWidth;
  propressState.BufferWidth = propressbuffer.value.offsetWidth;

  TimerStart();
  setTimeout(() => {
    clearInterval(propressState.timer);
  }, 100);
};

/**
 * @name: 定时任务
 * @msg:
 * @return {*}
 */
export const TimerStart = () => {
  propressState.timer = setInterval(() => {
    propressState.duration = m3u8_video.value?.duration;
    propressState.current = m3u8_video.value?.currentTime;
    let sum =
      (Number(propressState.current) / Number(propressState.duration)) * 100;
    (propressbuffer.value as any).style.width = sum + "%";
    (line_btn.value as any).style.left = sum + "%";
  }, 1);
};

/**
 * @name: 点击播放事件
 * @msg:
 * @return {*}
 */
export const IconPlay = () => {
  isPlay.value = false;
  m3u8_video.value?.play();
};

/**
 * @name: 点击暂停事件
 * @msg:
 * @return {*}
 */
export const IconPause = () => {
  isPlay.value = true;
  m3u8_video.value?.pause();
};

/**
 * @name: 转化时间
 * @msg:
 * @param {number} time
 * @return {*}
 */
export const TimeParse = (time: number | undefined) => {
  let result = Math.trunc(Number(time));
  let str = "";

  let h =
    Math.floor(result / 3600) < 10
      ? "0" + Math.floor(result / 3600)
      : Math.floor(result / 3600);
  let m =
    Math.floor((result / 60) % 60) < 10
      ? "0" + Math.floor((result / 60) % 60)
      : Math.floor((result / 60) % 60);
  let s =
    Math.floor(result % 60) < 10
      ? "0" + Math.floor(result % 60)
      : Math.floor(result % 60);
  str = `${h}:${m}:${s}`;
  return str;
};

/**
 * @name: 网页全屏事件
 * @msg:
 * @return {*}
 */
export const WebFullScreen = () => {
  isWebFullScreen.value = !isWebFullScreen.value;
};

/**
 * @name: 浏览器全屏事件
 * @msg:
 * @return {*}
 */
export const browserFullScreen = () => {
  try {
    const element: any = document.documentElement;
    const doc: any = document;
    if (isbrowserFullScreen.value) {
      if (doc.exitFullscreen) {
        doc.exitFullscreen();
      } else if (doc.webkitCancelFullScreen) {
        doc.webkitCancelFullScreen();
      } else if (doc.mozCancelFullScreen) {
        doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        doc.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
    isWebFullScreen.value = !isWebFullScreen.value;
    isbrowserFullScreen.value = !isbrowserFullScreen.value;
  } catch (err) {}
};

/**
 * @name: 画中画事件
 * @msg:
 * @return {*}
 */
export const picturein = () => {
  if (isPicture.value) {
    document.exitPictureInPicture();
  } else {
    m3u8_video.value?.requestPictureInPicture();
  }
  isPicture.value = !isPicture.value;
};

/**
 * @name: 进度条点击跳转
 * @msg:
 * @return {*}
 */

export const TimerProg = (el: any) => {
  let offWidthsum = progress.value?.clientWidth;
  let xx = (Number(line_btn.value?.clientWidth) * 0.5) / 500;
  let offwidth = Math.ceil((el.clientX / Number(offWidthsum)) * 100) / 100;
  let x = Number(propressState.duration) * (offwidth - xx);
  (m3u8_video.value as any).currentTime = x;
  m3u8_video.value?.play();
  isHover.value = true;
};

/**
 * @name: 移入进度条
 * @msg:
 * @return {*}
 */
export const PropMousemove = () => {};

/**
 * @name: 移出进度条
 * @msg:
 * @return {*}
 */
export const PropMouseout = () => {};
