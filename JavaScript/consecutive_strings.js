/* 
You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption 
*/

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k <= 0) return "";

  let longest_str_length = strarr[0].length;
  let longest_str = "";
  let current_longest_str = "";

  for (let index_i = 0; index_i <= strarr.length - k; index_i++) {
    for (let index_j = index_i; index_j < index_i + k; index_j++) {
      current_longest_str += strarr[index_j];
    }
    if (current_longest_str.length > longest_str_length) {
      longest_str_length = current_longest_str.length;
      longest_str = current_longest_str;
    }
    current_longest_str = "";
  }
  return longest_str;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) ===
    "abigailtheta"
);
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  ) === "oocccffuucccjjjkkkjyyyeehh"
);
console.log(longestConsec([], 3) === "");
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
);
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
    "wlwsasphmxxowiaxujylentrklctozmymu"
);
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
    "ixoyx3452zzzzzzzzzzzz"
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
);
