/* In this challenge, you must write a function which can encipher plaintext text using Delastelle's Trifid cipher, as well as a function to decode back to plaintext. You will be passed a 27 letter key, a break period, and a string containing the data to be encoded or decoded. The function should return a string.

The key, data, and output will all contain exclusively valid uppercase letters using plus signs as the 27th letter. Keys will always be a complete 27-letter alphabet with no repeats, and periods will always be positive integers (in other words, there are no tricks in the inputs).

Description of the cipher from Practical Cryptography:
The key is in the form of 3 squares:

key = EPSDUCVWYM+ZLKXNBTFGORIJHAQ

square 1   square 2   square 3   

  1 2 3      1 2 3      1 2 3    
1 E P S    1 M + Z    1 F G O    
2 D U C    2 L K X    2 R I J    
3 V W Y    3 N B T    3 H A Q    
As an example, we will encipher the text DEFEND THE EAST WALL OF THE CASTLE+. The first step means locating the plaintext letters in the squares above, D is in square 1, row 2, column 1, so D becomes 121. In the same manner, E becomes 111. If we write down the numbers corresponding to each letter vertically, it becomes:

D E F E N D T H E E A S T W A L L O F T H E C A S T L E +
1 1 3 1 2 1 2 3 1 1 3 1 2 1 3 2 2 3 3 2 3 1 1 3 1 2 2 1 2
2 1 1 1 3 2 3 3 1 1 3 1 3 3 3 2 2 1 1 3 3 1 2 3 1 3 2 1 1
1 1 1 1 1 1 3 1 1 1 2 3 3 2 2 1 1 3 1 3 1 1 3 2 3 3 1 1 2
At the moment this is still a substitution cipher and fairly easy to break. The next step is to use a 'period', which is a number usually 5 - 20, which is part of the key material agreed on by both sender and receiver. If we take a period of 5,

D E F E N  D T H E E  A S T W A  L L O F T  H E C A S  T L E +
1 1 3 1 2  1 2 3 1 1  3 1 2 1 3  2 2 3 3 2  3 1 1 3 1  2 2 1 2
2 1 1 1 3  2 3 3 1 1  3 1 3 3 3  2 2 1 1 3  3 1 2 3 1  3 2 1 1 
1 1 1 1 1  1 3 1 1 1  2 3 3 2 2  1 1 3 1 3  1 1 3 2 3  3 1 1 2
we group the numbers. We now read off the numbers in each group horizontally, and do the substitution back to letters using the original keysquare.

113 122 111 311 111  123 112 331 113 111  312 133 133 323 322
S   U   E   F   E    C   P   H   S   E    G   Y   Y   J   I   

223 322 211 311 313  311 313 123 111 323   221 232 113 112
X   I   M   F   O    F   O   C   E   J     L   B   S   P
Which means DEFEND THE EAST WALL OF THE CASTLE+ is enciphered to SUEFECPHSEGYYJIXIMFOFOCEJLBSP using the key square above and a period of 5. */

function generateEncipheringAlphabet(key) {
  const encipheringAlphabet = {};
  let square = 1;
  let row = 1;
  let column = 1;

  for (let i = 0; i < key.length; i++) {
    const current = key[i];
    if (column > 3) {
      row++;
      column = 1;
    }

    if (row > 3) {
      square++;
      row = 1;
    }

    encipheringAlphabet[current] = JSON.parse(
      `{"square": "${square}", "row": "${row}", "column": "${column}"}`
    );
    column++;
  }
  return encipheringAlphabet;
}

function generateDecipheringAlphabet(key) {
  const decipheringAlphabet = {};
  let square = 1;
  let row = 1;
  let column = 1;

  for (let i = 0; i < key.length; i++) {
    const current = key[i];
    if (column > 3) {
      row++;
      column = 1;
    }

    if (row > 3) {
      square++;
      row = 1;
    }

    const lookupKey = `${square}${row}${column}`;
    decipheringAlphabet[lookupKey] = current;
    column++;
  }

  return decipheringAlphabet;
}

function generateMatrix(key, period, data) {
  const matrix = [];
  const encipheringAlphabet = generateEncipheringAlphabet(key);
  while (data.length > 0) {
    const groupData = data.substring(0, period);
    const group = [];
    for (let i = 0; i < groupData.length; i++) {
      const current = groupData[i];
      const value = [];
      value.push(encipheringAlphabet[current].square);
      value.push(encipheringAlphabet[current].row);
      value.push(encipheringAlphabet[current].column);
      group.push(value);
    }
    matrix.push(group);
    data = data.substring(period);
  }
  console.log(matrix);
  return matrix;
}

function transform(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    const group = matrix[i];
    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < group.length; row++) {
        console.log(group[row][col]);
      }
    }
  }
}

console.log(
  generateMatrix(
    "EPSDUCVWYM+ZLKXNBTFGORIJHAQ",
    5,
    "DEFENDTHEEASTWALLOFTHECASTLE+"
  )
);

function trifidEncode(key, period, data) {
  const matrix = generateMatrix(key, period, data);
  const lookup = generateEncipheringAlphabet(key);
  let encodedText = "";

  for (let i = 0; i < matrix.length; i++) {
    const group = matrix[i];
    let code = "";
    for (let col = 0; col < 3; col++) {
      for (let row = 0; row < group.length; row++) {
        if (code.length == 3) {
          console.log(code);
        } else {
          code += group[row][col];
        }
      }
    }
  }
}

console.log(
  trifidEncode(
    "EPSDUCVWYM+ZLKXNBTFGORIJHAQ",
    5,
    "DEFENDTHEEASTWALLOFTHECASTLE+"
  )
);

function trifidDecode(key, period, data) {}

// let key = "EPSDUCVWYM+ZLKXNBTFGORIJHAQ";
// let data = "DEFENDTHEEASTWALLOFTHECASTLE+";
// let expected = "SUEFECPHSEGYYJIXIMFOFOCEJLBSP";
// console.log(trifidEncode(key, 5, data), expected);
// console.log(trifidEncode(key, 6, "ABCDEFG"), "RSAMXEG");

// let key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
// console.log(trifidEncode(key, 5, "HELLO+WORLD"), "BOJN+ZOOH+D");
// console.log(trifidEncode(key, 7, "HELLO+AGAIN"), "BOHBTRYAPVH");
// console.log(trifidEncode(key, 3, "TOP+SECRET"), "WFPYTTDHZT");

// let key = "EPSDUCVWYM+ZLKXNBTFGORIJHAQ";
// console.log(
//   trifidDecode(key, 5, "SUEFECPHSEGYYJIXIMFOFOCEJLBSP"),
//   "DEFENDTHEEASTWALLOFTHECASTLE+"
// );
// console.log(trifidDecode(key, 7, "RSQLPNPQBLB"), "ABCDEFGHIJK");
// console.log(
//   trifidDecode(key, 2, "JJTAUBLJOEMIESXWYIKM"),
//   "ATTACK+THE+WEST+WALL"
// );

// let key = "ABCDEFGHIJKLMNOPQRSTUVWXYZ+";
// console.log(trifidDecode(key, 7, "WYBYKUFLVW"), "TOP+SECRET");
// console.log(trifidDecode(key, 5, "RTSJERFYPXX"), "MYSTERY+BOX");
// console.log(trifidDecode(key, 3, "BVOOF+WORJP"), "HELLO+WORLD");
