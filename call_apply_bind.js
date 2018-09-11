//调用call的例子
var obj = {
    value: '123'
}

function bar(name) {
    console.log(name)
    console.log(this.value)
}
// bar.call(obj)
//模拟call的实现。1、给传入的对象加newCall 执行完之后删掉newCall。需要注意的是函数需要传参、并有返回值
//1.1
Function.prototype.call2 = function(context) {
    context.fn = this;
    context.fn();
    delete context.fn;

}
//1.2传参数
Function.prototype.call3 = function(context) {
    context.fn = this;
    var arg = [];
    for(var i=1; i<arguments.length; i++) {
        arg.push('arguments['+i+']')
    }
    // context.fn(...arg);
    eval('context.fn('+arg+')')
    delete context.fn;

}
// bar.call3(obj, 'r')
//1.3返回值
function bar2(name, name2) {
    return {
        name: name,
        name2: name2,
        value: this.value
    }
}
Function.prototype.call4 = function(context) {
    context.fn = this;
    var arg = [];
    for(var i=1; i<arguments.length; i++) {
        arg.push('arguments['+i+']')
    }
    // console.log(arg)//  ["arguments[1]", "arguments[2]"]
    var result = eval('context.fn('+arg+')')
    delete context.fn;
    return result;
}
// console.log(bar2.call4(obj, 'hello', 'world'))

//apply的实现, 因为apply是数组形式传参
Function.prototype.apply2 = function(context, arr) {
    context = Object(context);
    context.fn = this;
    if(!arr) {
        context.fn();
    }
    var arg = [], result;
    for(var i=0; i<arr.length; i++) {
        arg.push('arr['+i+']')
    }
    // console.log(arg) //["arr[0]", "arr[1]"]
    var result = eval('context.fn('+arg+')')
    delete context.fn;
    return result;
}
// console.log(bar2.apply2(obj, ['hello', 'world']))
//bind实现
//例子

//第一次实现
Function.prototype.bind2 = function(context) {
    //没有this指向 undefined
    // context.fn = this;
    // console.log(context.fn)
    // return context.fn
    var self = this;
    return function() {
        self.apply(context)
    }
}
//传参 bind可以在返回、调用时传参

Function.prototype.bind2 = function(context) {
    //没有this指向 undefined
    // context.fn = this;
    // console.log(context.fn)
    // return context.fn
    var self = this;
    var outRegs = Array.prototype.slice.call(arguments, 1)
    return function() {
        var innerRegs = Array.prototype.slice.call(arguments, 0)
        console.log(outRegs.concat(innerRegs))
        self.apply(context, outRegs.concat(innerRegs))
    }
}
// var r = bar.bind2(obj, 'hello')
// console.log(r())//没有return 
//但是 bind的返回函数作为构造函数返回的时候，就有问题，this指向问题，修正一下 prototype

Function.prototype.bind3 = function(context) {
    var self = this;
    var outRegs = Array.prototype.slice.call(arguments, 1)
    var fn = function() {
        var innerRegs = Array.prototype.slice.call(arguments, 0)
        self.apply(this instanceof self? this:context, outRegs.concat(innerRegs))
    }
    fn.prototype = this.prototype;
    return fn;
}

Function.prototype.bind4 = function(context) {
    var self = this;
    var outRegs = Array.prototype.slice.call(arguments, 1)
    var f = function(){}
    var fn = function() {
        var innerRegs = Array.prototype.slice.call(arguments, 0)
        return self.apply(this instanceof f? this:context, outRegs.concat(innerRegs))
    }
    f.prototype = this.prototype;
    fn.prototype = new f()
    return fn;
}
//还可以使用空函数来实现
//第一种访问
// function newbar() {
//     this.own = 'my'
// }
// var newobj = newbar.bind3(obj)
// var resu = new newobj()
// console.log(resu)
//第二种访问
var r = bar2.bind3(obj, 'hello')
console.log(r)
console.log(r())//没有return 

//调用的不是函数的话
// if(typeof this !== 'function') {
//     throw new Error('its not a function')
// }
// //兼容问题
// Function.prototype.bind = Function.prototype.bind || function() {

// }

//实现new
//例子
function human(name) {
    console.log(name)
}
function ObjectFactory() {
    var obj = {}, Cons = Array.prototype.shift.call(arguments);
    obj._proto_ = Cons.prototype;
    Cons.apply(obj, arguments)
}
var person = ObjectFactory(human, 'name')
//返回值
function human2(name) {
    return {
        name: name
    }
}
function ObjectFactory() {
    var obj = {}, Cons = Array.prototype.shift.call(arguments);
    obj._proto_ = Cons.prototype;
    var res = Cons.apply(obj, arguments)
    return res;
}

var str = '1.2.3.4'
function test(str) {
    let flag = false;
    if(!str) {
        return false;
    } else {
        var arr = str.split('.')
        if(arr.length == 4) {
            for(var i=0, len=arr.length; i<len; i++) {
                if(0<=arr[i]<=255) {
                    flag = true
                } else {
                    flag = false
                }
            }
        } else {
            return false
        }
    }

    return flag
}

//数组  0 1 3 5
function constructorArr(n) {
    var arr = new Array(n)
    var newArr = []
    for(var i=0, len=arr.length; i<len; i++) {
        if(i>0) {
            newArr.push(i+(i-1))
        } else {
            newArr.push(0)
        }
        
    }
    console.log(newArr)
    let result = newArr.reduce( (res, item, key) => {
        if(isPrime(item)) {
            return res+item
        } else {
            return res
        }
        
    }, 0)
    console.log(result)
}

function isPrime(num) {
    if(num < 2) {
        return false
    }
    for(var i = 2; i<num/2+1; i++) {
        if(num%i === 0) {
            return false
        } 
    }
    return true
}