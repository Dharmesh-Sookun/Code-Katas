/* 
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid. 
*/

function high(x) {
  let highest_score = 0;
  let highestIndex = 0;

  const letterPos = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const words = x.split(" ");

  for (let word_index = 0; word_index < words.length; word_index++) {
    const currentWord = words[word_index];
    let total_score = 0;
    for (
      let letter_index = 0;
      letter_index < currentWord.length;
      letter_index++
    ) {
      const currentLetter = currentWord[letter_index];
      total_score += letterPos[currentLetter];
    }
    if (total_score > highest_score) {
      highest_score = total_score;
      highestIndex = word_index;
    }
  }
  return words[highestIndex];
}
console.log((high("man i need a taxi up to ubud"), "taxi"));
console.log((high("what time are we climbing up the volcano"), "volcano"));
console.log((high("take me to semynak"), "semynak"));
