/*
Perform a search and replace on the sentence using 
the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second 
argument with (after).

Note: Preserve the case of the first character in the 
original word when you are replacing it. For example if 
you mean to replace the word Book with the word dog, it 
should be replaced as Dog
*/

function myReplace(str, before, after) {
  let index = str.indexOf(before);   // find index where before is on the string
  if (str[index] === str[index].toUpperCase()) {   // check if first letter in before word is uppercase
    after = after.charAt(0).toUpperCase() + after.slice(1);    // if yes, change after word to be capitalized and add rest of the word
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);    // or, change after word to be lowercase 
  }
  str = str.replace(before, after);    // then replace before word with after word

  return str;
};
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));