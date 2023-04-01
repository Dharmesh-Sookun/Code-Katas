/* Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9". */

function sumStrings(a, b) {
  if (a.length > b.length) {
    while (b.length != a.length) {
      b = "0" + b;
    }
  } else if (a.length < b.length) {
    while (a.length != b.length) {
      a = "0" + a;
    }
  }

  let result = "";
  let carry = 0;

  for (let index = a.length - 1; index >= 0; index--) {
    const a_num = +a[index];
    const b_num = +b[index];
    const sum = a_num + b_num + carry;

    if (sum > 9) {
      const digit = sum % 10;
      carry = Math.floor(sum / 10);
      result = digit + result;
    } else {
      result = sum + result;
      carry = 0;
    }
  }

  result = `${carry}${result}`;

  while (result[0] == "0") {
    result = result.slice(1);
  }

  return result;
}

console.log(sumStrings("123", "456"), "579");
console.log(sumStrings("789", "456"), "1245");
console.log(sumStrings("999", "1"));
console.log(sumStrings("12345", "789"));
console.log(sumStrings("100000000000000000000", "23"));
