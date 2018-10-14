
function deepClone(obj) {

    let newObj = obj instanceof Array? []:{}
    let wm = new WeakMap();
    wm.set(obj, newObj)

    for(var key in obj) {
        if(obj.hasOwnProperty(key)) {
            newObj[key] = obj[key] instanceof Object? deepClone(obj[key]) :  obj[key]
        }
    }
    return newObj;
}