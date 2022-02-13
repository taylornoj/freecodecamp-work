/*
Convert the characters &, <, >, " (double quote), 
and ' (apostrophe), in a string to their corresponding 
HTML entities.
*/

function convertHTML(str) {
  let arr = str.split("");

  for(let i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;
      case '"':
        arr[i] = "&quot;";
        break;
      case "'":
        arr[i] = "&apos;";
        break;
    }
  }
  arr = arr.join("");
  return arr;
}

console.log(convertHTML("Dolce & Gabbana"));