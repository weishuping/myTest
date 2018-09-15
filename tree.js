/**
 * <div class="root">
    <div class="container">
        <section class="sidebar">
            <ul class="menu"></ul>
        </section>
        <section class="main">
            <article class="post"></article>
            <p class="copyright"></p>
        </section>
    </div>
</div>

 */
//.children返回HTMLCollection
//childNodes返回NodeList
//广度优先遍历  使用队列实现 需要注意 childNodes 和 children的区别
//终止条件：队列为空；
const tranverse = (root) => {
    if(!root) {
        return;
    }
    let queue = [root]
    while(queue.length) {
        //出队列
        let first = queue.shift();
        console.log(first.tagName)
        //如果孩子不为空
        if(!first.children.length) {
            continue
        }
        //进队列
        Array.prototype.slice.call(first.children).forEach(element => {
            queue.push(element)
        });
    }
}

//深度遍历  递归

const deepTranverse = (root) => {
    if(root) {
        console.log(root.tagName)
        var a = root.children;
        for(var i=0; i<a.length; i++) {
            deepTranverse(a[i])
        }
    }
    
}
