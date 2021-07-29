// Empty
// [0]
// [1]
// [2]
// [3]
// [0,1]
// [0,2]
// [0,3]
// [1,2]
// [1,3]
// [2,3]
// [0,1,2]
// [0,1,3]
// [0,2,3]
// [1,2,3]
// [0,1,2,3]

// inOrderCombinations(input, ...? output)
// input is a string
// return an array with all strings you could make with the characters from the
// given input, in the order that they're presented (i.e. the order they appear in
// the input)
// (output array order doesn't matter)
// "abc" -> ["", "c", "b", "bc", "a", "ac", "ab", "abc"] (8)
// "zhk" -> ["", "z", "h", "k", "hk", "zh", "zk", "zhk"] (8)
// "hjj" -> ["", "h", "j", "j", "hj", "hj", "jj", "hjj"]
// "tkps" -> ["", "t", "k", "p", "s", "tk", "tp", "ts", "kp", "ks", "ps",
// "tkp", "tks", "tps", "kps", "tkps"] (16)
// make sure to use recursion (probably going to call it twice)
// input of length n leads to 2^n output elements
// every character in the output appears with equal occurance
// test with at least 4 characters in input, no more than 6
// new note: no need to check contents of output


function inOrderCombinations(input, output = [], position = 0, partial = '') {
    // remember that you may need some more parameters above

    if (position == input.length) {
        output.push(partial);
    }

    else {
        inOrderCombinations(input, output, position + 1, partial + input[position]);
        inOrderCombinations(input, output, position + 1, partial);
    }

    return output;
}

var result = inOrderCombinations('zqh');

// console.log(result);
// console.log(result.length);

function inOrderSubsets(str, solutions = [], partial = "") {
    solutions.push(partial);

    for (let i = 0; i < str.length; i++) {
        const sliced = str.slice(i + 1);
        console.log(`sliced: ${sliced}, partial: ${partial}, str[i]: ${str[i]}`)
        inOrderSubsets(sliced, solutions, partial + str[i]);
    }

    return solutions;
}

var result = inOrderSubsets('zqh');