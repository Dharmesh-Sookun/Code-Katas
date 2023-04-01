/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example:
348597 => [7,9,5,8,4,3] 
*/

function digitize(n) {
  const result = [];

  while (n > 0) {
    const last_digit = n % 10;
    result.push(last_digit);
    n = Math.floor(n / 10);
  }
  return result;
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);
console.log(digitize(348597), [7, 9, 5, 8, 4, 3]);
