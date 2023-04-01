/* 
In this Kata, you will be given a number and your task will be to return the nearest prime number.

solve(4) = 3. The nearest primes are 3 and 5. If difference is equal, pick the lower one. 
solve(125) = 127
We'll be testing for numbers up to 1E10. 500 tests.

More examples in test cases.

Good luck! 
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

function solve(n) {
  if (isPrime(n)) return n;
  let n_prime_min = n;

  while (!isPrime(n_prime_min)) {
    n_prime_min--;
  }

  let n_prime_max = n;

  while (!isPrime(n_prime_max)) {
    n_prime_max++;
  }

  if (n_prime_max - n < Math.abs(n_prime_min - n)) return n_prime_max;
  return n_prime_min;
}

// console.log(solve(3), 3);
// console.log(solve(11), 11);
// console.log(solve(4), 3);
// console.log(solve(110), 109);
// console.log(solve(1110), 1109);
// console.log(solve(3000), 2999);
// console.log(solve(35000), 34981);
// console.log(solve(350000), 350003);
// console.log(solve(3500000), 3499999);
// console.log(solve(10000000000), 10000000019);
