/* 
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types. 
*/

function findShort(s) {
  const splitStr = s.split(" ");
  let shortest = splitStr[0].length;

  for (let i = 1; i < splitStr.length; i++) {
    const currentWord = splitStr[i];
    if (currentWord.length < shortest) {
      shortest = currentWord.length;
    }
  }

  return shortest;
}
