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


class Shoes {
    constructor(props) {
        this.lists= []
    }
    
    //添加訂閱者
    addSubscribe(fn) {
        this.lists.push(fn)
    }

    publish() {
        var arg = arguments;
        for(var i =0, fn; fn= this.lists[i++];) {
            fn.apply(this, arg)
        }
    }
}

var s1 = new Shoes()
var s2 = new Shoes()


s1.addSubscribe(function(color) {
    console.log(color)
})
s2.addSubscribe(function(color) {
    console.log(color)
})
s1.publish('red')

//只向感興趣的訂閱 發佈
class Shoes {
    constructor(props) {
        this.lists= {}
    }
    
    //添加訂閱者
    addSubscribe(key, fn) {
        if(!this.lists[key]) {
            this.lists[key] = 
        }
        this.lists[key].push(fn)
    }

    publish() {
        var key  = Array.prototype.shift.call(arguments);
        var fns = this.lists[key]
        for(var i =0, fn; fn= fns[i++];) {
            fn.apply(this, arguments)
        }
    }
}

var s1 = new Shoes()


s1.addSubscribe('red', function(color) {
    console.log(color)
})

s1.publish('red')
