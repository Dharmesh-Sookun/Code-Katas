/* Task
John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.

Given a string s. Your task is to count how many times the keyboard has been tapped by John.

You can assume that, at the beginning the Caps Lock light is not lit.

Input/Output
[input] string s

A non-empty string. It contains only English letters(uppercase or lowercase).

1 ≤ s.length ≤ 10000

[output] an integer

The number of times John tapped the keyboard.

Example
For s = "a", the output should be 1.

John hit button a.

For s = "aa", the output should be 2.

John hit button a, a.

For s = "A", the output should be 2.

John hit button Caps Lock, A.

For s = "Aa", the output should be 4.

John hit button Caps Lock, A, Caps Lock, a. */

function typist(text) {
  let isCapsLockOn = false;
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    const currentLetter = text[i];
    if (currentLetter === currentLetter.toUpperCase() && !isCapsLockOn) {
      isCapsLockOn = true;
      count += 2;
    }else if(currentLetter === currentLetter.toLowerCase() && isCapsLockOn){
      isCapsLockOn = false;
      count += 2;
    }else{
      count++;
    }
  }
  return count;
}

console.log(typist("a") === 1);

console.log(typist("aa") === 2);

console.log(typist("A") === 2);

console.log(typist("AA") === 3);

console.log(typist("aA") === 3);

console.log(typist("Aa") === 4);

console.log(typist("BeiJingDaXueDongMen") === 31);

console.log(typist("AAAaaaBBBbbbABAB") === 21);

console.log(typist("AmericanRAILWAY") === 18);

console.log(typist("AaAaAa") === 12);

console.log(typist("DFjfkdaB") === 11);
