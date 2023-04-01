/* 
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must 
return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives 
*/

function add(a, b) {
  let sum = ""; // our result will be stored in a string.

  // we'll need these in the program many times.
  let str1Length = a.length;
  let str2Length = b.length;

  // if s2 is longer than s1, swap them.
  if (str2Length > str1Length) {
    let temp = b;
    b = a;
    a = temp;
  }

  let carry = 0; // number that is carried to next decimal place, initially zero.
  let num1;
  let num2;
  let temp;
  let digitSum;
  for (let i = 0; i < a.length; i++) {
    num1 = parseInt(a.charAt(a.length - 1 - i)); // get ith digit of str1 from right, we store it in a
    num2 = parseInt(b.charAt(b.length - 1 - i)); // get ith digit of str2 from right, we store it in b
    num2 = num2 ? num2 : 0; // make sure b is a number, (this is useful in case, str2 is shorter than str1
    temp = (carry + num1 + num2).toString(); // add a and b along with carry, store it in a temp string.
    digitSum = temp.charAt(temp.length - 1); //
    carry = parseInt(temp.substr(0, temp.length - 1)); // split the string into carry and digitSum ( least significant digit of abSum.
    carry = carry ? carry : 0; // if carry is not number, make it zero.

    sum = i === a.length - 1 ? temp + sum : digitSum + sum; // append digitSum to 'sum'. If we reach leftmost digit, append abSum which includes carry too.
  }

  return sum; // return sum
}
