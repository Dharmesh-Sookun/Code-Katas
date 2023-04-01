/* 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

Examples:
toWeirdCase( "String" );//=> returns "StRiNg"
toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

function toWeirdCase(string) {
  const array_strings = string.split(" ");
  let resultStr = "";
  for (let index_word = 0; index_word < array_strings.length; index_word++) {
    const current_word = array_strings[index_word];
    for (
      let index_letter = 0;
      index_letter < current_word.length;
      index_letter++
    ) {
      const current_letter = current_word[index_letter];
      if (index_letter % 2 == 0) {
        resultStr += current_letter.toUpperCase();
      } else {
        resultStr += current_letter.toLowerCase();
      }
    }
    if (index_word != array_strings.length - 1) {
      resultStr += " ";
    }
  }
  return resultStr;
}

console.log(toWeirdCase("Weird string case"), "WeIrD StRiNg CaSe");
console.log(toWeirdCase("String"), "StRiNg");
console.log(toWeirdCase("This"), "ThIs");
console.log(toWeirdCase("is"), "Is");
console.log(toWeirdCase("This is a test"), "ThIs Is A TeSt");
