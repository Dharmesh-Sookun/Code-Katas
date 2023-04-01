/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Divison should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three())); 
*/

//seven(times(five())); // must return 35

//Operands
const zero = (operator) => (!operator ? 0 : operator(0));
const one = (operator) => (!operator ? 1 : operator(1));
const two = (operator) => (!operator ? 2 : operator(2));
const three = (operator) => (!operator ? 3 : operator(3));
const four = (operator) => (!operator ? 4 : operator(4));
const five = (operator) => (!operator ? 5 : operator(5));
const six = (operator) => (!operator ? 6 : operator(6));
const seven = (operator) => (!operator ? 7 : operator(7));
const eight = (operator) => (!operator ? 8 : operator(8));
const nine = (operator) => (!operator ? 9 : operator(9));

//Operators
const plus = (number) => (otherNumber) => otherNumber + number;
const minus = (number) => (otherNumber) => otherNumber - number;
const times = (number) => (otherNumber) => otherNumber * number;
const dividedBy = (number) => (otherNumber) => Math.floor(otherNumber / number);

// function zero(func)   { return func ? func(0) : 0; };
// function one(func)    { return func ? func(1) : 1; };
// function two(func)    { return func ? func(2) : 2; };
// function three(func)  { return func ? func(3) : 3; };
// function four(func)   { return func ? func(4) : 4; };
// function five(func)   { return func ? func(5) : 5; };
// function six(func)    { return func ? func(6) : 6; };
// function seven(func)  { return func ? func(7) : 7; };
// function eight(func)  { return func ? func(8) : 8; };
// function nine(func)   { return func ? func(9) : 9; };

// function plus( b )      { return function( a ) { return a + b; }; };
// function minus( b )     { return function( a ) { return a - b; }; };
// function times( b )     { return function( a ) { return a * b; }; };
// function dividedBy( b ) { return function( a ) { return a / b; }; };

console.log(five(plus(five())));
