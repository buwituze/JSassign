// 1.Multiples of 3 or 5: If we list all the natural numbers below 10 that are multiples of 3 or
// 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum all the multiples of
// 3 or 5 below 1000.

function calculatingSum(){
    let sum = 0;
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum +=i;
        }
    }
    console.log(sum);
}
calculatingSum();

// 2. Even Fibonacci Numbers: Each new term in the Fibonacci sequence is generated
// by adding the previous two terms. By starting with 1 and 2, the first 10 terms
// will be: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, .....
// By considering the terms in the Fibonacci sequence whose values do not
// exceed four million, find the sum of the even-valued terms.

function sumEvenFib(){
    let prenbr = 1;
    let curnbr = 2;
    let sum = 0;

    while (curnbr <= 4000000) {
        if (curnbr % 2 === 0) {
            sum += curnbr;
        }
        const next = prenbr + curnbr;
        prenbr = curnbr;
        curnbr = next;
    }

    console.log(sum);
}
sumEvenFib();

// 3.  Largest Prime Factor: The Prime factors of 13195 are 5, 7, 13 and 29. What is the largest
// prime factor of the number 600851475143?

function largestPF(num) {

        let factor = 2;
        while (factor <= num) {
            if (num % factor === 0) {
                num /= factor;
            } else {
                factor++;
            }
        }
        return factor;
    }

    console.log(largestPF(600851475143));
    

// 4. Largest Palindrome Product: A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers
// is 9009=91×99. Find the largest palindrome made from the product of two 3-
// digit numbers.

function isPalindrome(n) {
    const str = n.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

let largestPalindrome = 0;

for (let i = 100; i < 1000; i++) {
    for (let j = 100; j < 1000; j++) {
        let product = i * j;
        if (isPalindrome(product) && product > largestPalindrome) {
            largestPalindrome = product;
        }
    }
}

console.log("The largest palindrome:", largestPalindrome);


// 5. Smallest Multiple:
// 2520 is the smallest number that can be divided by each of the numbers
// from 1 to 10 without any remainder. What is the smallest positive number that
// is evenly divisible by all of the numbers from 1 to 20?

function smallestMultiple() {
    let number = 2520; 
    while (true) {
        let divisible = true;
        for (let i = 11; i <= 20; i++) {
            if (number % i !== 0) {
                divisible = false;
                break;
            }
        }
        if (divisible) {
            return number;
        }

        number += 2520; 
    }
}

console.log(smallestMultiple());
