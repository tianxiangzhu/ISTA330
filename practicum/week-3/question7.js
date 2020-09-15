/*
Given a m x n matrix filled with non-negative numbers, 
find a path from top left to bottom right 
which minimizes the sum of all numbers along its path. Return the sum.

Note: You can only move either down or right at any point in time.

Example: 
input: [
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
output: 7
        Because the path 1→3→1→1→1 minimizes the sum.

*/

var minPath = function(M) {
for (var m=0;m<M.length;m++){
  for (var n=0;n<M[0].length;n++){
    if (m>0 && n>0){
      M[m][n] = Math.min(M[m][n]+M[m-1][n],M[m][n]+M[m][n-1])
    }
    else if(m>0){
      M[m][n] = M[m][n]+M[m-1][n]  
    }
    else if(n>0){
      M[m][n] = M[m][n]+M[m][n-1]    
    }
  }
}
return M[M.length-1][M[0].length-1]
};