/* 
Consider the prime number 23. If we sum the square of its digits we get: 2^2 + 3^2 = 13, then for 13: 1^2 + 3^2 = 10, and finally for 10: 1^2 + 0^2 = 1.

Similarly, if we start with prime number 7, the sequence is: 7->49->97->130->10->1.

Given a range, how many primes within that range will eventually end up being 1?

The upperbound for the range is 50,000. A range of (2,25) means that: 2 <= n < 25.

Good luck! 
*/

/**
 *
 * NOT WORKING!!!!!!!
 */

function isPrime(num) {
  if (num <= 3) {
    return num > 1;
  } else if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  let i = 5;
  while (i * i < num) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

function sumOfDigitsSquares(digitsArr) {
  return digitsArr.reduce((total, current) => total + current ** 2, 0);
}

function solve(a, b) {
  let count = 0;
  for (let i = a; i < b; i++) {
    if (isPrime(i)) {
      let i_cpy = i;
      let sum = 0;
      do {
        const digits = [...(i_cpy + "")].map((val) => Number(val));
        if (digits.length > 3) break;
        sum = sumOfDigitsSquares(digits);
        i_cpy = sum;
      } while (sum != 1);
      if (sum == 1) count++;
    }
  }
  return count;
}

// console.log(sumOfDigitsSquares([1, 0]));

console.log(solve(1, 4));
// console.log(solve(100, 1000), 28);
// console.log(solve(100, 2000), 47);
// console.log(solve(100, 3000), 65);
// console.log(solve(100, 4000), 95);
