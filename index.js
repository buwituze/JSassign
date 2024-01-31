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

function largestPrimeFactor(number) {

}

// 4. Largest Palindrome Product: A palindromic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers
// is 9009=91×99. Find the largest palindrome made from the product of two 3-
// digit numbers

function largestP(){
    
}
