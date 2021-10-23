function pairElement(str) {
  dnaPair = [];
  str = str.split("");
  var strand = function(char) {
    switch(char) {
      case "A":
        dnaPair.push(["A", "T"]);
        break;
      case "T":
        dnaPair.push(["T", "A"]);
        break;
      case "C":
        dnaPair.push(["C", "G"]);
        break;
      case "G":
        dnaPair.push(["G", "C"]);
        break;
    }
  };
  for (var i = 0; i < str.length; i++) {
    strand(str[i]);
  }
  return dnaPair;
}
console.log(pairElement("GCG"));