// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    var wordArray = s.split(" ");
    var smallestWord = wordArray[0];
    for (var i = 1; i < wordArray.length; i++) {
      if (wordArray[i].length < smallestWord.length) {
        smallestWord = wordArray[i];
      }
    }
    console.log(smallestWord.length);
    return smallestWord.length;
}
findShort("bitcoin take over the world maybe who knows perhaps")


// Cool solution

// function findShort(s){
//     return Math.min(...s.split(" ").map (s => s.length));
// }