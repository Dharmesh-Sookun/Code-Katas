/* 
Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]

...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array. 
*/

const squares = (n) => Array.from({ length: n }, (_, i) => (i + 1) ** 2);

const range = (n, start, step) => {
  const result = [start];
  while (result.length != n) {
    result.push(start + step);
    start = start + step;
  }
  return result;
};

const random = (n, min, max) => {
  const result = [];
  while (result.length != n) {
    result.push(Math.floor(Math.random() * (max + 1 - min) + min));
  }
  return result;
};

function isPrime(num) {
  if (num <= 3) {
    return num > 1;
  } else if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
    i += 6;
  }
  return true;
}

const primes = (n) => {
  const result = [];
  let number = 2;

  while (result.length != n) {
    if (isPrime(number)) result.push(number);
    number++;
  }

  return result;
};

// console.log(squares(5), [1, 4, 9, 16, 25]);

// console.log(range(6, 3, 2), [3, 5, 7, 9, 11, 13]);

// const rands = random(4, 5, 10);
// console.log(rands.length, 4);
// console.log(Math.max.apply(null, rands) <= 10);
// console.log(Math.min.apply(null, rands) >= 5);
console.log(primes(6), [2, 3, 5, 7, 11, 13]);

console.log(random(6, 10, 45));

console.log(primes(21));

console.log(isPrime(25));
