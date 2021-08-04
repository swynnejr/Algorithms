// Here is Isabella's code that was demonstrated

dup = true;
function deleteduplicates(arr) {

    var newarr = [];

    for (var i = 0; i < arr.length; i++) {

    var dup = false;
     for (var x = 0; x < newarr.length; x++) {
        if (arr[i] == newarr[x]) {
            dup = true;
        }
     }
    if (!dup) {
        newarr.push(arr[i])
    }

    }

    return newarr
}

arr = [3, 4, 7, 1, 3, 1, 1, 1, 4]

console.log((deleteduplicates(arr)))


// THIS DOESNT WORK
// BUT HERE IS OUR PROGRESS

// arr = [1, 2, 1, 3, 4, 2]

// // Array: Remove duplicates
// function removeDupes(arr) {
//     // Create variable "check" to compare to new array before adding values to new array
//     var check = 0
//     // Create new empty array
//     newArr = []
//     // DEBUG TEST
//     console.log(arr)
//     for (var i = 0; i < arr.length; i++) {
//         // Iterate through original array and put each value in "check"
//         check = arr.pop();
//         // DEBUG TEST
//         console.log(check)
//         for (var j = 0; j < newArr.length; j++) {
//             // Compare check to new array, if value not present add it to the array
//             if (check == newArr[j]){
//                 // DEBUG TEST
//                 console.log(newArr)
//             }
//         }
//         newArr.push([j])

//     }
//     return newArr
// }

// console.log(removeDupes([1, 2, 1, 3, 4, 2]))
// console.log(newArr)