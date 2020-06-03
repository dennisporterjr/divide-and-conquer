
function repeat(x, n) {
  var o = '';

  for(let i = 0; i < n; i++) o += x;

  return o;
}

function evenDigits(a, b) {
  while(a.length !== b.length || a.length%2) {
    if(a.length > b.length) {
      b = '0' + b;
    } else {
      a = '0' + a;
    }
  }

  return [a, b];
}

function multiply(x, y) {
  x = x + "";
  y = y + "";
  
  var xl = x.length;
  var yl = y.length;

  // allow for actual 1x1 multiplication
  if(xl === 1 && yl === 1) {
    return BigInt(x) * BigInt(y);
  }
  
  [x, y] = evenDigits(x,y);

  xl = x.length;

  var a = x.slice(0,Math.floor(x.length/2));
  var b = x.slice(Math.floor(x.length/2));

  var c = y.slice(0,Math.floor(y.length/2));
  var d = y.slice(Math.floor(y.length/2));

  // step 1
  var e = multiply(a, c);

  // step 2
  var f = multiply(b, d);

  // step 3
  var aplusb = ( BigInt(a) + BigInt(b) );
  var cplusd = ( BigInt(c) + BigInt(d) );
  var g = multiply(aplusb, cplusd);

  // step 4
  var h = g - f - e;

  // step 5
  var i = e + repeat('0', xl);
  var j = f;
  var k = h + repeat('0', xl/2);

  return BigInt(i) + BigInt(j) + BigInt(k);

}

// console.log('answer : ', multiply('1234','5678'));
console.log('answer : ', multiply(
  3141592653589793238462643383279502884197169399375105820974944592n,
  2718281828459045235360287471352662497757247093699959574966967627n
));
// console.log('answer : ', multiply('46','134'));
// console.log('answer : ', evenDigits('6','13'));

// 3141592653589793238462643383279502884197169399375105820974944592
// 2718281828459045235360287471352662497757247093699959574966967627