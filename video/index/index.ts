/*
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-06 17:42:34
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-06 17:54:33
 * @FilePath: \cain-video\video\index\index.ts
 */
import CainVideo from "./index.vue";
import { App } from "vue";
CainVideo.install = (app: App) => {
  app.component(CainVideo.name, CainVideo);
};
export const _CainVideoComponent = CainVideo;
export default CainVideo;