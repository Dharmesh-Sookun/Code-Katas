/* 
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas" 
*/

function solution(input, markers) {
  let resultStr = "";
  const markers_obj = {};

  for (let index = 0; index < markers.length; index++) {
    const current_marker = markers[index];
    if (!markers_obj[current_marker]) {
      markers_obj[current_marker] = true;
    }
  }

  for (let index = 0; index < input.length - 1; index++) {
    let current_char = input[index];
    const next_char = input[index + 1];
    if (markers_obj[current_char]) {
      while (index < input.length) {
        if (current_char == "\n") {
          resultStr += current_char;
          break;
        }
        index++;
        current_char = input[index];
      }
    } else {
      if (!markers_obj[next_char]) {
        resultStr += current_char;
      }
    }
  }
  return resultStr.trim();
}

console.log(
  JSON.stringify(
    solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
  ),
  JSON.stringify("apples, pears\ngrapes\nbananas")
);
