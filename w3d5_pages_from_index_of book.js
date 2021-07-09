// bookIndex(input)
// input is an array of integers (in order) representing pages in a book
// where a given term is found, and the output is a string suitable
// for printing in a book's index
// if the input is [58, 104, 105, 106, 192, 194, 195, 196]
// the output is: "58, 104-106, 192, 194-196"
// if the input is [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18]
// the output is: "1-5, 8-12, 15, 17-18"

// suggestion: break this into two parts, or maybe even two
// functions - get your array of integers and turn it into an array
// of strings, then turn that array of strings into a single string
// [58, 104, 105, 106, 192, 194, 195, 196]
// ["58", "104-106", "192", "194-196"]
// "58, 104-106, 192, 194-196"

// does not handle:
// [ix, x, xi, 1, 2, 3, 7, 8, 9, 32a, 47b, 48b]
// also a suggestion: remember that you can modify your for loop iterator
// during your loop! you can add to or subtract from i at any point



console.log(bookIndex([58, 104, 105, 106, 107, 192, 194, 195, 201]));
console.log(bookIndex([1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 17, 18]));

function bookIndex(array) {
    // create variables for an array that groups consecutive pages together, and has a START number and END number
    var ranges = [];
    var rstart;
    var rend;
    // iterate through the array, looking for consecutive pages
    for (var i = 0; i < array.length; i++) {
    //if the pages dont have consecutive pages we dont have to manipulate them for now
        rstart = array[i];
        rend = rstart;
        // This will seek out consecutive numbers
        while (array[i + 1] - array[i] == 1) {
            rend = array[i + 1]; // increment the index if the numbers sequential
            i++;
        }
        // Pushes individual numbers in on their own
        if (rstart == rend){
            ranges.push(rstart+'')
        // Pushes ranges connected by hyphen
        } else {
            ranges.push(rstart + '-' + rend)
        }
    }
    return ranges;
}

console.log(bookIndex([2,3,4,5,10,18,19,20]));
  // returns ["2-5", "10", "18-20"]
console.log(bookIndex([1,2,3,5,7,9,10,11,12,14 ]));
  // returns ["1-3", "5", "7", "9-12", "14"]
console.log(bookIndex([1,2,3,4,5,6,7,8,9,10]));
  // returns ["1-10"]