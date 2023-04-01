/* Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.
Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]
Bonus points (not really, but just for fun):
Avoid creating an array whose memory footprint is roughly as big as the input text.
Avoid sorting the entire array of unique words. */

function topThreeWords(text) {
  const words = text
    .split(/\s+[-]*/)
    .map((word) => word.toLowerCase())
    .map((word) => word.replace(/[/.,:]+/, ""))
    .filter((value) => /[a-z]+/.test(value));

  const counts = {};

  words.forEach((word) => {
    counts[word] = ++counts[word] || 1;
  });

  const result = [];

  let highestCount = -Infinity;
  let highestWord = "";

  for (let i = 0; i < 3; i++) {
    for (word in counts) {
      if (counts[word] > highestCount) {
        highestCount = counts[word];
        highestWord = word;
      }
    }

    counts[highestWord] = -Infinity;
    if (highestWord) result.push(highestWord);

    highestCount = -Infinity;
    highestWord = "";
  }

  return result;
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e"), [
  "e",
  "d",
  "a",
]);

console.log(topThreeWords("a a c b b"), ["a", "b", "c"]);

console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"),
  ["e", "ddd", "aa"]
);

console.log(topThreeWords("  //wont won't won't "), ["won't", "wont"]);

console.log(topThreeWords("  , e   .. "), ["e"]);

console.log(topThreeWords("  ...  "), []);

console.log(topThreeWords("  '  "), []);

console.log(
  topThreeWords(`In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`),
  ["a", "of", "on"]
);
