/* 
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return 
true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100 
*/

function validParentheses(parens) {
  if (parens[0] == ")") return false;
  let openingBrackets = [];

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == "(") {
      openingBrackets.push(parens[i]);
    } else if (parens[i] == ")") {
      if (openingBrackets.length == 0) {
        return false;
      } else {
        openingBrackets.pop();
      }
    }
  }
  return openingBrackets.length == 0;
}

console.log(validParentheses("(())((()())())"));
