/* 
Complete the function/method so that it takes CamelCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If method gets number, it should return string.

Examples:

//  returns test_controller
toUnderscore('TestController');

// returns movies_and_books
toUnderscore('MoviesAndBooks');

// returns app7_test
toUnderscore('App7Test');

// returns "1"
toUnderscore(1); 
*/

function toUnderscore(string) {
  if (typeof string === "number") return string.toString();

  let resultStr = string[0].toLowerCase();
  for (let index = 1; index < string.length; index++) {
    const currentChar = string[index];
    if (/[A-Z]/.test(currentChar) == true) {
      resultStr += "_";
      resultStr += currentChar.toLowerCase();
    } else {
      resultStr += currentChar;
    }
  }
  return resultStr;
}

console.log(toUnderscore("TestController"), "test_controller");
console.log(toUnderscore("MoviesAndBooks"), "movies_and_books");
console.log(toUnderscore("App7Test"), "app7_test");
console.log(toUnderscore(1), "1");
