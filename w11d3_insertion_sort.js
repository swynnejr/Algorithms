//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/


const insertionRecur = (arr, pos = 1) => {
    if (pos > arr.length - 1){
        return console.log(arr);
    }
    else if (arr[pos] < arr[pos - 1]){
        [arr[pos-1], arr[pos]] = [arr[pos], arr[pos-1]];
        return insertionRecur(arr, pos - 1)
    }
    else {
        return insertionRecur(arr, pos + 1)
    }
}

const insertionSort = (arr)=> {
    for(var i = 1; i < arr.length; i++){
        let j = i
        while(arr[j]< arr[j-1]){
            [arr[j], arr[j-1]]=[arr[j-1], arr[j]]
            j--
        }
    }
    return arr
    }


console.log(insertionSort([4,7,1,2,5,0,9,6])) 