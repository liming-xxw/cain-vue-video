/*
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-06 17:46:08
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-06 17:58:47
 * @FilePath: \cain-video\script\index.ts
 */
import CainVideo from "../video/index/index";
import { App } from "vue";

const Videos = [CainVideo];

const install = (app: App) => {
  Videos.forEach((Dom) => {
    app.component(Dom.name, Dom);
  });
};

export { install };

export default install;
