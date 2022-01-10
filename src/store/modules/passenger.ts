/*
 * @Author: your name
 * @Date: 2022-01-07 14:02:41
 * @LastEditTime: 2022-01-07 14:55:55
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\store\passenger.ts
 */
import { Module,VuexModule,Mutation,Action,getModule } from "vuex-module-decorators";
import store from '../index'

export type User={username:string,age:number}

// dynamic:true ,动态创建动态模块，即index.ts中 new Vuex.Store({})啥也不用写，空着就行
// store：当前模块注册到store上，也可以写在getModule上即 getModule(Passenger,store)
//namespace:namespaced:true, name:'passenger' 命名空间
@Module({dynamic:true,store:store,namespaced: true,name:'passenger'})
class Passenger extends VuexModule{

  // state => 要public不然外面调用不到
  public loginfo:User[]=[]

  // getter
  get userNumber():number{
    return this.loginfo.length
  }

  //mutation
  @Mutation
  SET_LOGINFO(user:User):void{
      this.loginfo.push(user)
  }

  //commit的两种调用方式，第一种是在Action装饰器里添加需要commit的mutation的名字。然后return的结果就是对应的mutation的参数
  @Action({commit:'SET_LOGINFO'})
  getZhangSan():User{
    return {username:'zhangsan',age:11}
  }

  //第二种，直接 this.SET_LOGINFO调用
  @Action
  getLisi():void{
    const user:User={username:'lisi',age:22}
    this.SET_LOGINFO(user)
  }

}

export const PassengerModule= getModule(Passenger)
