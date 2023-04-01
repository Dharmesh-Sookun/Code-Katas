/* How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
 */

function rot13(str) {
  let resultStr = "";
  for (let index = 0; index < str.length; index++) {
    const currentCharCode = str.charCodeAt(index);
    if (currentCharCode >= 65 && currentCharCode <= 90) {
      let newCharCode = currentCharCode + 13;
      if (newCharCode > 90) {
        newCharCode = newCharCode - 26;
      }
      resultStr += String.fromCharCode(newCharCode);
    } else if (currentCharCode >= 97 && currentCharCode <= 122) {
      let newCharCode = currentCharCode + 13;
      if (newCharCode > 122) {
        newCharCode = newCharCode - 26;
      }
      resultStr += String.fromCharCode(newCharCode);
    } else {
      resultStr += str[index];
    }
  }
  return resultStr;
}

console.log(rot13("EBG13 rknzcyr."), "ROT13 example.");
console.log(
  rot13("This is my first ROT13 excercise!"),
  "Guvf vf zl svefg EBG13 rkprepvfr!"
);
