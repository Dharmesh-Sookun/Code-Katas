/* 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

isIsogram("Dermatoglyphics") == true
isIsogram("aba") == false
isIsogram("moOse") == false // -- ignore letter case 
*/

function isIsogram(str) {
  const letterCounts = {};

  for (let index = 0; index < str.length; index++) {
    const currentLetter = str[index];
    if (!letterCounts[currentLetter.toLowerCase()]) {
      letterCounts[currentLetter] = 1;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isIsogram("moOse"));
