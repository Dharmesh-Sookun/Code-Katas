/* 
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord 
*/

String.prototype.camelCase = function () {
  if (this.length == 0) return "";
  const tokens = this.split(/\s+/);
  let resultStr = "";

  tokens.forEach((token) => {
    if (token != "") {
      resultStr += token[0].toUpperCase() + token.slice(1);
    }
  });
  return resultStr;
};

console.log("test case".camelCase(), "TestCase");
console.log("camel case method".camelCase(), "CamelCaseMethod");
console.log("say hello ".camelCase(), "SayHello");
console.log(" camel case word".camelCase(), "CamelCaseWord");
console.log("".camelCase(), "");
