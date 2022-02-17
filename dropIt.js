/*
Given the array arr, iterate through and remove 
each element starting from the first element 
(the 0 index) until the function func returns 
true when the iterated element is passed through it.

Then return the rest of the array once the condition 
is satisfied, otherwise, arr should be returned as an empty array.
*/

function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? (dropElements(arr.slice(i + 1), func, i))
    : arr;
}

console.log(dropElements([1, 2, 3, 4], function(n) {
  return n >= 3;
}));