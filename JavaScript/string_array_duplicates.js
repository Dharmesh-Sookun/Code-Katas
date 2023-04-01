/* 
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck! 
*/

function dup(s) {
  const result = [];
  let resultStr = "";

  for (let i = 0; i < s.length; i++) {
    const str = s[i];
    for (let j = 0; j < str.length; j++) {
      const currentChar = str[j];
      const lastChar = resultStr[resultStr.length - 1];
      if (currentChar !== lastChar) {
        resultStr += currentChar;
      }
    }
    result.push(resultStr);
    resultStr = "";
  }

  return result;
}

console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]),
  ["codewars", "picaniny", "hubububo"]
);
console.log(dup(["abracadabra", "allottee", "assessee"]), [
  "abracadabra",
  "alote",
  "asese",
]);
console.log(dup(["kelless", "keenness"]), ["keles", "kenes"]);
console.log(dup(["Woolloomooloo", "flooddoorroommoonlighters", "chuchchi"]), [
  "Wolomolo",
  "flodoromonlighters",
  "chuchchi",
]);
console.log(dup(["adanac", "soonness", "toolless", "ppellee"]), [
  "adanac",
  "sones",
  "toles",
  "pele",
]);
console.log(dup(["callalloo", "feelless", "heelless"]), [
  "calalo",
  "feles",
  "heles",
]);
console.log(dup(["putteellinen", "keenness"]), ["putelinen", "kenes"]);
console.log(dup(["kelless", "voorraaddoosspullen", "achcha"]), [
  "keles",
  "voradospulen",
  "achcha",
]);
