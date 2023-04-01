/* 
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer 
preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None 
(return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example,
return 25! = "15511210043330985984000000" as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language. 
*/

class BigInt {
  constructor(n) {
    this.digits = Array.isArray(n)
      ? n
      : n.toString().split("").reverse().map(Number);

    this.mulInt = function (n) {
      var digits = this.digits;
      var result = [];
      var carry = 0;
      for (var i = 0; i < digits.length; i++) {
        var prod = carry + n * digits[i];
        var d = prod % 10;
        carry = (prod - d) / 10;
        result.push(d);
      }
      if (carry > 0)
        result.push.apply(
          result,
          carry.toString().split("").reverse().map(Number)
        );
      return new BigInt(result);
    };

    this.toString = function () {
      return this.digits.reverse().join("");
    };
  }
}

function factorial(n) {
  var result = new BigInt(1);
  for (var i = 1; i <= n; i++) result = result.mulInt(i);
  return result.toString();
}

console.log(factorial(25));
