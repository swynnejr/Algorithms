function bubbleSort(arr) {
    for (var i = arr.length-1; i > 0; i--) {
        for (var x = 0; x < arr.length; x++) {
            if (arr[x] > arr[x + 1]) {
                var temp = arr[x]
                arr[x] = arr[x + 1]
                arr[x + 1] = temp
            }
        }
    }
    return arr
}


console.log(bubbleSort([23, 12, 18, 22, 21, 1, 13, 25]));



function swap(arr, xp, yp){
    temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

