/* 
ISBN-10 identifiers are ten digits. The first nine digits are on the range 0 to 9. The last digit can be either on the range 0 to 9 or the letter 'X' used to indicate a value of 10.

For an ISBN-10 to be valid, the sum of the digits multiplied by their position has to equal zero modulo 11. For example, the ISBN-10: 1112223339 is valid because:

(((1*1)+(1*2)+(1*3)+(2*4)+(2*5)+(2*6)+(3*7)+(3*8)+(3*9)+(9*10)) % 11) == 0
Complete the validISBN10() function.

validISBN10('1112223339') ; should return true
validISBN10('1234554321') ; should return true
validISBN10('1234512345') ; should return false 
*/

function validISBN10(isbn) {
  if (isbn.length != 10) return false;
  if (!/\d{9}(\d|X)$/.test(isbn)) return false;
  return (
    isbn.split("").reduce((sum, current, i) => {
      if (current === "X") {
        return sum + 10 * (i + 1);
      }
      return sum + +current * (i + 1);
    }, 0) %
      11 ==
    0
  );
}

console.log(validISBN10("1112223339"), true);
console.log(validISBN10("1234554321"), true);
console.log(validISBN10("1234512345"), false);
