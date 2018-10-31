
// prototype原型对象
// _proto_
//原型链继承
function Parent() {
    this.name = '1'
}
Parent.prototype.say = function() {console.log('1')}
function Child() {
    this.age = '20'
}
Child.prototype = new Parent()
var ch = new Child()
//1.重写SubType的原型，让子类原型和子类构造函数断开联系。
//2.子类原型式父类的实例，那么子类的【【prototype】】指向了父类的原型对象，子类可以沿着原型链找到父类的方法。
//3.因为子类原型式父类的实例，所以通过父类构造函数，子类原型继承了父类的属性。

//问题：引用类型值的共享


//2.构造函数
function Parent() {
    this.name = '1'
}
Parent.prototype.say = function() {console.log('1')}
function Child() {
    Parent.call(this)
}
var ch = new Child()
//子类原型与父类原型没有关系，所以子类实例不能访问父类原型对象中的属性和方法。
//在子类构造函数中调用父类构造函数，创建子类实例就会得到继承。
//问题： 函数复用。

//3、组合继承

//通过原型访问方法，通过构造函数 访问属性。
function Parent(name) {
    this.name = name
}
Parent.prototype.say = function() {
    console.log('1')
}
function Child() {
    Parent.call(this)
}
Child.prototype = new Parent();
Child.constructor = Child;

//问题： 两次调用父类构造函数。第一次 子类原型获得父类的属性；第二次calllde
//的时候，创建子类实例，重写实例属性，屏蔽了原型对象上的同名属性。

//4、原型式继承 （对象的浅复制）


//5、寄生式继承 (对象的创建、增强，返回))) 这个中间过程有点难


