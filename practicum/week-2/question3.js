/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  var result = new Array;
  for (var i = 0; i < n; i++) { 
    result[i] = new Array(i+1);
    for (var j = 0; j < i+1; j++) {            
      if (j === 0 || j === i) {
        result[i][j] = 1;
      } else {
        result[i][j] = result[i-1][j-1] + result[i-1][j];
      }
    }
  }
  
  return result;
};