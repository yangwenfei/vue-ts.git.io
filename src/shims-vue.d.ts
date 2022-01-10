/*
 * @Author: your name
 * @Date: 2021-12-31 15:00:40
 * @LastEditTime: 2022-01-07 10:52:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\shims-vue.d.ts
 */
import Vue from 'vue'
import { AxiosInstance } from 'axios'
declare module '*.vue' {
  export default Vue
}

declare module 'vue/types/vue' { //找到需要扩展的module所在的文件路径，'vue/types/vue'
  interface Vue { //找到需要扩展的接口，添加扩展的属性
    $axios: AxiosInstance
  }
}
