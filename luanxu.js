var arr = [1,2,3,4,5]

function shuffle(a) {
    for(var i=a.length; i>0; i--) {
        var j = Math.floor(Math.random() * i);//小于当前数组的下标
        [a[i-1], a[j]] = [a[j], a[i-1]]
    }
}