// THIS IS JESSICA'S FUNCTION

function removeDupe(arr){
    for(i = 0; i < arr.length; i++){
        x = arr[i]
        for (j = i+1; j < arr.length - 1; j++){
            if(arr[j] == x){
                var z = arr.length-1
                var temp = arr[j]
                arr[j] = arr[z]
                arr[z] = temp
                z--
                arr.pop(arr[z])
            }
        }
    }
    return arr
}


// THIS DOESNT WORK
// BUT ITS WHAT I WROTE

dup = true;
function deleteduplicates(arr) {

    for (var x = 0; x < arr.length; x++) {
        // while (x = 0){
        var dup = false;
        for (var y = arr.length - 1; y > x; y--) {
            if (arr[x] == arr[y] && x != y) {
                dup = true;
            }
        }
        if (!dup) {
            temp = arr[x];
            arr[x] = arr[arr.length - 1];
            arr[arr.length] = temp;
            arr.pop();
            x -= 1;
        }
    }
    return arr
}

arr = [3, 4, 7, 1, 3, 1, 1, 1, 4]

console.log((deleteduplicates(arr)))