<!--
 * @Author: your name
 * @Date: 2022-01-07 14:32:19
 * @LastEditTime: 2022-01-07 17:23:44
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\tsStudy\UseTsVuex.vue
-->
<template>
  <div>
    
    <el-button @click="getPassenger">获取用户</el-button>
    <ul>
      <li v-for="(item,index) in passenger" :key="index">
        {{item.username}}-----{{item.age}}
      </li>
    </ul>
    <p>用户数量{{count}}</p>
    <p>{{$store.state.passenger}}</p>
  </div>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
import {PassengerModule,User} from '@/store/modules/passenger'


@Component
 export default class UseTsVuex extends Vue{

  get count():number{
    return PassengerModule.userNumber //getter
  }

  passenger:User[]=[]
  getPassenger():void{ 
    PassengerModule.getZhangSan() //Action
    PassengerModule.getLisi() //Action
    this.passenger=PassengerModule.loginfo
  }

 }
</script>