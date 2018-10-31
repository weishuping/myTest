var arr = [];
//生成20-40的随机数
for(var i=0; i<20; i++) {
    var r = Math.round(Math.random()*(40-20+1) + 20);
    arr.push(r);
}
var obj = {
}
//找到重复数目最多的数字
// arr.forEach(item => {
//     if(arr.indexOf(item) > -1) {
//         debugger
//         if(obj[item]) {
//             obj[item] = obj[item] +1
//         } else {
//             obj[item] = 1;
//         }
//     }
// })
// var newArr = Object.keys(obj)
// var key = newArr.reduce((p,n) => {
//     return obj[p]>obj[n]?p:n
// })
//只用一次迭代 找到重复数目最多的数字
let max = 0
let key = -1;
arr.reduce(function(obj, item, index) {
    obj[item]? obj[item]++ : obj[item] = 1;
    if(obj[item] > max) {
        max = obj[item]
        key = item
    }
    return obj;
},{})
//重新排序
function resort(a,b) {
    if(a>b) {
        return 1;
    } else if(a<b) {
        return -1;
    } else {
        return 0;
    }
}

var newArr = arr.sort(resort)
//二分查找
//递归
function binarySearch(newArr, target, left, right) {
    debugger
    if(left <=right) {
        var mid = Math.floor((left+right)/2);
        if(target == newArr[mid]) {
            
            return mid;
        } else if(target > newArr[mid]) {
            binarySearch(newArr, target,  mid+1, right)
        } else {
            binarySearch(newArr, target, left, mid-1)
        }
    } else {
        return -1;
    }
}
//非递归 使用
var myarr = [15,22,34,44,53,63]
function binarySearch2(arr, target) {
    debugger
    var left = 0, right = arr.length-1;
    while(left <= right) {
        var mid = Math.floor((left+right)/2);
        if(arr[mid] == target) {
            return mid
        } else if(arr[mid] < target) {
            left = mid+1
        } else {
            right = mid-1
        }
    }
    return -1
}

//查找有序數組中最後一次出現的位置 
var arr = [3,5,10,10,10,13,13,19,23]
function binaryLastIndex(arr, target) {
    var left = 0, right = arr.length-1, mid;

    while(left <= right) {
        mid = Math.floor((left+right)/2)
        if(target == arr[mid]) {
            if(arr[mid] != arr[mid+1]) {
                return mid;
            } else {
                left = mid+1
            }
        } else if(target > arr[mid]) {
            left = mid+1;
        }else {
            right = mid -1;
        }
        if(left == right) {
            break;
        }
    }
}
//first
function binaryFirstIndex(arr, target) {
    var left = 0, right = arr.length-1, mid;

    while(left <= right) {
        mid = Math.floor((left+right)/2)
        if(target == arr[mid]) {
            if(arr[mid] != arr[mid-1]) {
                return mid;
            } else {
                right = mid-1
            }
        } else if(target > arr[mid]) {
            left = mid+1;
        }else {
            right = mid -1;
        }
        if(left == right) {
            break;
        }
    }
}
var p = binarySearch2(myarr, 53)
//函数按照值传递
var o = {
    name : '123'
}
function changeName(o) {
    o.name = '456'
}
//o变为456
//但是如果改为
function changeName(o) {
    o = '456'
}
//o仍为123
//说明了在传递对象的时候，（共享传递）传递对象的引用的副本
//对象去重
var objArr = [
    {
        name:1,
        obj:1
    },
    {
        name:1,
        obj:1
    }
]
//使用reduce //回调的第一个参数是：上一次回调返回的值或者是初始值
function filterObj(arr, property) {
    var obj = {};
    let newArr = arr.reduce((prevResult, currentitem)=>{
        obj[currentitem[property]]? '':  obj[currentitem[property]] = true && prevResult.push(currentitem)
        return prevResult
    }, [])
    return newArr
}
//快速排序
//从两边进行 相遇之后 交换
