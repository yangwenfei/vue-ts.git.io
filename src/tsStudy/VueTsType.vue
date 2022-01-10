<!--
 * @Author: your name
 * @Date: 2021-12-31 15:31:11
 * @LastEditTime: 2021-12-31 16:06:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\tsStudy\VueTsType.vue
-->
<!--  ------------方式一----------
<template>
  <div>
    <h1>在vue中使用ts的几种方式,方式1和方式3常用且有利于新语法的学习使用</h1>
    <span>{{msg}}</span>
  </div>
</template>
<script lang="ts">
import {Component,Prop,Vue} from 'vue-property-decorator'

@Component //通过Component装饰器将VueTsType类变成了Vue的实例
export default class VueTsType extends Vue{ //此处的Vue是一个接口
  @Prop() private msg!:string

}
</script>



-->

<!--  ------------方式一----------
<template>
  <div class="about">
    <h1>{{msg}}</h1>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      msg:'111111111'
    }
  }
})
</script>
-->

<!--      ----------方式三-----------，文件后缀是tsx文件写法与react相似


import {Component,Prop,Vue} from 'vue-property-decorator'

@Component //通过Component装饰器将VueTsType类变成了Vue的实例
export default class VueTsType extends Vue{ //此处的Vue是一个接口
  @Prop() private msg!:string
  render(){
    return <div>{this.msg}</div>
  }
}

-->
