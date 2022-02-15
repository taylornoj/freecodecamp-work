function nextVersion(version) {
  // split 'current' version removing "." separator and return array of numbers only
  let arr = version.split(".")
  // loop through numbers array but start at the end
  for(let i = arr.length - 1; i >= 0; i--) {
    // if the number is > than 0 and also a 9, turn it into 0
    // otherwise increment number by one and break from the loop
    if(i > 0 && arr[i] === "9") {
      arr[i] = 0;
    } else {
      arr[i]++
      break
    }
  }
  // join final array, placing "." between elements
  return arr.join(".");
}

console.log(nextVersion("1.2.3"));
console.log(nextVersion("2.0"));
console.log(nextVersion("0.9.9"));