var arr2d = [   [2, 5, 8],
                [3, 6, 1],
                [5, 7, 7],
                [3, 9, 0, -2] ];

// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


// function to determine if a value is present
function isPresent2d(arr, value) {
    // create boolean variable to track if the value is found, default is false, changes to true if found
    var isPresent = false;
    // first loop to check through the outer array
    for (let i = 0; i < arr.length; i++) {
        // inner loop to check inner array
        for (let j = 0; j < arr[i].length; j++) {
            // check if the element is equivalent to the inputted value
            if (arr[i][j]==value) {
                // console.log the position if it is
                console.log(`Value is present at position [${i}][${j}].`);
                // template literal for easier text, not:
                // console.log("this is text [" + variable + "] more text [" + anotherVariable + "].")
                // set the tracker variable to true so the not found msg is not logged
                isPresent = true;
                return isPresent;
            }
        }
    }
    // check if the tracker is still false (value not found)
    // if (isPresent == false) {
        // log that the value was not found
        console.log("I'm sorry, that value is not present.")
    

    return isPresent;
}
;
console.log(isPresent2d(arr2d, 3));


// Given a 2 dimensional array (an array containing arrays), return a new array containing just the values from inside the sub-arrays.
function arrFlatten(arr) {
    // create new array
    var newArr = [];
    // first loop to check through the outer array
    for (let i = 0; i < arr.length; i++) {
        // inner loop to check inner array
        for (let j = 0; j < arr[i].length; j++) {
            // push the value to the new array
            newArr.push(arr[i][j]);
        }
    }
    // return the new array
    return newArr;
    // log the new array
    // console.log(newArr);
}

// console.log the return
console.log(arrFlatten(arr2d));

// call the function when it is set to console instead of return
// arrFlatten(arr2d);