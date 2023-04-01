/* Task
Given a string representing a simple fraction x/y, your function must return a string representing the corresponding mixed fraction in the following format:

[sign]a b/c

where a is integer part and b/c is irreducible proper fraction. There must be exactly one space between a and b/c. Provide [sign] only if negative (and non zero) and only at the beginning of the number (both integer part and fractional part must be provided absolute).

If the x/y equals the integer part, return integer part only. If integer part is zero, return the irreducible proper fraction only. In both of these cases, the resulting string must not contain any spaces.

Division by zero should raise an error (preferably, the standard zero division error of your language).

Value ranges
-10 000 000 < x < 10 000 000
-10 000 000 < y < 10 000 000
Examples
Input: 42/9, expected result: 4 2/3.
Input: 6/3, expedted result: 2.
Input: 4/6, expected result: 2/3.
Input: 0/18891, expected result: 0.
Input: -10/7, expected result: -1 3/7.
Inputs 0/0 or 3/0 must raise a zero division error.
Note
Make sure not to modify the input of your function in-place, it is a bad practice. */

function gcd(numerator, denominator) {
  if (!denominator) return numerator;
  return gcd(denominator, numerator % denominator);
}

function mixedFraction(s) {
  const numerator = s.split("/")[0];
  const denominator = s.split("/")[1];

  if (Number(denominator) == 0) throw new Error("Cannot divide by 0!");

  if (Number(numerator) % Number(denominator) == 0)
    return `${Number(numerator) / Number(denominator)}`;

  let isSigned = null;

  if (
    (numerator[0] == "-" && denominator[0] != "-") ||
    (numerator[0] != "-" && denominator[0] == "-")
  ) {
    isSigned = true;
  } else {
    isSigned = false;
  }

  let result = "";

  if (isSigned) result += "-";

  const a = Math.floor(
    Math.abs(Number(numerator)) / Math.abs(Number(denominator))
  );

  if (a != 0) result += a;

  let newNum = Math.abs(Number(numerator)) % Math.abs(Number(denominator));
  let newDen = Math.abs(Number(denominator));

  const divisor = gcd(newNum, newDen);

  newNum /= divisor;
  newDen /= divisor;

  if (newNum % newDen == 0) {
    result = result + newNum / newDen;
  } else {
    if (a > 0) result = result + " " + newNum + "/" + newDen;
    else result = result + newNum + "/" + newDen;
  }

  return result;
}

console.log(mixedFraction("42/9"), "4 2/3");
console.log(mixedFraction("6/3"), "2");
console.log(mixedFraction("1/1"), "1");
console.log(mixedFraction("11/11"), "1");
console.log(mixedFraction("4/6"), "2/3");
console.log(mixedFraction("0/18891"), "0");
console.log(mixedFraction("-10/7"), "-1 3/7");
console.log(mixedFraction("-22/-7"), "3 1/7");
console.log("Must raise ZeroDivisionError", function () {
  mixedFraction("0/0");
});
console.log("Must raise ZeroDivisionError", function () {
  mixedFraction("3/0");
});
