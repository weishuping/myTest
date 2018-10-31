
//var obj = {a: new Date()} obj.a.constructor=>date; var obj1 = deepClone(obj); obj1.constructor =>
//
function deepClone(obj) {
    let wm = new WeakMap();

     function clone(obj) {
        let exist = wm.get(obj),
            result = obj instanceof Array? []:{};
        if(exist) {
            return exist;
        }
        for(let name in obj) {
            if(Object.prototype.toString.call(obj[name]).slice(8,-1) === 'Array') {
                    result[name] = clone(obj[name])
            // } if(typeof obj == 'object') {
            //     if(obj[item].prototype) {
            //         result = new obj.constructor()
            //     } else 
            //     result[name] = clone(obj[name])
            // } else {
            //         result[name] = obj[name]
            } else if(Object.prototype.toString.call(obj[name]).slice(8,-1) === 'Object') {
                console.log(obj[name].constructor)
                if(obj[name].__proto__) {
                    result[name] = new obj[name].constructor(obj[name])
                } else 
                    result[name] = clone(obj[name])
            } else if(Object.prototype.toString.call(obj[name]).slice(8,-1) === 'Date') {
                // result[name] = clone(obj[name])
                result[name] = new obj[name].constructor(obj[name].getTime());
            } else {
                result[name] = obj[name]
            }
        }
        return result;
     }
     return clone(obj)
}
var arr = {
    a: [
        1
    ]
}
//循环引用
var obj = {
    a: {name:1},
}
obj.b = obj

//自定义对象
function Child() {
    this.name = '1'
}
var c = new Child()
//问题： obj2.__proto__ === Object.prototype
function deepClone(obj) {

    let newObj = obj instanceof Array? []:{}

    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            if(obj[key] instanceof Object) { //这种判断方式太 粗略//对于包装类型
                newObj[key] = deepClone(obj[key])
            } else {
                newObj[key] = obj[key]
            }
        }
    }
    return newObj;
}
//丢失方法的constructor

https://www.2cto.com/kf/201209/155957.html
function clone(item) { 
    if (!item) { return item; } // null, undefined values check 
 
    var types = [ Number, String, Boolean ],  
        result; 
 
    // normalizing primitives if someone did new String('aaa'), or new Number('444');    
    //一些通过new方式建立的东东可能会类型发生变化，我们在这里要做一下正常化处理 
    //比如new String('aaa'), or new Number('444') 
    types.forEach(function(type) { 
        if (item instanceof type) { 
            result = type( item ); 
        } 
    }); 
 
    if (typeof result == "undefined") { 
        if (Object.prototype.toString.call( item ) === "[object Array]") { 
            result = []; 
            item.forEach(function(child, index, array) {  
                result[index] = clone( child ); 
            }); 
        } else if (typeof item == "object") { 
            // testign that this is DOM 
            //如果是dom对象，那么用自带的cloneNode处理 
            if (item.nodeType && typeof item.cloneNode == "function") { 
                var result = item.cloneNode( true );     
            } else if (!item.prototype) { // check that this is a literal 
                // it is an object literal       
            //如果是个对象迭代的话，我们可以用for in 迭代来赋值 
                result = {}; 
                for (var i in item) { 
                    result[i] = clone( item[i] ); 
                } 
            } else { 
                // depending what you would like here, 
                // just keep the reference, or create new object 
                //这里解决的是带构造函数的情况，这里要看你想怎么复制了，深得话，去掉那个false && ，浅的话，维持原有的引用，                 
                //但是我不建议你去new一个构造函数来进行深复制，具体原因下面会解释 
                if (false && item.constructor) { 
                    // would not advice to do that, reason? Read below 
                //朕不建议你去new它的构造函数 
                    result = new item.constructor(); 
                } else { 
                    result = item; 
                } 
            } 
        } else { 
            result = item; 
        } 
    } 
 
    return result; 
} 
var obj2 = 
    { 
        one : { 
            'one-one' : new String("hello"), 
            'one-two' : [ 
                "one", "two", true, "four" 
            ] 
        }, 
        two : document.createElement("p"), 
        three : [ 
            { 
                name : "three-one", 
                number : new Number("100"), 
                obj : new function() { 
                    this.name = "Object test"; 
                }    
            } 
        ] 
    }
//如果说包装类型不需要new  那么直接使用类型再转一下
https://blog.csdn.net/sysuzhyupeng/article/details/70340598

