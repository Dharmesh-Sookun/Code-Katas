/* 
Right in the Center
This is inspired by one of Nick Parlante's exercises on the CodingBat online code practice tool.

Given a sequence of characters, does "abc" appear in the CENTER of the sequence?

The sequence of characters could contain more than one "abc".

To define CENTER, the number of characters in the sequence to the left and right of the "abc" (which is in the middle) must differ by at most one.

If it is in the CENTER, return True. Otherwise, return False.

Write a function as the solution for this problem. This kata looks simple, but it might not be easy.

Example
is_in_middle("AAabcBB")  ->  True
is_in_middle("AabcBB")   ->  True
is_in_middle("AabcBBB")  ->  False 
*/

function isInMiddle(str) {
  return str.length <= 4 ? str.includes("abc") : isInMiddle(str.slice(1, -1));
}

console.log(isInMiddle("AAabcBB"), true);
console.log(isInMiddle("AabcBB"), true);
console.log(isInMiddle("AabcBBB"), false);
console.log(isInMiddle("abcabcabc"), true);
console.log(isInMiddle("AAAAabcBB"), false);
console.log(isInMiddle("AAabcabcBB"), false);
console.log(isInMiddle("abcabcabcabc"), false);
