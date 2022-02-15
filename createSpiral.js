/*
Your objective is to complete a function createSpiral(N) 
that receives an integer N and returns a two-dimensional
array where numbers from 1 to N2 should be represented 
as clockwise spiral.
*/

const createSpiral = n => {
  // start with what should be input if !integer or < 1
  if (!Number.isInteger(n) || n < 1) return []

  // work out how to return correct num of arrays given input
  let returnArray = [];
  for (let i = 0; i < n; i++) {
    returnArray[i] = Array();
  }
  return returnArray;
}

console.log(createSpiral(0));
console.log(createSpiral(2));