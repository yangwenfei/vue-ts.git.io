<!--
 * @Author: your name
 * @Date: 2021-12-31 15:00:40
 * @LastEditTime: 2022-01-07 15:07:05
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/vueTsType">vue中使用ts的3中方式</router-link> |
      <router-link to="/useTsInVue">ts在vue中的简单应该</router-link> |
      <router-link to="/useTsVuex">通过装饰器的方式使用vuex</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'app',
})
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
