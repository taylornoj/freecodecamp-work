/*
Return true if the given string is a palindrome. 
Otherwise, return false.

You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything 
into the same case (lower or upper case) in order to 
check for palindromes.
*/

function palindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/ig,"");
  let strReverse = str.split("").reverse().join("");

  return str == strReverse;
}

console.log(palindrome("eye"));
console.log(palindrome("nope"));
console.log(palindrome("five|\_/|four"));
console.log(palindrome("_eye"));
console.log(palindrome("My age is 0, 0 si ega ym."));