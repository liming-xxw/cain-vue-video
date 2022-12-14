<!--
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-13 17:01:00
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-14 16:33:16
 * @FilePath: \cain-video\video\appbar\appbar.vue
-->
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import {
  AppBarLoad,
  IconPause,
  IconPlay,
  propressState,
  TimeParse,
  TimerProg,
  WebFullScreen,
} from "./utils";
import { isPlay } from "../index/utils";
const progressRef = ref();
const propressbufferRef = ref();
onMounted(() => {
  AppBarLoad(progressRef.value, propressbufferRef.value);
});
</script>

<template>
  <div class="appbar">
    <div class="line">
      <div class="progressbar" ref="progressRef" @click="TimerProg">
        <div class="progress-linear__buffer" ref="propressbufferRef"></div>
      </div>
    </div>
    <div class="toolbar">
      <div class="toolbar_left">
        <div class="toolbar_play">
          <svg
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
          </svg>
          <svg
            v-if="isPlay"
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            @click="IconPlay"
          >
            <path d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </svg>
          <svg
            v-else
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            @click="IconPause"
            viewBox="0 0 24 24"
          >
            <path d="M11 19H9V5H11V19M15 5H13V19H15V5Z" />
          </svg>
          <svg
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
          </svg>
        </div>
        <div class="toolbar_time">
          <span>{{ TimeParse(propressState.current) }}</span>
          <span>/</span>
          <span>{{ TimeParse(propressState.duration) }}</span>
        </div>
      </div>
      <div class="toolbar_right">
        <div class="toolbar_right_list">
          <svg
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
            />
          </svg>
          <svg
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="transform: scale(0.8)"
          >
            <path
              d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"
            />
          </svg>
          <svg
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="transform: scale(0.8)"
          >
            <path
              d="M19,11H11V17H19V11M23,19V5C23,3.88 22.1,3 21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19M21,19H3V4.97H21V19Z"
            />
          </svg>
          <svg
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="transform: scale(0.8)"
            @click="WebFullScreen"
          >
            <path
              d="M12 5.5L10 8H14L12 5.5M18 10V14L20.5 12L18 10M6 10L3.5 12L6 14V10M14 16H10L12 18.5L14 16M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3M21 19H3V5H21V19Z"
            />
          </svg>
          <svg
            class="fnot"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            style="transform: scale(0.8)"
          >
            <path
              d="M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,22C10.05,22 8.22,21.44 6.69,20.47L10,15.47C10.6,15.81 11.28,16 12,16C12.72,16 13.4,15.81 14,15.47L17.31,20.47C15.78,21.44 13.95,22 12,22M2,12C2,7.86 4.5,4.3 8.11,2.78L10.34,8.36C8.96,9 8,10.38 8,12H2M16,12C16,10.38 15.04,9 13.66,8.36L15.89,2.78C19.5,4.3 22,7.86 22,12H16Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
