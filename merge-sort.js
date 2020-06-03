

function mergeSort(nums) {

  if(nums.length === 1) return nums;

  var left = nums.slice(0,Math.floor(nums.length/2));
  var right = nums.slice(Math.floor(nums.length/2));

  function merge(a, b) {
    var i = 0;
    var j = 0;
    var output = [];
    var k = a.length + b.length;

    while(k) {
      if(a[i] !== undefined && a[i] <= b[j] || b[j] === undefined) {
        output.push(a[i]);
        i++;
      } else if(b[j] !== undefined) {
        output.push(b[j]);
        j++;
      }

      k--;
    }

    return output;
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

console.log(mergeSort([7,1,8,2,3,4,5,6]));
console.log(mergeSort([1,2,8,4,6,3,5,7]));
console.log(mergeSort([4,1,5,2,8,7,6,3]));
console.log(mergeSort([4,3,8,2,7,1,5,6]));
console.log(mergeSort([3,8,7,2,4,6,5,1]));

// for(var i = 0; i < 5; i++) {
//   console.log(
//     '[' + ( '12345678'.split('').sort(() => Math.random() - .5).join(',') ) + ']'
//   );
// }

