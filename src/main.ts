/*
 * @Author: your name
 * @Date: 2021-12-31 15:00:40
 * @LastEditTime: 2022-01-07 17:27:22
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\main.ts
 */
import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
// import {create} from '@/utils/create'

import router from './router'

import store from './store'
// import store from './kstore'

Vue.config.productionTip = false
import './ts-test'
import Axios from 'axios'
Vue.prototype.$axios = Axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
