/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2022-12-13 17:01:09
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-14 17:14:18
 * @FilePath: \cain-video\video\appbar\utils.ts
 */
import {
  isPlay,
  isWebFullScreen,
  m3u8_video,
  VideoOptionState,
} from "../index/utils";
import { reactive, ref } from "vue";

const progress = ref<HTMLDivElement>();
const propressbuffer = ref<HTMLDivElement>();
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
  propressbufferRef: HTMLDivElement
) => {
  progress.value = progressRef;
  propressbuffer.value = propressbufferRef;
  // 拿到宽度并计算
  propressState.ProgWidth = progress.value.clientWidth;
  console.log(progress.value);
  propressState.BufferWidth = propressbuffer.value.offsetWidth;
  propressState.timer = setInterval(() => {
    propressState.duration = m3u8_video.value?.duration;
    propressState.current = m3u8_video.value?.currentTime;
    let sum =
      (Number(propressState.current) / Number(propressState.duration)) * 100;
    (propressbuffer.value as any).style.width = sum + "%";
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

export const WebFullScreen = () => {
  isWebFullScreen.value = !isWebFullScreen.value;
};

/**
 * @name: 进度条点击跳转
 * @msg:
 * @return {*}
 */

export const TimerProg = (el) => {
  let offWidthsum = progress.value?.clientWidth;
  let offwidth = Math.ceil((el.clientX / Number(offWidthsum)) * 100) / 100;
  let x = Number(propressState.duration) * (offwidth - 0.01);
  (m3u8_video.value as any).currentTime = x;
  m3u8_video.value?.play();
};
