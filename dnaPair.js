/* The DNA strand is missing the pairing element. 
Take each character, get its pair, and return the results as a 2d array */

/* Base pairs are a pair of AT and CG. Match the missing element to the 
provided character.
Return the provided character as the first element in each array.

The character and its pair are paired up in an array, and all 
the arrays are grouped into one encapsulating array.*/

function pairElement(str) {
  dnaPair = [];
  str = str.split("");
  let strand = function(char) {
    switch(char) {
      case "A":
        dnaPair.push(["A", "T"]);
        break;
      case "T":
        dnaPair.push(["T", "A"]);
        break;
      case "C":
        dnaPair.push(["C", "G"]);
        break;
      case "G":
        dnaPair.push(["G", "C"]);
        break;
    }
  };
  for (let i = 0; i < str.length; i++) {
    strand(str[i]);
  }
  return dnaPair;
}
console.log(pairElement("GCG"));