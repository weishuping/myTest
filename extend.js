//继承的思想： 让一个引用类型指向另一个引用类型的属性和方法
//本质： 重写原型对象
//原型链继承
function Parent() {
    this.name = 'hello'
    this.colors = ['1','2','3']
}
Parent.prototype.sayName = function() {
    console.log(this.name)
}
function Child() {

}
Child.prototype = new Parent()
var c1 = new Child();
var c2 = new Child();
c1.colors.push('append')
//缺点1：引用类型的值会被所有实例共享
//谨慎的定义方法

function SuperType() {
    this.property = true;
}
SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType() {
    this.subproperty = false;
}
//继承
SubType.prototype = new SuperType();
//添加新方法
SubType.prototype.getSubValue = function() {
    return false;
}
SuperType.prototype.getSuperValue = function()  {
    return false;
}

var instance = new SubType();
console.log(instance) //false
//缺点2：不能传参数

//2 借用构造函数（经典继承）
function Parent() {
    this.names = [1,2,3];
}

function Child() {
    Parent.call(this)
}
var c = new Child()
//优点：避免了引用类型的属性被所有实例共享 ；Child可以给Parent传递参数
function Parent(name) {
    this.names = [1,2,3];
    this.name = name;
}

function Child(name) {
    Parent.call(this,name)
    this.sayName = function() {
        console.log(this.name)
    }
}
var c = new Child('hello')
var c1 = new Child('world')

//3 组合继承 
//使用原型链实现原型属性和方法的继承，借用构造函数实现对实例属性的继承

function Parent(name) {
    this.name = name
}
Parent.prototype.getName = function() {
    console.log(this.name)
}

function Child(name) {
    Parent.call(this, name)
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;
Child.prototype.sayName = function() {
    console.log(this.name)
}


var c = new Child('111');

//4 原型式继承 将传入的对象作为创建对象的原型
function object(o) {
    function F(){}
    F.prototype = o;
    return new F();
}

var person = {
    name: 'nicholas',
    friends: ['a','b']
}

var p1 = object(person)
p1.friends.push('c') // 
console.log(p1.friends)
var p2 = object(person)
p2.friends.push('d') // 
console.log(p2.friends)

//缺点： 引用类型的属性值会被共享，和原型链继承一样

//5 寄生式继承

function createA(origin) {
    var o = Object(origin)
    o.sayName = function() {
        console.log('hi')
    }
    return o;
}
//缺点：实例的方法不相等

//6 寄生组合模式 //组合继承缺点就是：会两次调用Parent的构造函数

function object(o) {
    function F(){}
    F.prototype = o
    return new F()
}

function prototype(child, parent) {
    var prototype = parent.prototype
    prototype.constructor = child
    child.prototype = prototype
}

prototype(Child, Parent)


