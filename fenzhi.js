//分治思想 解决合并排序问题
var arr1 = [1,3,5,7], arr2 = [2,4,6]
var arr = arr1.concat(arr2)
function merge(arr, low, middle, high) {
    var i=low,  j = middle+1, move = 0, tempArr = [];
    while(i<=middle && j<=high) {
        if(arr[i] <= arr[j]) {
            tempArr[move++] = arr[i++]
        } else {
            tempArr[move++] = arr[j++]
        }
    }
    while(i<=middle) {//收左边多余的
        tempArr[move++] = arr[i++]
    }
    while(j<=high) {//收左边多余的
        tempArr[move++] = arr[j++]
    }
    return tempArr
}
//merge(arr, 0, 3,6) 中间的数字必须是长数组的最后一个

//快速排序 选取第一个元素作为交换
var arr = [5,13,9,7,10,1,4,12,15,11]

function parition(arr, low, high) {
    let i = low, j = high, pos = arr[low];
    while(i<j) {
        
        while(i < j && arr[j] >= pos) {
            j--
        }
        if(i<j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
        }

        while(i < j && arr[i] <= pos) {
            i++
        }
        if(i<j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            j--
        }

    }
    return i;
}
function quickSort(arr, low, high) {
    if(low>=high) {
        return;
    } else {
    var p = parition(arr, low, high);
    quickSort(arr, low, p-1);
    quickSort(arr, p+1, high);}

}

//最长公共子序列问题
// A B C B D A B | 
//B D C A B A

function LCS(s1, s2) {
    var len1 = s1.length,
        len2 = s2.length,
        arr = [new Array(len2+1).fill(0)],
        a = []
        //初始化
    //构造二维数组
    
    //
    for(var m=1; m<=len1; m++) {
        
        arr[m] = [0]
        for(var n=1; n<=len2; n++) {
            if(s1.charAt(m) == s2.charAt(n)) {
                arr[m][n] = arr[m-1][n-1] + 1;
            } else {
                arr[m][n] = Math.max(arr[m][n-1], arr[m-1][n])
            }
        }
        //输出
        for(var k=m; k>0; k--) {
            if(arr[k][n] == arr[k-1][n-1]) {
                a[n] = 1;
            } else{
                n = n - 1
            }
        }

    }
    return arr
}


//0-1背包问题

function knapSack(n, w, values, weight) {
    //将问题 归纳为一个二维数组

    var arr = [new Array(w+1).fill(0)], x = new Array(n)
    for(var i=1; i<=n ;i++) {//第几个商品 i+1行
        arr[i] = [0];
        for(j=1; j<=w; j++) {//背包容量
            if(weight[i-1] > j) { //当前背包足以装下当前的重量吗？
                arr[i][j] = arr[i-1][j]
            } else {
                arr[i][j] = Math.max(arr[i-1][j], arr[i-1][j-weight[i-1]]+values[i-1])
            }
            
        }
        //
        j=j-1
            //输出
            for(var k=n; k>0; k--) {
                if(arr[k][j] == arr[k-1][j-1]) {
                    a[n] = 1;
                    j = j - weight[k-1]

                } else{
                    a[n] = 0;
                }
            }
    }
    return a;
}
// 0: (11) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// 1: (11) [0, 0, 6, 6, 6, 6, 6, 6, 6, 6, 6]
// 2: (11) [0, 0, 6, 6, 9, 9, 9, 9, 9, 9, 9]
// 3: (11) [0, 0, 6, 6, 9, 9, 9, 9, 11, 11, 14]
// 4: (11) [0, 0, 6, 6, 9, 9, 9, 10, 11, 13, 14]
// 5: (11) [0, 0, 6, 6, 9, 9, 12, 12, 15, 15, 15]

//快速排序 三数取中的优化
function SelectPivot(a, left, right)//选取基准值函数
{
    var mid;
    if (left < right)
    {
        mid = (right - left) / 2;
    }
    else
    {
        return a[left];//在递归调用里走到这一步，肯定是left=right，直接让pivotPos=left
    }

    if (a[mid] > a[right])
    {
       [a[mid], a[right]] =[a[right], a[mid]];
    }
    if (a[left] > a[right])
    {
        [a[left], a[right]] = [a[right], a[left]] ;
    }
    if (a[mid] > a[left])
    {
        [a[mid], a[left]] =[a[left], a[mid]];
    }
    //上面三步完成之后，a[left]就是三个数中最小的那个数
    return a[left];
}

//从n个数字取出m个数 和为sum
https://blog.csdn.net/cr496352127/article/details/79722566
function findSum(a, n, sum) {
    var arr = [new Array(sum+1).fill(0)]; arr[0][0] =1
    for(var i=1; i<=n ;i++) {//第几个商品 i+1行
        arr[i] = [1];
        for(var j=1; j<=sum; j++) {//背包容量
            if(j < a[i]) { //当前背包足以装下当前的重量吗？
                arr[i][j] = arr[i-1][j]
            } else {
                arr[i][j] = arr[i-1][j]+arr[i-1][j-a[i]]
            }
            //
        }
    }
    return arr;
}
//写一个二维数组

function Arr(m, n) {
    var arr = []
    for(var i=0; i<n; i++) {
        arr[i] = [new Array(m).fill(0)]
    }
}

var arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [21,22,23,24,25],
    [31,32,33,34,35],
]
var newArr = []
function circle(row, col, m,n) {
    if(row <=m && col <= n) {
        for(var i =0 ; i<=m; i++) {
            newArr.push(arr[row][i])
        }
        for(var j = row+1; j<=n; j++) {
            newArr.push(arr[j][n])
        }
        //下行
        for(var i2=n-1; i2>=col; i2--) {
            newArr.push(arr[m][i2])

        }
        for(var j2=n-1; i2>=row+1; j2--) {
            newArr.push(arr[j2][col])
        }
    }
    else {
        return;
    }
    circle(arr, row+1, col+1, m-1, n-1)
    
}
var arr = [
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [21,22,23,24,25],
    [31,32,33,34,35],
]
var newArr = []
function circle(row, col, m,n) {
    if(row <=m && col <= n) {
        for(var i =0 ; i<=m; i++) {
            newArr.push(arr[row][i])
        }
        for(var j = row+1; j<=n; j++) {
            newArr.push(arr[j][n])
        }
        //下行
        for(var i2=n-1; i2>=col; i2--) {
            newArr.push(arr[m][i2])

        }
        for(var j2=n-1; i2>=row+1; j2--) {
            newArr.push(arr[j2][col])
        }
    }
    else {
        return;
    }
    circle(arr, row+1, col+1, m-1, n-1)
    
}
https://blog.csdn.net/zz460833359/article/details/47958431



