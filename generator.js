function* _testYieldExpression(){
    let value = '';
    value = yield 'yield value';
    console.info(`1 value is: ${value}`);//输出1

    value = yield 'yield value';
    console.info(`2 value is: ${value}`);//输出2
    return 'over';
}

let _testIterator = _testYieldExpression();
let _res = _testIterator.next();
console.info(`1:no params to next, result is: ${_res.value}`);//输出3

_res = _testIterator.next('params from next');
console.info(`2:params to next, result is: ${_res.value}`);//输出4

_res = _testIterator.next();
console.info(`3:params to next, result is: ${_res.value}`);//输出5

//选择排序
function s(arr) {
    let len = arr.length;
    for(var i = 0; i<len; i++) {
        var currentIndex = i;
        for(var j= i+1; j<len; j++) {
            if(arr[j] < arr[currentIndex]) {
                currentIndex = j
            }
        }
        [交换]
    }
}

//插入

function ss(arr) {
    let len = arr.length;
    for(var i = 1; i<len; i++) {
        for(var j =i; j >0; j--) {
            if(arr[j] < arr[j-1]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            }
        }
    }
}

//三数取中  132
var arr = [2,3,1]
function getPartition(arr) {
    var i = 0, j = 2; m = 1;
    if(arr[1] > arr[arr.length-1]) {
        [arr[m], arr[j]] = [arr[j], arr[m]]
    } 
    if(arr[0] > arr[arr.length-1]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    if(arr[0] < arr[1]) {
        [arr[i], arr[m]] = [arr[m], arr[i]]
    }
    return arr[i]
}

//原型链继承
function Parent() {
    this.globalArr = [1,2,3]
}

Parent.prototype.getArr = function() {
    return this.globalArr;
}

function Child(name) {
    this.name = name;
}
Child.prototype.sayName = function() {
    return this.name
}
Child.prototype = new Parent();
var c = new Child()

//借用构造函数
function Parent(global) {
    this.global = global
    this.globalArr = [1,2,3]
}

Parent.prototype.getArr = function() {
    return this.globalArr;
}

function Child(global, name) {
    Parent.call(this, global)
    this.name = name;
}
Child.prototype.sayName = function() {
    return this.name
}

var c2 = new Child([1,2,3], 'hi')
//一定要清楚属性和方法在哪里

//组合继承
//ES6继承

class Parent {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName() {
        return this.name
    }
}

class Child extends Parent {
    constructor(name, age, hobbies) {
        super(name, age)
        this.hobbies = hobbies;
    }
    getHobbby() {
        return this.hobbies;
    }
}

//ajax
function sendAjax(obj) {
    var xhr = new XMLHttpRequest()
    xhr.open(obj.type, obj.url, obj.async)
    
    xhr.onreadystatechange = function(res) {
        if(res.readyState == 4 && res.status == 200) {

        }
    }
    if(obj.type == 'get') {
        //参数放在url后
        xhr.send() 
    } else {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(obj.param)
    }
}

//函数柯里化
// fn("a", "b", "c") // ["a", "b", "c"]
// fn("a", "b")("c") // ["a", "b", "c"]
// fn("a")("b")("c") // ["a", "b", "c"]
// fn("a")("b", "c") // ["a", "b", "c"]

 function curry(fn, args) {debugger
    var length = fn.length,
    args = args || [];

    return function() {
        var newargs = args.slice(0);
        for(var i =0; i<arguments.length; i++) {
            newargs.push(arguments[i])
        }

        if(newargs.length < length) {
            return curry.call(this, fn, newargs)//重要
        } else {
            return fn.apply(this, newargs)
        }
    }
}

