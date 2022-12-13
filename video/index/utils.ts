/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2022-12-06 17:42:30
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-13 17:53:48
 * @FilePath: \cain-video\video\index\utils.ts
 */
import { ref, nextTick, reactive, toRefs } from "vue";

export class VideoOption {
  autoplay: boolean;
  src: string;
  loop: boolean;
  muted: boolean;
  width: string | number;
  height: string | number;
  current: number;
}
export const m3u8_video = ref<HTMLVideoElement>();

// 全局变量
export const useState = reactive<{ isPlay: boolean }>({
  isPlay: true,
});
const { isPlay } = toRefs(useState);

export const VideoLoad = (ref: HTMLVideoElement, option: VideoOption) => {
  const { autoplay } = toRefs(option);
  m3u8_video.value = ref;

  document.addEventListener("keydown", VideoSuspend);
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
    (m3u8_video.value as any).currentTime -= 10;
    m3u8_video.value?.play();
  }
  if (event.keyCode == 39) {
    (m3u8_video.value as any).currentTime += 10;
    m3u8_video.value?.play();
  }
};
