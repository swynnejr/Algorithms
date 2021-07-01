// functions
// series of steps to solve a problem

// no dashes or spaces in the name
// camel case: lower case first letter/first word, ever other word is upper case first letter
// a function can have multiple parameters
function sayHello (parameters) {
    console.log("Hello!");
}
// calling function in the parentheses is called an argument
sayHello();

function printMaxOfArray (arr) {
    // set counter to first value (not 0 in case everything is negative)
    var max = arr[0];
    // for loop to check the next numbers in the array
    for (var i=1; i<arr.length;i++) {
        // check if the value is greater than max
        if (arr[i]>max) {
            // if it is greater, set max to that value
            max = arr[i];
        }
    }
    // print the result allows you to see it
    console.log(max);
    // return the result allows you to use it
    return max;
}

printMaxOfArray([-2, -9, -3, -1, -8]);

var x = 5;
    
function addToX(amount) {
    return x + amount;
    // anything after the return is ignored
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);
