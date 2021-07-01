var myArr=[1,2,3,4,5]

function reverse(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr.push(arr[arr.length-1-i])
        arr.shift()
    }
    return arr
}

console.log(reverse(myArr))

console.log(4)
