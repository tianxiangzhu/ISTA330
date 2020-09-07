/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
input.sort((a,b) => a-b);
var min = 99999;
var answer = [];
for (var i=0;i<input.length;i++){
    var diff = input[i+1] - input[i];
    if (diff<min){
        answer = [];
        answer.push([input[i],input[i+1]]);
        min = diff;
    }
    else if(min === diff){
        answer.push([input[i],input[i+1]]);
    } 
}
return answer;
};