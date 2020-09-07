/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
var result = [];
for (var j = 0; j < M[0].length; j++){
    row = [];
    for (var i = 0; i < M.length; i++){
        row.push(M[i][j]);
    }
    result.push(row);
}
return result;
};