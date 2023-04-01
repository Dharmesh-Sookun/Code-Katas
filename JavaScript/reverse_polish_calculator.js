/* 
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero). 
*/

function calc(expr) {
  if (expr == "") return 0;
  expr = expr.split(" ");
  const stack = [];
  const operators = {
    "+": (a, b) => +a + +b,
    "-": (a, b) => +a - +b,
    "*": (a, b) => +a * +b,
    "/": (a, b) => +a / +b,
  };
  for (let i = 0; i < expr.length; i++) {
    const currentElement = expr[i];
    if (operators[currentElement]) {
      const num1 = stack.pop();
      const num2 = stack.pop();
      const result = operators[currentElement](num2, num1);
      stack.push(result);
    } else {
      stack.push(currentElement);
    }
  }
  return +stack[0];
}

console.log(calc(""), 0);
console.log(calc("3"), 3);
console.log(calc("3.5"), 3.5);
console.log(calc("1 3 +"), 4);
console.log(calc("1 3 *"), 3);
console.log(calc("1 3 -"), -2);
console.log(calc("4 2 /"), 2);
