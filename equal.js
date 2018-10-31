/**
 * 2. fastEqual
 * 
 * 示例输入: a = { arr: [1, 2], num: 12, obj: {a:1} } b = { arr: [1, 2], num: 12, obj: {a:1} }
 * 
 * 示例输出: true
 * 
 * tips: 不需要考虑太多边界情况, 保证常见数据结构, 输入 a/b 可能是任意数据类型, 优先效率.
 */
const a = { arr: [1, 2], num: 12, obj: {a:1 ,b:2} } 
const b = { arr: [1, 2], num: 12, obj: {a:0, b:2} }

function equal(a, b) {
    var globalFlag = false;
    if(outputType(a) === outputType(b)) {
        
        if(typeof a !== 'object') {
            
            if(a === b) {
                globalFlag = true
            } else {
                globalFlag = false;
            }
        } else {
            globalFlag = equalObj(a, b)
        }

    } else {
        globalFlag = false;
    }
    return globalFlag;
}

function outputType(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1)
}

function equalObj(a, b) {
    var stopFlag = false;
        //     console.log('a'+ outputType(a))
        // console.log('b'+outputType(b))
    for(var name in a) {
        if(a.hasOwnProperty(name)) {
            console.log(111, typeof a[name])

                if(typeof a[name] !== 'object') {
                    if(a[name] && b[name] && a[name] === b[name]) {
                        stopFlag = true;
                    } else {
                        stopFlag = false;
                        break;
                    }
                } else  {
                    stopFlag = equalObj(a[name], b[name])
                }

                    
        }
    }
    return stopFlag;
}
console.log(equal(a, b))