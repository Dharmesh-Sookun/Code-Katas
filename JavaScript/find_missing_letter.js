/* 
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"
(Use the English alphabet with 26 letters!) 
*/

function findMissingLetter(array) {
  const firstLetterCode = array[0].charCodeAt(0);
  let charCodesArr = [firstLetterCode];

  for (let index = 1; index < array.length; index++) {
    const currentLetterCode = array[index].charCodeAt(0);
    if (currentLetterCode - charCodesArr[index - 1] != 1) {
      return String.fromCharCode(currentLetterCode - 1);
    } else {
      charCodesArr.push(currentLetterCode);
    }
  }
}

console.log(findMissingLetter(["O", "Q", "R", "S"]));
