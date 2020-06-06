
function mergeSort(A) {
  var len = A.length;

  if(len === 1) return A;


  var left = A.slice(0,Math.floor(len/2));
  var right = A.slice(Math.floor(len/2));

  function merge(B, C) {
    var l = B.length + 
            C.length;     // output array length
    var D = Array(l);     // output array
    var i = 0;            // pointer for array B
    var j = 0;            // pointer for array C 

    for(let k = 0; k < l; k++) {
      if(B[i] <= C[j] || C[j] === undefined) {
        D[k] = B[i];
        i++;
      } else if(C[j] < B[i] || B[i] === undefined) {
        D[k] = C[j];
        j++;
      }
    }

    return D;
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

console.log(mergeSort([2,7,1,8,6,3,5,4]));