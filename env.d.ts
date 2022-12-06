/*
 * @Descripttion: 
 * @version: 
 * @Author: cain
 * @Date: 2022-12-06 17:51:28
 * @LastEditors: Andy
 * @LastEditTime: 2022-12-06 17:51:56
 * @FilePath: \cain-video\env.d.ts
 */
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  