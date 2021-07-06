
//Reverse string with no Built in functions
// function reverseString(string) {
//     var newString = "";
//     for (var i = string.length - 1; i >= 0; i--) {
//         newString += string[i];
//     }
//     return newString;
// }
// console.log(reverseString('Hello!'))




//Reverse string using built in functions by splitting to an array, then turning it back into a string

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
console.log(reverseString("Hello!"));