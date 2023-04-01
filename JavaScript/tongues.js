/* 
Gandalf's writings have long been available for study, but no one has yet figured out what language they are written in. Recently, due to programming work by a hacker known only by the code name ROT13, it has been discovered that Gandalf used nothing but a simple letter substitution scheme, and further, that it is its own inverse|the same operation scrambles the message as unscrambles it.

This operation is performed by replacing vowels in the sequence 'a' 'i' 'y' 'e' 'o' 'u' with the vowel three advanced, cyclicly, while preserving case (i.e., lower or upper).

Similarly, consonants are replaced from the sequence 'b' 'k' 'x' 'z' 'n' 'h' 'd' 'c' 'w' 'g' 'p' 'v' 'j' 'q' 't' 's' 'r' 'l' 'm' 'f' by advancing ten letters.

So for instance the phrase 'One ring to rule them all.' translates to 'Ita dotf ni dyca nsaw ecc.'

The fascinating thing about this transformation is that the resulting language yields pronounceable words. For this problem, you will write code to translate Gandalf's manuscripts into plain text.

Your job is to write a function that decodes Gandalf's writings.

Input
The function will be passed a string for the function to decode. Each string will contain up to 100 characters, representing some text written by Gandalf. All characters will be plain ASCII, in the range space (32) to tilde (126).

Output
For each string passed to the decode function return its translation. 
*/

function alphabetIndices(alphabets) {
  const obj = {};
  for (let i = 0; i < alphabets.length; i++) {
    const currentAlphabet = alphabets[i];
    obj[currentAlphabet] = i;
  }
  return obj;
}

function isUpperCase(character) {
  return character === character.toUpperCase();
}

function tongues(code) {
  const vowels = "aiyeou";
  const consonants = "bkxznhdcwgpvjqtsrlmf";
  let decoded = "";

  const vowelsIndices = alphabetIndices(vowels);
  const consonantsIndices = alphabetIndices(consonants);

  for (let i = 0; i < code.length; i++) {
    const currentChar = code[i];
    if (vowelsIndices[currentChar.toLowerCase()] != undefined) {
      const vowelIndex = vowelsIndices[currentChar.toLowerCase()];
      let newIndex = vowelIndex + 3;
      while (newIndex >= vowels.length) {
        newIndex -= vowels.length;
      }
      if (isUpperCase(currentChar)) {
        decoded += vowels[newIndex].toUpperCase();
      } else {
        decoded += vowels[newIndex];
      }
    } else if (consonantsIndices[currentChar.toLowerCase()] != undefined) {
      const consonantIndex = consonantsIndices[currentChar.toLowerCase()];
      let newIndex = consonantIndex + 10;
      while (newIndex >= consonants.length) {
        newIndex -= consonants.length;
      }
      if (isUpperCase(currentChar)) {
        decoded += consonants[newIndex].toUpperCase();
      } else {
        decoded += consonants[newIndex];
      }
    } else {
      decoded += currentChar;
    }
  }
  return decoded;
}

console.log(
  tongues("Ita dotf ni dyca nsaw ecc.") === "One ring to rule them all."
);
console.log(
  tongues(
    "Tim oh nsa nowa gid ecc fiir wat ni liwa ni nsa eor ig nsaod liytndu."
  ) === "Now is the time for all good men to come to the aid of their country."
);
console.log(
  tongues("Giydhlida etr hakat uaedh efi iyd gidagensadh pdiyfsn ytni nsoh") ===
    "Fourscore and seven years ago our forefathers brought unto this"
);
console.log(tongues("litnotatn e tam tenoit.") === "continent a new nation.");
console.log(
  tongues("Nsa zyolv pdimt gij xywbar ikad nsa cequ rifh.") ===
    "The quick brown fox jumped over the lazy dogs."
);
console.log(
  tongues(
    "Tywpadh (1234567890) etr bytlnyenoit === nsau hsiycr pins pa ytlsetfar!"
  ) ===
    "Numbers (1234567890) and punctuation === they should both be unchanged!"
);
console.log(tongues(" ") === " ");
console.log(
  tongues(
    "Nsoh oh tin Vcotfit pyn on liycr pa e roggadatn gidaoft cetfyefa."
  ) === "This is not Klingon but it could be a different foreign language."
);
console.log(
  tongues(
    "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789"
  ) ===
    "0123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789"
);
console.log(
  tongues(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  ) ===
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
);
console.log(
  tongues(
    "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm"
  ) ===
    "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
);
console.log(tongues("z") === "q");
console.log(tongues("n") === "t");
console.log(
  tongues(
    "****************************************************************************************************"
  ) ===
    "****************************************************************************************************"
);
console.log(
  tongues(
    "q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1q1"
  ) ===
    "z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1z1"
);
