/* 
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces. 
*/

function getCount(str) {
  let vowelsCount = 0;

  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  for (let i = 0; i < str.length; i++) {
    const currentLetter = str[i];
    if (vowels[currentLetter]) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"));
