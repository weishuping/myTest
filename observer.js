//订阅观察者模式
var shoes = {
    list: [],
    subscribe:  function(fn) {
        shoes.lists.push(fn);
    },
    publish: function() {
        for(var i=0, fn;fn=shoes.lists[i++];) {
            console.log(this)
            fn.apply(this, arguments);
        }
    }
};

//订阅
shoes.subscribe(function(color) {
    console.log(color)
})

shoes.publish('red')
// 原型
