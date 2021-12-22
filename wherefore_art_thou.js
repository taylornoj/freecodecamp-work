/*
Make a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching name and value pairs 
(second argument). Each name and value pair of the source object has 
to be present in the object from the collection if it is to be included 
in the returned array.
*/


function whatIsInAName(collection, source) {
  let arr = collection.filter(function(item) {
    for (let i in source) {
      if (source[i] !== item[i]) {
        return false;
      }
    }
    return true;
  });
  return arr
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }));