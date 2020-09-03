/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
var max = input[0];
var index = 0;
for (var i=1; i < input.length; i++){
        if (max < input[i]){
                max = input[i];
                index = i;
        }
}
for (var j = 0; j < input.length; j++){
        if (j!=index && max < 2*input[j]){
                return false;
        }
}
return true;
};