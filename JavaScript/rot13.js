/* 
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation". 
*/

function rot13(message) {
  let encodedText = "";
  for (let index = 0; index < message.length; index++) {
    const currentLetterCode = message[index].charCodeAt(0);
    if (currentLetterCode >= 65 && currentLetterCode <= 90) {
      if (currentLetterCode > 77) {
        encodedText += String.fromCharCode(currentLetterCode + 13 - 26);
      } else {
        encodedText += String.fromCharCode(currentLetterCode + 13);
      }
    } else if (currentLetterCode >= 97 && currentLetterCode <= 122) {
      if (currentLetterCode > 109) {
        encodedText += String.fromCharCode(currentLetterCode + 13 - 26);
      } else {
        encodedText += String.fromCharCode(currentLetterCode + 13);
      }
    } else {
      encodedText += String.fromCharCode(currentLetterCode);
    }
  }
  return encodedText;
}

console.log(rot13("test"), "grfg");
console.log(rot13("Test"), "Grfg");
