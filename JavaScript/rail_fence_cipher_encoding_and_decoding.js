/* Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

W       E       C       R       L       T       E
  E   R   D   S   O   E   E   F   E   A   O   C  
    A       I       V       D       E       N    
The encoded string would be:

WECRLTEERDSOEEFEAOCAIVDEN
Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string. */

function encodeRailFenceCipher(string, numberRails) {
  let rail = "";
  let numOfSpaces = 0;
  let position = 0;

  for (let i = 0; i < string.length; i++) {
    for (j = 0; j < numOfSpaces; j++) {
      rail += " ";
    }
    if (i === 0) {
      if (string.charAt(i) == " ") {
        rail += "<SPACE>";
      } else {
        rail += string.charAt(i);
      }
    } else {
      for (let l = 0; l < numberRails; l++) {
        rail += " ";
      }
      if (string.charAt(i) == " ") {
        rail += "<SPACE>";
      } else {
        rail += string.charAt(i);
      }
    }
    for (let k = 0; k < position; k++) {
      rail += "\n";
    }
    numOfSpaces++;
    if (numOfSpaces >= numberRails) numberOfSpaces = 0;
    position = position % numberRails;
  }
  console.log(rail);
}

function decodeRailFenceCipher(string, numberRails) {
  // code
}

console.log(
  encodeRailFenceCipher("WEAREDISCOVEREDFLEEATONCE", 3),
  "WECRLTEERDSOEEFEAOCAIVDEN"
);
console.log(
  decodeRailFenceCipher("WECRLTEERDSOEEFEAOCAIVDEN", 3),
  "WEAREDISCOVEREDFLEEATONCE"
);
// console.log(encodeRailFenceCipher("Hello, World!", 3), "Hoo!el,Wrdl l");
