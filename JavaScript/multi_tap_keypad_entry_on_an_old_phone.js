/* Prior to having fancy iPhones, teenagers would wear out their thumbs sending SMS messages on candybar-shaped feature phones with 3x4 numeric keypads.

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------
Prior to the development of T9 (predictive text entry) systems, the method to type words was called "multi-tap" and involved pressing a button repeatedly to cycle through the possible values.

For example, to type a letter "R" you would press the 7 key three times (as the screen display for the current character cycles through P->Q->R->S->7). A character is "locked in" once the user presses a different key or pauses for a short period of time (thus, no extra button presses are required beyond what is needed for each letter individually). The zero key handles spaces, with one press of the key producing a space and two presses producing a zero.

In order to send the message "WHERE DO U WANT 2 MEET L8R" a teen would have to actually do 47 button presses. No wonder they abbreviated.

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

Hint: While it wouldn't take too long to hard code the amount of keypresses for all 26 letters by hand, try to avoid doing so! (Imagine you work at a phone manufacturer who might be testing out different keyboard layouts, and you want to be able to test new ones rapidly.) */

function presses(phrase) {
    const alphabetLookup = {
      a: 1,
      b: 2,
      c: 3,
      d: 1,
      e: 2,
      f: 3,
      g: 1,
      h: 2,
      i: 3,
      j: 1,
      k: 2,
      l: 3,
      m: 1,
      n: 2,
      o: 3,
      p: 1,
      q: 2,
      r: 3,
      s: 4,
      t: 1,
      u: 2,
      v: 3,
      w: 1,
      x: 2,
      y: 3,
      z: 4,
    };
    let count = 0;
    for (let i = 0; i < phrase.length; i++) {
      const currentChar = phrase.charAt(i);
      if (alphabetLookup[currentChar.toLowerCase()])
        count += alphabetLookup[currentChar.toLowerCase()];
      else if (currentChar == "0") count += 2;
      else if (currentChar == "7" || currentChar == "9") count += 5;
      else if (currentChar == " " || currentChar == "1") count += 1;
      else count += 4;
    }
    return count;
  }

console.log(presses("LOL"), 9, "should work for simple examples");
console.log(presses("HOW R U"), 13, "should work for phrases with spaces");
