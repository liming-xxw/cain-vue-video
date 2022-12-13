/*
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-06 17:23:19
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-07 08:45:04
 * @FilePath: \cain-video\vite.config.ts
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import DefineOptions from "unplugin-vue-define-options/vite";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), DefineOptions()],
});
