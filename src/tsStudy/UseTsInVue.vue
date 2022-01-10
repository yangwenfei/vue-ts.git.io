<!--
 * @Author: your name
 * @Date: 2021-12-31 16:12:43
 * @LastEditTime: 2022-01-07 11:26:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\tsStudy\useTsInVue.vue
-->
<template>
  <div>
    <h1>ts在vue中的简单应用</h1>
    <p>{{msg}}</p>
    <ul v-for="item in features" :key="item">
      <li>{{item}}</li>
    </ul>


    <hr>
    <p>通过类型别名的方式定义json数组的数据类型</p>
    <ul v-for="it in feat" :key="it.id">
      <li>{{it}}</li>
    </ul>


    <hr>
    <p>交叉类型的使用场景，如点选时选中的加上样式</p>
    <ul v-for="newIt in newFeat" :key="newIt.id">
      <li :class="{selected:newIt.selected}" >{{newIt}}</li>
    </ul>
    <p>li的数量{{count}}</p>

    <hr>
    <p>泛型应用</p>
     <ul v-for="fanIt in fanFeat" :key="fanIt.id">
      <li :class="{selected:fanIt.selected}" >{{fanIt.name}}</li>
    </ul>

  </div>
</template>
<script lang="ts">
import {Component,Vue} from 'vue-property-decorator'
// 类型别名 ,可以导出复用
type Feature={
  id:number,
  name:string
}

// 交叉类型,使用交叉类型可以不破坏原来的数据结构
type FeatureSelect=Feature&{selected:boolean} 

//泛型接口
// interface Result<T>{
//   id:string
// }

@Component
export default class UseTsInVue extends Vue{

  //属性直接写，不用写在data里
   msg:string='属性不用放在data里，可以直接用'
   features:string[]=['类型注解，编译语言']
  
    //生命周期函数直接写,保证生命周期函数的名字写正确
  feat:Feature[]=[]
  newFeat:FeatureSelect[]=[]
  fanFeat:FeatureSelect[]=[]
  created(){
    this.feat=[{id:1,name:'name1'},{id:2,name:'name2'},{id:3,name:'name3'}]

    this.newFeat=this.feat.map<FeatureSelect>((el)=>{
      if(el.id % 2){
        return {...el,selected:false}
      }else{
        return {...el,selected:true}
      }
    })

    this.$axios.get<FeatureSelect[]>('/api/list').then(res=>{
      this.fanFeat=res.data
    })
  }

  //存取器作为计算属性使用
  get count(){
    return this.feat.length
  }




}
</script>
<style>
  .selected{
    background-color: royalblue;
    font-size: 20px;
  }
</style>