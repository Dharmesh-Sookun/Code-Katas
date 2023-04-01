/* 
Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. 
The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors 
is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two 
elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
The form of the examples may change according to the language, see Example Tests: for more details.

Note

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing 
whitespace: you can use dynamically allocated character strings. 
*/

function listSquared(m, n) {
  let startVal = m;
  let endVal = n;
  let result = [];

  for (let currentVal = startVal; currentVal <= endVal; currentVal++) {
    let factors = [];
    let sum = 0;

    for (let factor = 1; factor <= currentVal; factor++) {
      if (currentVal % factor == 0) {
        factors.push(factor);
      }
    }

    let squaredFactors = factors.map((factor) => factor * factor);

    squaredFactors.forEach((squaredFactor) => (sum += squaredFactor));

    const sqrt_sum = Math.floor(Math.sqrt(sum));

    if (sqrt_sum * sqrt_sum == sum) {
      result.push([currentVal, sum]);
    }
  }

  return result;
}

console.log(listSquared(42, 250));
