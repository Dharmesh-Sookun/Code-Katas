/* 
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation. 
*/

function isPangram(string) {
  const letterCount = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (let index = 0; index < string.length; index++) {
    const currentLetter = string[index].toLowerCase();
    if (
      currentLetter != " " &&
      !currentLetter.match(/[0-9]/) &&
      !currentLetter.match(/\W/)
    ) {
      letterCount[currentLetter]++;
    }
  }

  for (letter in letterCount) {
    if (letterCount[letter] < 1) {
      return false;
    }
  }
  return true;
}

var string = "The quick brown fox jumps over the lazy dog.";
console.log((isPangram(string), true));
var string = "This is not a pangram.";
console.log((isPangram(string), false));
