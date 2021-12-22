/* You will be provided with an initial array (the first argument in the 
  destroyer function), followed by one or more arguments.
  Remove all elements from the initial array that are of the 
  same value as these arguments
*/

function destroyer(arr) {
  let toRemove = Object.values(arguments).slice(1); // creating an array of items after argument

  for (let i = 0; i < arr.length; i++) {    // loop through arr
    for (let j = 0; j < toRemove.length; j++) {      // loop through second 'array'
      if (arr[i] === toRemove[j]) {        // if value at current index is equal to value in second array...
        delete arr[i];                     // delete the item
      }
    }
  }
  return arr.filter(item => item !== null);    // returning modified array, filtering out nulls created by delete
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer(["tree", "hamburger", 53], "tree", 53));