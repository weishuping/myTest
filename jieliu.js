
var count = 1;
var container = document.getElementById('container');
function getUserAction() {
    container.innerHTML = count++;
};

// container.onmousemove = debounce(getUserAction, 1000, true);

// function debounce(func, wait, immediate) {

//     var timeout;

//     return function () {
//         var context = this;
//         var args = arguments;

//         if (timeout) clearTimeout(timeout);
//         if (immediate) {
//             // 如果已经执行过，不再执行
//             var callNow = !timeout;
//             timeout = setTimeout(function(){
//                 timeout = null;
//             }, wait)
//             if (callNow) func.apply(context, args)
//         }
//         else {
//             timeout = setTimeout(function(){
//                 func.apply(context, args)
//             }, wait);
//         }
//     }
// }
container.onmousemove = throttle(getUserAction, 1000);
function throttle(func, wait) {
    var context, args;
    var previous = 0;

    return function() {
        var now = +new Date();
        context = this;
        args = arguments;
        if (now - previous > wait) {
            func.apply(context, args);
            previous = now; //重要 需要给previous赋值
        }
    }
}