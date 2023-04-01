/* 
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false 
*/

function generateHashtag(str) {
  const str_trimmed = str.trim();
  if (str_trimmed.length == 0) return false;
  const words = str_trimmed.split(/\s+/);
  let result = "#";

  words.forEach((word) => {
    result += word[0].toUpperCase() + word.slice(1);
  });

  if (result.length > 140) return false;

  return result;
}

//console.log(generateHashtag("    Hello     World   "));

console.log(generateHashtag(""), false);
console.log(generateHashtag(" ".repeat(200)), false);
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag");
console.log(generateHashtag("Codewars"), "#Codewars");
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice");
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice");
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
console.log(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false
);
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138));
console.log(generateHashtag("a".repeat(140)), false);
