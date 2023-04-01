/* 
Given two strings s1 and s2, we want to visualize how different the two strings are. We will only take into account the lowercase letters 
(a to z). First let us count the frequency of each lowercase letters in s1 and s2.

s1 = "A aaaa bb c"

s2 = "& aaa bbb c d"

s1 has 4 'a', 2 'b', 1 'c'

s2 has 3 'a', 3 'b', 1 'c', 1 'd'

So the maximum for 'a' in s1 and s2 is 4 from s1; the maximum for 'b' is 3 from s2. In the following we will not consider letters when the 
maximum of their occurrences is less than or equal to 1.

We can resume the differences between s1 and s2 in the following string: "1:aaaa/2:bbb" where 1 in 1:aaaa stands for string s1 and aaaa because 
the maximum for a is 4. In the same manner 2:bbb stands for string s2 and bbb because the maximum for b is 3.

The task is to produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum if this maximum is strictly 
greater than 1; these letters will be prefixed by the number of the string where they appear with their maximum value and :. 
If the maximum is in s1 as well as in s2 the prefix is =:.

In the result, substrings (a substring is for example 2:nnnnn or 1:hhh; it contains the prefix) will be in decreasing order of their length and 
when they have the same length sorted in ascending lexicographic order (letters and digits - more precisely sorted by codepoint); 
the different groups will be separated by '/'. See examples and "Example Tests".

Hopefully other examples can make this clearer.

s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

s1="Are the kids at home? aaaaa fffff"
s2="Yes they are here! aaaaa fffff"
mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"
Note for Swift, R, PowerShell
The prefix =: is replaced by E:

s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
mix(s1, s2) --> "1:mmmmmm/E:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/E:ee/E:ss" 
*/

function mix(s1, s2) {
  const s1a_z = s1
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .join("");

  const s2a_z = s2
    .toLowerCase()
    .split("")
    .filter((char) => char >= "a" && char <= "z")
    .join("");

  const s1Counts = {};
  const s2Counts = {};

  for (let i = 0; i < s1a_z.length; i++) {
    const currentLetter = s1a_z[i];
    s1Counts[currentLetter] = ++s1Counts[currentLetter] || 1;
  }

  for (let i = 0; i < s2a_z.length; i++) {
    const currentLetter = s2a_z[i];
    s2Counts[currentLetter] = ++s2Counts[currentLetter] || 1;
  }

  const s1CountsArr = Object.keys(s1Counts).map((key) => [key, s1Counts[key]]);
  const s2CountsArr = Object.keys(s2Counts).map((key) => [key, s2Counts[key]]);

  let resultStr = "";

  for (let i = 0; i < s1CountsArr.length; i++) {
    for (let j = 0; j < s2CountsArr.length; j++) {
      if (s1CountsArr[i][0] == s2CountsArr[j][0]) {
        if (s1CountsArr[i][1] > s2CountsArr[j][1] && s1CountsArr[i][1] != 1) {
          resultStr += "1:";
          let k = 0;
          while (k < s1CountsArr[i][1]) {
            resultStr += s1CountsArr[i][0];
            k++;
          }
          resultStr += "/";
        } else if (
          s2CountsArr[j][1] > s1CountsArr[i][1] &&
          s2CountsArr[j][1] != 1
        ) {
          resultStr += "2:";
          let k = 0;
          while (k < s2CountsArr[j][1]) {
            resultStr += s2CountsArr[j][0];
            k++;
          }
          resultStr += "/";
        } else {
          resultStr += "=:";
          let k = 0;
          while (k < s2CountsArr[j][1]) {
            resultStr += s2CountsArr[j][0];
            k++;
          }
          resultStr += "/";
        }
      }
    }
  }

  resultStr = resultStr.slice(0, resultStr.length - 1);

  // console.log(resultStr);

  const splitRes = resultStr.split("/");

  //console.log(splitRes);

  let temp = "";

  for (let i = 0; i < splitRes.length; i++) {
    let swapped = false;
    for (let j = 0; j < splitRes.length - 1; j++) {
      const currentStr = splitRes[j];
      const currentStrVal = currentStr.substring(2);
      const nextStr = splitRes[j + 1];
      const nextStrVal = nextStr.substring(2);
      if (nextStrVal.length > currentStrVal.length) {
        temp = currentStr;
        splitRes[j] = nextStr;
        splitRes[j + 1] = temp;
        swapped = true;
      } else if (nextStrVal.length == currentStrVal.length) {
        const compare = currentStr
          .substring(1)
          .localeCompare(nextStr.substring(1));
        if (compare == 1 || currentStr.charCodeAt(0) > nextStr.charCodeAt(0)) {
          temp = currentStr;
          splitRes[j] = nextStr;
          splitRes[j + 1] = temp;
          swapped = true;
        }
      }
    }
  }

  return splitRes.join("/");
}

console.log(
  mix(
    "my&friend&Paul has heavy hats! &",
    "my friend John has many many friends &"
  )
);
