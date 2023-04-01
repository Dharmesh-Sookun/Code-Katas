/* 
When working with color values it can sometimes be useful to extract the individual red, green, and blue (RGB) component values for a color. Implement a function that meets these requirements:

Accepts a case-insensitive hexadecimal color string as its parameter (ex. "#FF9933" or "#ff9933")
Returns an object with the structure {r: 255, g: 153, b: 51} where r, g, and b range from 0 through 255
Note: your implementation does not need to support the shorthand form of hexadecimal notation (ie "#FFF")

Example
"#FF9933" --> {r: 255, g: 153, b: 51} 
*/

function hexStringToRGB(hexString) {
  const lookup = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };

  hexString = hexString.toLowerCase().replace("#", "");
  const resultArr = [];
  let power = 0;

  for (let i = hexString.length - 1; i > -1; i -= 2) {
    const current = hexString[i];
    const next = hexString[i - 1];
    resultArr.push(
      Number(lookup[current]) * 16 ** power +
        Number(lookup[next]) * 16 ** (power + 1)
    );
  }

  return { r: resultArr[2], g: resultArr[1], b: resultArr[0] };
}

console.log(hexStringToRGB("#FF9933"), { r: 255, g: 153, b: 51 });
