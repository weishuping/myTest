//快速排序
var arr = []
//随机生成一波1-100的数字
// for(i = 0; i<100; i++) {
//     arr.push(Math.floor(Math.random()*100+1))
// }

function quickSort(arr, left, right) {debugger
    //临街情况
    if(left > right) {
        return false;
    }
    var i = left, j = right, parition = left;
    while(i!=j) {
        if(arr[j] >= arr[parition] && i<j) {
            j--
        }
        if(arr[i] <=arr[parition] && i<j) {//左边应该从第几个位置开始
            i++
        }
        //交换的条件 i<j
        if(i <j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }

    }
    [arr[i], arr[parition]] = [arr[parition], arr[i]]

    //递归过程
    quickSort(arr, left, i-1)
    quickSort(arr, i+1, right)

}
arr = [2,3,1]
quickSort(arr, 0,3)

//冒泡排序 未优化
function bubble(sortArr) {
    var len = sortArr.length
    // for(var i=0; i<len; i++){//多少趟
    //     for(var j = len; j>i;j--) {//从后往前，把小的往上冒泡
    //         if(a[j] < a[j-1]) {
    //             [a[j], a[j-1]] = [a[j-1], a[j]]
    //         }
    //     }
    // }
    //假如现在有一个长度10000的数组，前1000无序，后9000有序并且大于前100数据。
    var flag = true;
    while (flag) {
        flag = false;
        for (j = 1; j < len + 1; j++) {
            if (sortArr[j - 1] > sortArr[j]) { //前面的数字大于后面的数字就交换
                //交换a[j-1]和a[j]
                var temp;
                temp = sortArr[j - 1];
                sortArr[j - 1] = sortArr[j];
                sortArr[j] = temp;

                //表示交换过数据;
                flag = true;
            }
        }
        len--;
    }
    
}

function bubble2(a) {
    var len = a.length;
    var flag = true;
    while(flag) {
        flag = false;
        for(var i = 1; i<len; i++) {
            if(a[i-1] > a[i]) {
                [a[i], a[i-1]] = [a[i-1], a[i]]
                flag = true
            }
        }
        len--
    }
}

//选择排序 就是从0-n-1个里面挑最小的放到第一个，再从1-n-1挑 以此类推
 function choose(arr) {
     var len = arr.length, min_index;
     for(var i = 0; i<len; i++) {
          min_index = i;
         for(var j = i+1; j<len; j++) {//从i+1开始 //比较的是最小值和arr[j]
             if(arr[min_index] > arr[j]) {
                 min_index = j
             }
         }
         [arr[i], arr[min_index]] = [arr[min_index], arr[i]]
     }
 }

//插入排序 在一个有序数列里面排序，尽管刚开始只有一个有序。比较从末尾进行。
var arr = [6 , 1 , 2 ,7  ,9 , 3 , 4 , 5 ,10  ,8]
function insertSort(arr) {
    var len = arr.length;
    for(var i = 1; i<len; i++) {
        for(var j = i; j > 0; j--) {//从i开始，比较的是 j 和j-1
            if(arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            }
        }
    }
}
