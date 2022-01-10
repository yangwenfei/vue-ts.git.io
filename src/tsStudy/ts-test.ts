/*
 * @Author: your name
 * @Date: 2021-12-31 15:13:38
 * @LastEditTime: 2022-01-07 11:05:16
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vue-ts\src\tsStudy\ts-test.ts
 */
let str:string; //类型注解
 str='4'
 //str=2 //错误
 //编译器类型推断
let boon=true
//boon=4

//常见原始类型：string,nubmer,boolean,undefined,null,symbol

//类型数组
let arr1:string[]=[]
arr1=['tom']

// 任意类型 any
let anyArr:any
anyArr='3333'
anyArr=4

//any类型也可以用于数组
let arrArry:any[]
arrArry=[1,true,'free']

//--------------函数---------------

//函数中的类型约束 ,约束形参及返回值类型。加上类型的形参，在调用时必传
function fun(prop:string,prop1:number): string{

  return '返回值类型必须为string类型'
}

fun('name',1)

function fun1(prop:string,prop1?:number):string{
  return '加上?之后，形参不是必填项了'
}

// void类型，用于没有返回值的函数
function fun2():void{}


//--------------类型别名-------------
//类型别名 type 实际开发中数据结构比较复杂。如何定义一个json数组对象的类型呢？可以使用类型别名type。
type Feature={
  foo:string,
  boo:string
}

var obj:Feature={foo:'1',boo:'2'}
var objArr:Feature[]=[{foo:'1',boo:'2'},{foo:'2',boo:'4'}]



// 联合类型，对类型进行扩展 (既可以是string类型也可以是number类型)
let union1:string|number
union1='1'
union1=1

//交叉类型
type one={first:number}
type two={second:number}

type Three=one&two



//--------------- class类 ，继承和封装

class Parent1{
  private _foo='foo' //私有属性，不能在类的外部访问
  protected bar='bar' // 保护属性，可以在子类中访问
  //public tua='tua' 在构造函数里写的tua等价于在类里定义属性

  //参数属性：构造函数参数加修饰符，能够定义成员属性。 相当于在
  constructor(public tua='tua'){}
  
  //方法也有修饰符
  private someMethod(){}

  // 存取器：属性访问方式，可添加额外逻辑，控制读写性。想在外部访问类的私有属性必须通过存取器
  get foo(){
    return this._foo
  }
  set foo(val){
    this._foo=val
  }
}

//子类继承父类时要实现一下super方法
class Child1 extends Parent1{
  constructor(){
    super()
  }
}


//---------------- 接口：只定义结构，不定义实现。与type非常类似
interface Person2{
  firstname:string,
  lastname:string,
}

//greeting函数通过Person接口约束参数结构
function greeting1(person:Person2){
  return 'Hello'+person.firstname +' ' + person.lastname
}
greeting1({firstname:'jame',lastname:'user'}) //正确

//greeting({firstname:'name'}) //错误


//-----------------泛型------------------

interface Result<T>{
  ok:0|1,
  data:T
  
}
let result1:Result<string>={ok:1,data:'啦啦啦'}
let result2:Result<number>={ok:1,data:222222}



//---------------装饰器--------------------
//装饰器原理

