// recursion
// oh boy!!!

// sigma(n) - return the sum of all (positive) integers from 1 up to n
// n + n - 1 + n - 2 ... + 1
// sigma(3) -> 6
// sigma(4) -> 10

// function sigma(n) {
//     console.log(`called sigma with an argument of ${n}`);
//     if (n == 1) {
//         console.log('n is 1; base case reached');
//         return 1;
//     }
//     result = n + sigma(n - 1);
//     console.log(`call to sigma with argument ${n} is resolving`);
//     return result;
// }

// console.log(sigma(2));

// do these recursively, alright?

// factorial(n) - return factorial n, i.e. n * n - 1 * n - 2 ...  * 1
// written out as n!
// factorial(5) -> 120  (5 * 4 * 3 * 2 * 1)
// factorial(6) -> 720  (6 * 5 * 4 * 3 * 2 * 1)

// Our factorial function


function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1)
}

console.log(factorial(42))


// function fibonacci(n) {
//     if (n == 1) {
//         return 1;
//     }
//     if (n == 0) {
//         return 0;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }

// console.log(fibonacci(42))

// Each number in the sequence is the sum of the two numbers that precede it. So, the sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, and so on. The mathematical equation describing it is Xn+2= Xn+1 + Xn


// console.log(factorial(5))

// fibonacci(n)


// return the nth number in the Fibonacci sequence
// https://en.wikipedia.org/wiki/Fibonacci_number
// fibonacci(0) -> 0
// fibonacci(1) -> 1
// fibonacci(2) -> 1
// fibonacci(3) -> 2
// fibonacci(4) -> 3
// fibonacci(5) -> 5
// fibonacci(6) -> 8
// keep n less than like, 30

// function fibonacci(n) {

// }
// console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));