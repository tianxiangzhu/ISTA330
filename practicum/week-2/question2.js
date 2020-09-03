
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

var largestSubarray = function(input) {
var max_sum = 0;  
var max_ending = 0; 
for (var i = 0; i < input.length; i++) { 
        max_ending += input[i];
         
        if (max_sum < max_ending){ 
        max_sum = max_ending;}

        if (max_ending < 0){
        max_ending = 0;} 
} 
return max_sum;
};
