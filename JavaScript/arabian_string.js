/* You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc" */

function camelize(str) {
  return str
    .toLowerCase()
    .split(/\W/)
    .reduce(
      (result, currentWord) =>
        result + currentWord[0].toUpperCase() + currentWord.slice(1),
      ""
    );
}

console.log(camelize("java script") === "JavaScript");
console.log(camelize("cODE warS") === "CodeWars");
console.log(camelize("example name") === "ExampleName");
console.log(camelize("your-NaMe-here") === "YourNameHere");
console.log(camelize("testing ABC") === "TestingAbc");
