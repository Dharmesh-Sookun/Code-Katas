/* 
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel. 
*/

function disemvowel(str) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (!vowels[currentLetter.toLowerCase()]) {
      resultStr += currentLetter;
    }
  }

  return resultStr;
}

console.log(
  disemvowel("No offense but, Your writing is among the worst I've ever read")
);

console.log(disemvowel("What are you, a communist?"));
