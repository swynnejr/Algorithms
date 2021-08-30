

function swap(arr, xp, yp){
    temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}



[arr[i], arr[i+1]]=[arr[i+1], arr[i]]