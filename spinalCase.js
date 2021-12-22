/* Convert a string to spinal case. 
Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2")
  .toLowerCase()
  .replace(/\s+|_+/g, "-")
}
console.log(spinalCase("thisIsSpinalTap"));