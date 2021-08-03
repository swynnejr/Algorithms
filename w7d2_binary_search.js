function binarySearch(input, target) {
    // console.log(input);
    //if the input / 2 is equal to the target we return true
    if (input[Math.floor(input.length / 2)] == target) {
        return true;
    }
    //we then check to see if target is less then input / 2, if so we cut it in half, taking the lower half and check again.
    if (target < input[Math.floor(input.length / 2)] && input.length > 1) {
        var newInput = input.slice(0, Math.floor(input.length / 2));
        //   console.log("splitting to left side");
        return binarySearch(newInput, target);
        //we then check to see if target is greater then input / 2, if so we cut it in half, taking the upper half and check again.
    } else if (target > input[Math.floor(input.length / 2)] && input.length > 1) {
        var newInput = input.slice(Math.floor(input.length / 2), input.length);
        //   console.log("splitting to right side");
        return binarySearch(newInput, target);
        //once the input has been cut several times, we check to see if it is an array with 1 item in it and if that item matches the target value
        //if it does, we return true
    } else if (input.length == 1 && input[0] == target) {
        //   console.log("input length is 1 and matches");
        return true;
        //if not, we return false
    } else {
        //   console.log("input length is 1 and does not match");
        return false;
    }
}

function binarySearch2(input, target) {
    if (target < input[0] || target > input[input.length - 1]) {
        return false;
    }
    if (target == input[0] || target == input[input.length - 1]) {
        return true;
    }
    var midpoint = Math.ceil(input.length / 2);
    if (target == input[midpoint]) {
        return true;
    } else if (target < input[midpoint]) {
        input = input.slice(0, midpoint);
        return binarySearch2(input, target);
    } else if (target > input[midpoint]) {
        input = input.slice(midpoint, input.length);
        return binarySearch2(input, target);
    }
}

function binarySearch3(input, target, left = 0, right = input.length - 1) {
    if (left > right) {
        return false;
    }

    midpoint = Math.floor((right + left) / 2);

    if (target == input[midpoint]) {
        return true;
    }

    if (target < input[midpoint]) {
        right = midpoint - 1;
        return binarySearch3(input, target, left, right);
    } else if (target > input[midpoint]) {
        left = midpoint + 1;
        return binarySearch3(input, target, left, right);
    }
}

var test_list = [1, 2, 3, 5, 7, 8, 9, 10, 12, 13, 15, 16];
// missing: 4, 6, 11, 14

console.log(binarySearch(test_list, -11)); // return false
console.log(binarySearch(test_list, 27)); // return false
console.log(binarySearch(test_list, 11)); // return false
console.log(binarySearch(test_list, 6)); // return false

// console.log(binarySearch(test_list, 16))

for (var x of test_list) {
    console.log(binarySearch(test_list, x));
}
