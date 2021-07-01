var random = Math.random();
console.log(random);
console.log(Math.PI);


function d6() {
    var roll = Math.random();
    // your code here
    roll = Math.ceil(roll * 6);
    return roll;
}
    
var playerRoll = d6();
// template literal
// select what you want to bookend, then hit back tick ` or double quotes ""
// variables or expressions must be encapsulated with curly braces and dollar sign
console.log(`The player rolled: ${playerRoll}`);

console.log("The player rolled: " + playerRoll);




function oracle(){
    // create array with possible answers
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];
    // select a random number between 0 and length of array-1
    // random and floor are used to get 0 and arr.length - 1
    var luck = Math.floor(Math.random()*lifesAnswers.length);
    // log/return that element in the array
    console.log(`The oracle says: ${lifesAnswers[luck]}`);
    return(lifesAnswers[luck]);
}
oracle();