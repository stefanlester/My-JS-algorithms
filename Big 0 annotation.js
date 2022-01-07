//The Big-O notation measures the worst-case complexity of an algorithm. In Big-O notation, n represents the number of inputs.

//An example of an O(n) algorithm printing numbers from 0 to n-1
function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

//O(n2) quadratic time
function exampleQuadratic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
    }
  }
}

//0(n3) cubic time
function exampleCubic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
      for (var k = j; j < n; j++) {
        console.log(k);
      }
    }
  }
}
