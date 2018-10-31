//普通的json转的深拷贝 会出现以下问题
//1 忽略 方法 和 undefined

var  originObj = {
    a: [1,2],
    b: function() {
        return 1
    }
}
//2 不能拷贝例如 new String('')或者 new Date()的属性
// new constructor(obj.value)
// 它会抛弃对象的constructor。
var newObj = new obj.constructor(); //保持继承的原型

//将new RegExp() 转换为 {}

//3 循环引用类型   父级引用和同级引用 
//使用weakMap
//如果 newObj.c.e = newObj.a 需要考虑克隆后的指向问题

function deepCopy3(obj) {
    // hash表，记录所有的对象的引用关系
    let map = new WeakMap();
    function dp(obj) {
      let result = null;
      let keys = Object.keys(obj);
      let key = null,
        temp = null,
        existobj = null;
  
      existobj = map.get(obj);
      //如果这个对象已经被记录则直接返回
      if(existobj) {
        return existobj;
      }
  
      result = {}
      map.set(obj, result);
  
      for(let i =0,len=keys.length;i<len;i++) {
        key = keys[i];
        temp = obj[key];
        if(temp && typeof temp === 'object') {
          result[key] = dp(temp);
        }else {
          result[key] = temp;
        }
      }
      return result;
    }
    return dp(obj);
  }
  
  const obj= {
    a: {
      name: 'a'
    },
    b: {
      name: 'b'
    },
    c: {
  
    }
  };
  c.d.e = obj.a;
  