
function fangdou(fn, time, isimmeditily) {
    var timeout = null;

    return function() {
        let context = this,
        args = arguments;
        if(timeout) {
            clearTimeout(timeout)
        }
        if(isimmeditily) {
            //如果触发过就算了
            var isEmit = !timeout;
            timeout = setTimeout(() => {
                timeout = null;
            },time)
            if(isEmit) {
                fn.apply(context, args)

            }
        } else {
            timeout = setTimeout(()=>{
                fn.apply(context, args)
            }, time)
        }
    }
}