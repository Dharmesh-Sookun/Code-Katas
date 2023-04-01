/* 
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false

Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and 
an array with words. You should return an array of all the anagrams or an empty array if there are none. 
For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => [] 
*/

function anagrams(word, words) {
  let sortedWord = sortChars(word);
  let sortedWordsList = [];
  let anagramList = [];

  words.forEach((element) => {
    let currentVal = element;
    let sortedVal = sortChars(currentVal);
    sortedWordsList.push(sortedVal);
  });

  sortedWordsList.forEach((element, index) => {
    if (sortedWord == element) {
      anagramList.push(words[index]);
    }
  });

  return anagramList;
}

function sortChars(text) {
  return text.split("").sort().join("");
}

anagrams("laser", ["lazing", "lazy", "lacer"]);
