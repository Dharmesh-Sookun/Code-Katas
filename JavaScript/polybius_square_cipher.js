/* Implement the Polybius square cipher.

Replace every letter with a two digit number. The first digit is the row number, and the second digit is the column number of following square. Letters 'I' and 'J' are both 24 in this cipher:

1	2	3	4	5
1	A	B	C	D	E
2	F	G	H	I/J	K
3	L	M	N	O	P
4	Q	R	S	T	U
5	V	W	X	Y	Z
Input will be valid (only spaces and uppercase letters from A to Z), so no need to validate them.

Examples
polybius('A')  // "11"
polybius('IJ') // "2424"
polybius('CODEWARS') // "1334141552114243"
polybius('POLYBIUS SQUARE CIPHER') // "3534315412244543 434145114215 132435231542"
 */

function polybius(text) {
  const grid = new Array(5);
  let result = "";
  let code = 65;
  let lookup = {};

  for (let i = 0; i < 5; i++) {
    grid[i] = new Array(5);
  }

  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      if (row == 1 && col == 3) {
        grid[row][col] = "I/J";
        code += 2;
        lookup["I"] = { row, col };
        lookup["J"] = { row, col };
      } else {
        const char = String.fromCharCode(code);
        grid[row][col] = char;
        lookup[char] = { row, col };
        code++;
      }
    }
  }

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (lookup[char]) {
      result +=
        (lookup[char].row + 1).toString() + (lookup[char].col + 1).toString();
    } else {
      result += char;
    }
  }
  return result;
}

console.log(polybius("CODEWARS") === "1334141552114243");
console.log(
  polybius("POLYBIUS SQUARE CIPHER") ===
    "3534315412244543 434145114215 132435231542"
);
