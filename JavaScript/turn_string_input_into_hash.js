/* Please write a function that will take a string as input and return a hash. The string will be formatted as such. The key will always be a symbol and the value will always be an integer.

"a=1, b=2, c=3, d=4"
This string should return a hash that looks like

{ 'a': 1, 'b': 2, 'c': 3, 'd': 4} */

function strToHash(str) {
  if (!str || str.length == 0) return {};
  const result = {};
  str.split(", ").forEach((pair) => {
    const keyValues = pair.split("=");
    const key = keyValues[0];
    const value = Number(keyValues[1]);
    result[key] = value;
  });
  return result;
}

console.log(strToHash("a=1, b=2, c=3, d=4"), { a: 1, b: 2, c: 3, d: 4 });
console.log(strToHash(""), {});
