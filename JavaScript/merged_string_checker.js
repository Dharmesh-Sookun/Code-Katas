/* 
At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.

The restriction is that the characters in part1 and part2 should be in the same order as in s.

The interviewer gives you the following example and tells you to figure out the rest from the given test cases.

For example:

'codewars' is a merge from 'cdw' and 'oears':

    s:  c o d e w a r s   = codewars
part1:  c   d   w         = cdw
part2:    o   e   a r s   = oears 
*/

//THIS IS BROKEN....
//TODO: FIX IT!!!

function checkSameOrder(s, part) {
  let result = "";
  for (let i = 0; i < part.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (s[j] === part[i]) {
        result += s[j];
      }
    }
  }
  return result === part;
}

function isMerge(s, part1, part2) {
  if (`${part1}${part2}`.length != s.length) return false;
  return checkSameOrder(s, part1) && checkSameOrder(s, part2);
}

console.log(isMerge("codewars", "code", "wars"), true);
console.log(isMerge("codewars", "cdw", "oears"), true);
console.log(isMerge("codewars", "cod", "wars"), true);
