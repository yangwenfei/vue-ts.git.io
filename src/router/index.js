/*
 * @Author: your name
 * @Date: 2021-12-31 15:00:40
 * @LastEditTime: 2022-01-07 15:03:23
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 1.实现一个插件
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vueTsType',
    name: 'VueTsType',
    component: () => import( '../tsStudy/VueTsType.vue')
  },
  {
    path: '/useTsInVue',
    name: 'UseTsInVue',
    component: () => import( '../tsStudy/UseTsInVue.vue')
  },
  {
    path: '/useTsVuex',
    name: 'UseTsVuex',
    component: () => import( '../tsStudy/UseTsVuex.vue')
  }
]

// 实现一个VueRouter类
const router = new VueRouter({
  routes
})

export default router
