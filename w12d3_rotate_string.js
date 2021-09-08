// rotating a string to see if it is a rotation of another
    // create a new string rotated by number chars
    // if number > string.length, modulo string.length

const rotateString = (string, number) => {
    let output = "";
    let rotations = number%string.length;
    for (let i = 1; i <= rotations; i++) {
        output = string[string.length-i] + output;
    }
    for (let i = 0; i < string.length - rotations; i++) {
        output += string[i];
    }
    return output;
    }


rotateStr("basketball", 3) // allbasketb

rotateStr("hello", 2) //lohell

rotateStr("okay", 7) //yoka  //ayok //kayo //okay //yoka //ayok //kayo