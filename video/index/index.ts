/*
 * @Descripttion:
 * @version:
 * @Author: cain
 * @Date: 2022-12-06 17:42:34
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-16 16:07:57
 * @FilePath: \cain-video\video\index\index.ts
 */
import CainVideo from "./index.vue";
import { App } from "vue";
import "./video.scss";
import "../appbar/appbar.scss";
import "../Taghover/TagHover.scss"
CainVideo.install = (app: App) => {
  app.component(CainVideo.name, CainVideo);
};
export const _CainVideoComponent = CainVideo;
export default CainVideo;
