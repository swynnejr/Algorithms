// Pseudo Code

//Create function that takes in a target 2d array

arr = [[1,3,2,3],[2,2,5,8],[5,9,3,6]]
target = [[3,2],[5,8]]


function matrix(arr, target){
    tOne = target[0][0]
    for(x in arr){
        for(y in arr[x]){
            if(tOne == arr[x][y]){
                console.log(x,y)
                if (target[0][1]==arr[x][y+1]){
                    if (target[1][0]==arr[x+1][y]){
                        if(target[1][1]==arr[x+1][y+1]){
                            return true
                        }
                    }
                }
            }
        }
    } return false
}

matrix(arr,target)

// Marks answer

// function matrixSearch(arr, pattern) {
//     // loop through for the first element
//     for (i=0; i < arr.length-1; i++) {
//         for (j=0; j < arr.length-1; j++) {
//             // look for the first pattern match
//             if (arr[i][j] = pattern[0][0]) {
//                 // check the next one
//                 // console.log("Match",arr[i][j], pattern[0][0])
//                 if (arr[i+1][j] == pattern[1][0]) {
//                     // console.log("2nd Match", arr[i+1][j], pattern[1][0])
//                     if ((arr[i][j+1]) == (pattern[0][1])) {
//                         // console.log("3rd Match", arr[i][j+1], pattern[0][1])
//                         if ((arr[i+1][j+1]) == (pattern[1][1])) {
//                             //console.log("4th Match", arr[i+1][j+1], pattern[1][1])
//                             return true;
//                     }
//                 }
//             }
//         }
//     }
//     return false;
// }
// }
// array1 = [ [12,34,45,56],
//            [98,87,76,65],
//            [56,67,78,89],
//            [54,43,32,21]
// ]
// pattern = [[67,78],
//           [43,63]]

// console.log(matrixSearch(array1,pattern))