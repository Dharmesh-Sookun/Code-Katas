/* You need to play around with the provided string (s).

Move consonants forward 9 places through the alphabet. If they pass 'z', start again at 'a'.

Move vowels back 5 places through the alphabet. If they pass 'a', start again at 'z'. For our Polish friends this kata does not count 'y' as a vowel.

Exceptions:

If the character is 'c' or 'o', move it back 1 place. For 'd' move it back 3, and for 'e', move it back 4.

If a moved letter becomes 'c', 'o', 'd' or 'e', revert it back to it's original value.

Provided string will always be lower case, won't be empty and will have no special characters. */

function vowelBack(string) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };
  let result = "";
  for (let i = 0; i < string.length; i++) {
    const currentChar = string[i];
    if (currentChar == "c" || currentChar == "o") {
      result += alphabets.charAt(alphabets.indexOf(currentChar) - 1);
    } else if (currentChar == "d" || currentChar == "e") {
      result += "a";
    } else if (vowels[currentChar]) {
      let index = alphabets.indexOf(currentChar) - 5;
      if (index < 0) index += 26;
      const newChar = alphabets.charAt(index);
      if (newChar == "c" || newChar == "o" || newChar == "d" || newChar == "e")
        result += currentChar;
      else result += newChar;
    } else {
      let index = (alphabets.indexOf(currentChar) + 9) % 26;
      const newChar = alphabets.charAt(index);
      if (newChar == "c" || newChar == "o" || newChar == "d" || newChar == "e")
        result += currentChar;
      else result += newChar;
    }
  }
  return result;
}

console.log(vowelBack("testcase") == "tabtbvba");
console.log(vowelBack("codewars") == "bnaafvab");
console.log(vowelBack("exampletesthere") == "agvvyuatabtqaaa");
