/* 
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go' 
*/

function decipherThis(str) {
  const words = str.split(" ");
  let deciphered = "";

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const charCode = currentWord.match(/[0-9]/g).join("");
    deciphered += String.fromCharCode(+charCode);
    for (let j = charCode.length; j < currentWord.length; j++) {
      if (j == charCode.length) {
        const lastChar = currentWord[currentWord.length - 1];
        deciphered += lastChar;
      } else if (j == currentWord.length - 1) {
        const secondChar = currentWord[charCode.length];
        deciphered += secondChar;
      } else {
        deciphered += currentWord[j];
      }
    }
    if (i != words.length - 1) {
      deciphered += " ";
    }
  }

  return deciphered;
}

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o") ===
    "Have a go at this and see how you do"
);
