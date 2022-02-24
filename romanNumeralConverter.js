/*
Convert the given number into a roman numeral.
*/

let romanNums = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];


function convertToRoman(num) {
  if (num === 0) {
    return '';
  }
  for (let i = 0; i < romanNums.length; i++) {
    if (num >= romanNums[i][0]) {
      return romanNums[i][1] + convertToRoman(num - romanNums[i][0]);
    }
  }
 }
 
 console.log(convertToRoman(36));
 console.log(convertToRoman(4));
 console.log(convertToRoman(891));