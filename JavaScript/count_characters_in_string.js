/* 
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
 */

function count(string) {
  if (string.length == 0) return {};
  const charCounts = {};
  const characters = string.split("");

  characters.forEach((character) => {
    charCounts[character] = ++charCounts[character] || 1;
  });

  return charCounts;
}

console.log(count("aba"), { a: 2, b: 1 });
console.log(count(""), {});
