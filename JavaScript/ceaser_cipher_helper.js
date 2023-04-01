/* 
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26]. 
*/

// class CaesarCipher {
//   constructor(shift) {
//     this.shift = shift;
//   }

//   encode(str) {
//     let str_norm = str.toLowerCase();
//     str_norm = str_norm.split(" ");
//     let encoded = "";
//     for (let i = 0; i < str_norm.length; i++) {
//       const current_word = str_norm[i];
//       for (let j = 0; j < current_word.length; j++) {
//         const current_char_code = current_word.charCodeAt(j);
//         let new_char_code = current_char_code + this.shift;
//         if (new_char_code > 122) {
//           new_char_code -= 26;
//         }
//         encoded += String.fromCharCode(new_char_code).toUpperCase();
//       }
//       if (i != str_norm.length - 1) {
//         encoded += " ";
//       }
//     }
//     return encoded;
//   }

//   decode(str) {
//     let str_norm = str.toLowerCase();
//     str_norm = str_norm.split(" ");
//     let decoded = "";
//     for (let i = 0; i < str_norm.length; i++) {
//       const current_word = str_norm[i];
//       for (let j = 0; j < current_word.length; j++) {
//         const current_char_code = current_word.charCodeAt(j);
//         let new_char_code = current_char_code - this.shift;
//         if (new_char_code < 97) {
//           new_char_code += 26;
//         }
//         decoded += String.fromCharCode(new_char_code).toUpperCase();
//       }

//       if (i != str_norm.length - 1) {
//         decoded += " ";
//       }
//     }
//     return decoded;
//   }
// }

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
  }

  encode(str) {
    const str_norm = str.toLowerCase();
    let encoded = "";

    for (let i = 0; i < str_norm.length; i++) {
      const current_char = str_norm[i];
      if (/[a-z]/.test(current_char)) {
        const current_char_code = current_char.charCodeAt(0);
        let new_char_code = current_char_code + this.shift;
        if (new_char_code > 122) {
          new_char_code -= 26;
        }
        encoded += String.fromCharCode(new_char_code).toUpperCase();
      } else {
        encoded += current_char;
      }
    }
    return encoded;
  }

  decode(str) {
    let str_norm = str.toLowerCase();
    let decoded = "";

    for (let i = 0; i < str_norm.length; i++) {
      const current_char = str_norm[i];
      if (/[a-z]/.test(current_char)) {
        const current_char_code = current_char.charCodeAt(0);
        let new_char_code = current_char_code - this.shift;
        if (new_char_code < 97) {
          new_char_code += 26;
        }
        decoded += String.fromCharCode(new_char_code).toUpperCase();
      } else {
        decoded += current_char;
      }
    }
    return decoded;
  }
}

var c = new CaesarCipher(5);
console.log(c.encode("Codewars") === "HTIJBFWX");
console.log(c.decode("BFKKQJX") === "WAFFLES");
