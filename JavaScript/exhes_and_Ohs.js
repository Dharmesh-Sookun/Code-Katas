/* 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false 
*/

function XO(str) {
  const OXCount = {
    x: 0,
    o: 0,
  };

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (currentLetter.toLowerCase() == "x") {
      OXCount.x++;
    } else if (currentLetter.toLowerCase() == "o") {
      OXCount.o++;
    }
  }

  return OXCount.x == OXCount.o;
}

console.log(XO("zzoo"));
