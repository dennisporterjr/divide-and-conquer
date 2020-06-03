
function countInversions(arr) {

  if(arr.length === 1) return [arr, 0];

  var left = arr.slice(0,Math.floor(arr.length/2));
  var right = arr.slice(Math.floor(arr.length/2));

  function countSplit(B, C) {
    var i = 0;
    var j = 0;
    var output = [];
    var k = B.length + C.length;
    var count = 0;

    while(k) {
      if(B[i] !== undefined && B[i] <= C[j] || C[j] === undefined) {
        output.push(B[i]);
        i++;
      } else if(C[j] !== undefined) {
        output.push(C[j]);
        count += (B.length - i);
        j++;
      }

      k--;
    }

    return [output, count];
  }

  var [a, x] = countInversions(left);
  var [b, y] = countInversions(right);
  var [c, z] = countSplit(a, b);

  var inversions = x + y + z;

  return [c, inversions];
}

console.log(countInversions([1,3,5,2,4,6]));