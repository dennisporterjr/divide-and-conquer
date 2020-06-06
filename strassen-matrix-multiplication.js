









console.log("[");
for(var i = 0; i < 5; i++) {
  console.log(
    "  [" + ( "1234".split("").sort(() => Math.random() - .5).join(",") ) + "],"
  );
}
console.log("]");

// The Matrices
var X = [
  [3,1,4,2],
  [1,2,3,4],
  [1,2,3,4],
  [1,3,4,2],
  [2,1,4,3]
];
var Y = [
  [2,1,3,4],
  [1,2,3,4],
  [3,4,1,2],
  [2,4,3,1],
  [1,3,4,2]
];