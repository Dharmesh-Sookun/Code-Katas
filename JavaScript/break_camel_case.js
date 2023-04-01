/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing" 
*/

function solution(string) {
  let resultStr = "";
  for (let index = 0; index < string.length; index++) {
    const currentChar = string[index];
    if (/[A-Z]/.test(currentChar)) {
      resultStr += " ";
      resultStr += currentChar;
    } else {
      resultStr += currentChar;
    }
  }
  return resultStr;
}

function solution(string) {
  return Array.prototype.reduce.call(
    string,
    (result, character) => {
      if (/[A-Z]/.test(character)) {
        return result + " " + character;
      }
      return result + character;
    },
    ""
  );
}

function solution(string) {
  return Array.prototype.reduce.call(
    string,
    (result, character) => {
      return /[A-Z]/.test(character)
        ? result + " " + character
        : result + character;
    },
    ""
  );
}
console.log(solution("camelCasing"), "camel Casing");
console.log(solution("camelCasingTest"), "camel Casing Test");
