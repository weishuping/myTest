//添加
function addEvent(ele, type,fn) {
    if(ele.addEventListner) {
        ele.addEventListner(type, fn, false)
    } else if(el.attachEvent) {
        ele.attachEvent('on'+type, fn)
    } else {
        ele['on'+type] = fn
    }
}
//移除
function removeEvent() {

}
//事件对象
function getEvent(event) {
    return  event? event:window.event
}
//获取事件目标
function getTarget(event) {
    return event.target || event.srcElement
}
//阻止浏览器默认事件
function pdefault(event) {
    if(event.preventDefault) {
        event.preventDefault()
    } else {
        event.returnValue = true
    }
}
//阻止冒泡事件
function bubble(event) {
    if(event.stopPropagation) {
        event.stopPropagation()
    } else {
        event.cancelButton = true
    }
}