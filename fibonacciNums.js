/*
Given a positive integer num, return the sum of all 
odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 
and 1. Every additional number in the sequence is the 
sum of the two previous numbers. The first six numbers 
of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all 
odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

function sumFibs(num) {
  // variable keeping record of previous and current numbers
  let prevNumber = 0;
  let currNumber = 1;
  // variable keeping record of result that will be returned
  let result = 0;
  // make sure we do not go over the number given as a parameter
  while (currNumber <= num) {
    // use modulo to see if current num is even or odd and if odd, add to result
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

console.log(sumFibs(4));
console.log(sumFibs(1000));