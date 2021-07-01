function reverse(arr) {
    for(var i=0; i<Math.trunc(arr.length/2); i++){
        console.log(arr);
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        
    }
    console.log(arr);
}
reverse(["a", "b", "c", "d", "e"]);
reverse([1, 2, 3, 4, 5, 6]);

