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
    returnArray[i] = Array(n);
  }

  // we traverse the array but with each 'dead end' we want to change direction

  /* 
  set up boundary variables that will 'shrink'
  everytime an edge has been populated
  */
 let topBoundary = 0;
 let bottomBoundary = n-1;
 let leftBoundary = 0;
 let rightBoundary = n-1;

 // counter will be incremented value that populates the array positions
 let counter = 1;

 // direction variable will be checked to see whether the x or y value should be changed
 let direction = 'LEFT';

 // these variables are the x and y positions in the matrix and are initialized as the first position
 let x = 0;
 let y = 0;

 // start a loop that will run until all boundaries have shrunk past opposite facing boundary
 while (topBoundary <= bottomBoundary && leftBoundary <= rightBoundary) {
   
 }





  return returnArray;
}

console.log(createSpiral(0));
console.log(createSpiral(2));