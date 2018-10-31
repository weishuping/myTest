var arr = new Array(), i=4, p=4, newArr = [];  //先声明一维
for(var k=0;k<i;k++){    //一维长度为i,i为变量，可以根据实际情况改变
    arr[k]=new Array();  //声明二维，每一个一维数组里面的一个元素都是一个数组；
 
for(var j=0;j<p;j++){   //一维数组里面每个元素数组可以包含的数量p，p也是一个变量；
    arr[k][j]=[k,j];    //这里将变量初始化，我这边统一初始化为空，后面在用所需的值覆盖里面的值
    newArr.push(arr[k][j])
 }
}
let max2 = 0;
    let newm = 0;
    let newmax2 = 0;
//在newArr中找最大值
for(var m =0; m<newArr.length; m++) {
    
    max2 += newArr[m][1]
    if(newmax2 > max2) {
        console.log(newmax2)
    } else
    newmax2 = max2;
}

//
new Promise(function(resolve) {
    resolve()
})
//async/await
for(var i=0; i<5; i++) {
    (function(j) {
        setTimeout(function(){
            console.log(j)
        }, j*1000)
    })(i)
}
//最后需要输出5
//使用new Promise 的all来解决
const tasks = []
const output = (i) => {
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log(i);resolve();
        }, i*1000)
    })
}
for(var i=0; i<5; i++) {
    // tasks.push(output(i)())
}

Promise.all(tasks).then(() =>{
    // console.log('hh')//
    setTimeout(function(){
        console.log(i)
    }, 1000)
})

function insertAtCursor(myField, myValue) {
    debugger
    //IE 浏览器
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
        sel.select();
    }

    //FireFox、Chrome等
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;

        // 保存滚动条
        var restoreTop = myField.scrollTop;
        myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
        
        if (restoreTop > 0) {
           myField.scrollTop = restoreTop;
        }
        
        myField.focus();
        myField.selectionStart = startPos + myValue.length;
        myField.selectionEnd = startPos + myValue.length;
    } else {
        myField.value += myValue;
        myField.focus();
    }
}
