/* 
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False 
*/

function scramble(str1, str2) {
  const letterCountsInStr1 = {};
  for (let index = 0; index < str1.length; index++) {
    const currentLetter = str1[index];
    letterCountsInStr1[currentLetter] =
      ++letterCountsInStr1[currentLetter] || 1;
  }

  for (let index = 0; index < str2.length; index++) {
    const currentLetter = str2[index];
    if (!letterCountsInStr1[currentLetter]) {
      return false;
    } else {
      letterCountsInStr1[currentLetter]--;
    }
  }
  return true;
}

console.log(scramble("rkqodlw", "world"), true);
console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
console.log(scramble("katas", "steak"), false);
