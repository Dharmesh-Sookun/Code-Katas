/* Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.

Complete the function that receives a string and encrypt it with this simple transposition.

Example
For example if the text to encrypt is: "Simple text", the 2 rows will be:

Row 1	S	m	l		e	t
Row 2	i	p	e	t	x	

So the result string will be: `"Sml etipetx"` */

function simpleTransposition(text) {
  const arr_2d = [];
  const num_of_cols = Math.ceil(text.length / 2);
  let current_row = 0;
  let current_col = 0;
  let result = "";

  for(let i = 0; i < 2; i++){
    arr_2d[i] = new Array(num_of_cols).fill('');
  }

  for(let i = 0; i < text.length; i++){
    const current_letter = text[i];
    arr_2d[current_row][current_col] = current_letter;
    if(current_row == 1) current_col++;
    if(current_row == 0) current_row = 1;
    else current_row = 0;
  }

  arr_2d.forEach(arr => {
    result += arr.join("");
  })

  return result;
}


console.log(simpleTransposition("Sample text") === "Sml etapetx")
console.log(simpleTransposition("Simple transposition") === "Sml rnpstoipetasoiin")
console.log(simpleTransposition("All that glitters is not gold") === "Alta ltesi o odl htgitr sntgl")
console.log(simpleTransposition("The better part of valor is discretion") === "Tebte ato ao sdsrtoh etrpr fvlri icein")
console.log(simpleTransposition("Conscience does make cowards of us all") === "Cncec osmk oad fu losinede aecwrso sal")
console.log(simpleTransposition("Imagination is more important than knowledge") === "Iaiaini oeipratta nwegmgnto smr motn hnkolde")