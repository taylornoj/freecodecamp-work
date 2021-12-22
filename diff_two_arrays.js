/* Compare two arrays and return a new array with
any items only found in one of the two given arrays, but not both.

Return the symmetric difference of the two arrays */

function diffArray(arr1, arr2) {
  return arr1
  .concat(arr2)
  .filter(item => !arr1.includes(item) || !arr2.includes(item));
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
                      ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));