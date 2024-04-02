// You are tasked with writing a function that takes an array of numbers as input 
// and returns a new array containing only the prime numbers from the original array.
//  How would you implement this function efficiently,
//  ensuring that it accurately identifies prime numbers and returns them in the same order they appear in the input array?
//  For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].



function isPrime(num) {
    // iterates through numbers from 2 to num - 1
    for ( let i = 2; i < num; i++ ) {
    // checks if num is divisible by any number in that range
        if ( num % i === 0 ) {
    //If divisor is found returns false
            return false;
        }
    }
    //If divisor is not found returns true
    return true;
}

function display(n) {
    //Initializes the array wth the first prime no
    let arr = [2];
    //Iterates through odd numbers starting from 3
    for ( let i = 3; i < n; i+=2 ) {
    //Calls isPrime function to check if each number is prime
        if ( isPrime(i) ) {
    //if returns true it pushes the number into the arr
            arr.push(i);
        }
    }
    //logs the array
    console.log(arr); 
}

display(10);