let arr1 = [5,7,3,2,9,1,4]


// this DOES NOT work

function selectionSort(arr) {
    for (var i = arr.length-1; i > 0; i--) {
        for (var x = 0; x < arr.length; x++) {
            let bigIndex;
            let bigVal = arr[0];
            if (arr[x] > bigVal) {
                bigIndex = x;
            }
        }
        while (x == i){
            var small = arr[x]
            arr[x] = bigVal
            arr[bigIndex] = small
        }
    }
    return arr
}



console.log(selectionSort(arr1))