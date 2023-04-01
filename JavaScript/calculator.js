/* Create a simple calculator that given a string of operators (), +, -, *, / and numbers separated by spaces returns the value of that expression

Example:

Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7
Remember about the order of operations! Multiplications and divisions have a higher priority and should be performed left-to-right. Additions and subtractions have a lower priority and should also be performed left-to-right. */

const Calculator = function () {
  this.evaluate = function (string) {
    const operators = { "/": 4, "*": 4, "+": 3, "-": 3 };
    const operator_stack = [];
    const operand_stack = [];
    const num_reg = new RegExp("^\\d+$");

    for (let i = 0; i < string.length; i++) {
      let character = string[i];
      if (num_reg.test(character)) {
        let num = 0;
        while (num_reg.test(character)) {
          num = num * 10 + (character - "0");
          i++;
          if (i < string.length) {
            character = string[i];
          } else {
            break;
          }
        }
        i--;
        operand_stack.push(Number(num));
      } else if (
        operators[character] !== undefined &&
        operator_stack.length == 0
      ) {
        operator_stack.push(character);
      } else if (operators[character] !== undefined) {
        let top_operator = operator_stack[operator_stack.length - 1];
        while (
          operator_stack.length > 0 &&
          operators[character] <= operators[top_operator]
        ) {
          const value1 = operand_stack.pop();
          const value2 = operand_stack.pop();
          const result = this.peformOperation(value1, value2, top_operator);
          operand_stack.push(result);
          top_operator = operator_stack.pop();
        }
        operator_stack.push(character);
      } else if (character == "(") {
        operator_stack.push("(");
      } else if (character == ")") {
        let operator = operator_stack.pop();
        while (operator != "(") {
          const value1 = operand_stack.pop();
          const value2 = operand_stack.pop();
          const result = this.peformOperation(value1, value2, operator);
          operand_stack.push(result);
          operator = operator_stack.pop();
        }
      }
    }

    let operator = operator_stack[operator_stack.length - 1];
    while (operator_stack.length > 0) {
      const value1 = operand_stack.pop();
      const value2 = operand_stack.pop();
      const result = this.peformOperation(value1, value2, operator);
      operand_stack.push(result);
      operator = operator_stack.pop();
    }
    return operand_stack.pop();
  };

  this.peformOperation = function (value1, value2, operator) {
    switch (operator) {
      case "+":
        return value2 + value1;

      case "-":
        return value2 - value1;

      case "/":
        return value2 / value1;

      case "*":
        return value2 * value1;
    }
  };
};

const calculate = new Calculator();
console.log(calculate.evaluate("127"), 127);
console.log(calculate.evaluate("2 + 3"), 5);
console.log(calculate.evaluate("2 - 3 - 4"), -5);
console.log(calculate.evaluate("10 * 5 / 2"), 25);
console.log(calculate.evaluate("2 / 2 + 3 * 4 - 6"), 7);
