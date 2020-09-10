/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
var answer = [];
answer.push([]);
  for (var i=1;i<(1<<input.length);i++) {
    var subset = [];
    for (var j=0; j<input.length;j++)
      if (i & (1<<j)){
        subset.push(input[j]);
      }
    answer.push(subset);
  }
return answer;
}; 