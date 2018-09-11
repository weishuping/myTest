var it = makeIterator(['a', 'b']);

function makeIterator(arr) {
    var nextIndex = 0
    return {
        next: function() {
            return nextIndex < arr.length? 
            {value: arr[nextIndex++], done: false} :
            {value: undefined, done: true}
        }
    }
}