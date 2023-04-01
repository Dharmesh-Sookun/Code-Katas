/* 
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :) 
*/

function longestRepetition(s) {
  if (s === "") return ["", 0];
  const counts = {};
  let seen = "";

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    const lastSeen = seen[seen.length - 1];
    if (currentChar === lastSeen) {
      counts[currentChar]++;
    } else {
      counts[currentChar] = 1;
    }
    seen += currentChar;
  }

  let largest = ["", 0];
  for (char in counts) {
    if (counts[char] > largest[1]) {
      largest[0] = char;
      largest[1] = counts[char];
    }
  }
  return largest;
}

console.log(longestRepetition("aaaabb"), ["a", 4]);
console.log(longestRepetition("bbbaaabaaaa"), ["a", 4]);
console.log(longestRepetition("cbdeuuu900"), ["u", 3]);
console.log(longestRepetition("abbbbb"), ["b", 5]);
console.log(longestRepetition("aabb"), ["a", 2]);
console.log(longestRepetition(""), ["", 0]);
console.log(longestRepetition("ba"), ["b", 1]);

//TODO: THIS IS NOT WORKING....FIX IT!!!!
// console.log(
//   longestRepetition(
//     "0b9eaufkrqqenwptg73le7jnbm3otfyql402sqvhaus5tesxng94a2agx0rpf8taez2w3eitcc04i9ashaufsi92ta7a418i05c25sqk4duraciqha0zf0ravsig1te6o0p2rczku48ylmik28h8hn8sasic9v0zafzob58atfd23ck4jfeuw2mv47fuaw7irif94k7coodn9gfxvzfni5kno6vdsn5vw78unb8jr1spnykshp44nnik2dlciqjthurjx6na1en7s9t4qp7tbbldwxtzzycytjul5nkieoz57ac8xtjuox3m772knep572qhlykskkdqv28q7m22ara2scwacpg0mlrbikwfvovvmev9cs4r2vj5laah09s9msf2w1el6rh4q15ejdamqd3bj6wmmzq9h10imoqo9947pidx8dckfp7jegsebhpi74jtr5cxga1e4t0kb76nce7yc7wjoktatuqjugrmc1dapois5279"
//   ),
//   ["q", 2]
// );
