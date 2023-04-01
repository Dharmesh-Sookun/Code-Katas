/* 
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"

sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be. 
*/

function SubstitutionCipher(abc1, abc2) {
  this.abc1_obj = mapToObject(abc1);
  this.abc2_obj = mapToObject(abc2);

  this.encode = function (str) {
    let encoded = "";
    for (let i = 0; i < str.length; i++) {
      const currentAlphabet = str[i];
      const currentAlphabetIndex = this.abc1_obj[currentAlphabet];
      if (currentAlphabetIndex != undefined) {
        encoded += abc2[currentAlphabetIndex];
      } else {
        encoded += currentAlphabet;
      }
    }
    return encoded;
  };
  this.decode = function (str) {
    let decoded = "";
    for (let i = 0; i < str.length; i++) {
      const currentAlphabet = str[i];
      const currentAlphabetIndex = this.abc2_obj[currentAlphabet];
      if (currentAlphabetIndex != undefined) {
        decoded += abc1[currentAlphabetIndex];
      } else {
        decoded += currentAlphabet;
      }
    }
    return decoded;
  };
}

function mapToObject(str) {
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const currentAlphabet = str[i];
    obj[currentAlphabet] = i;
  }

  return obj;
}

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("abc"), "eta");
console.log(sub.encode("xyz"), "qxz");
console.log(sub.encode("aeiou"), "eirfg");
//
console.log(sub.decode("eta"), "abc");
console.log(sub.decode("qxz"), "xyz");
console.log(sub.decode("eirfg"), "aeiou");
