//1 工厂模式
function FactoryObj(name) {
    var obj = new Object()
    obj.name = name
    obj.sayName = function() {
        console.log(name)
    }
    return obj;
}
var person = FactoryObj('hello')
//缺点：不能识别对象，因为所有的实例指向同一个原型

//2 构造函数
function Person2(name) {
    this.name = name
    this.sayName = function() {
        console.log(this.name)
    }
}
var person2 = new Person2('hello')
//优点：对象可以识别
//缺点： 构造函数的不同实例的同名函数不相等

//3 原型模式
function Person3() {

}
Person3.prototype = {
    constructor: Person3,
    name: 'hello',
    sayName: function() {
        console.log(this.name)
    }
}
var person3 = new Person3('world')

//优点： 方法不会被重建 封装性好 也能通过constructor找到
//缺点： 所有的属性和方法都共享；不能传参数
//注意：对象本身的constructor属性是不可枚举的，所以需要使用 Object.defineProperty来定义constructor这个属性

//4 组合模式：构造函数和原型模式的组合
//将共有的属性和实例添加到原型上，通过构造函数定义实例属性
function Person4(name) {
    this.name = name
    this.friends = [1,2]
}
Person4.prototype = {
    constructor: Person4,
    sayName = function() {

    }
}
//优点： 传递参数，该共享的共享，该私有的私有
//缺点： 封装性不太好

//5 动态原型模式
 //把所有的信息封装在了构造函数中，仅在需要的时候初始化原型

 function Person5(name, age) {
     this.name = name;
     this.age = age;
     if(typeof this.sayName !== 'function') {
         Person5.prototype.sayName = function() {
             console.log(this.name)
         }
     }
 }
//注意： 不能直接使用对象字面量，否则需要return new 这个对象

 //寄生构造函数模式
function Person6(name) {
    var o = new Object;
    o.name = name;
    o.sayName = function() {

    }
    return o;
}
var p6 = new Person6('hello')
//缺点： 无法使用instanceof来确定对象类型
//本质： 就是在工厂模式上多使用了new来调用，本质上和工厂模式一样。

//稳妥构造函数模式 适用于安全环境
//不使用this new
function Peroson7(name) {
    var o = new Object()
    o.name = name
    o.sayName = function() {
        return name;
    }
    return o;
}
//缺点： 无法识别对象

