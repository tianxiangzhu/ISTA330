/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
var sortinput = input.sort();
var num = input.length;
if (num % 2 === 0){
    return (sortinput[num/2-1]+sortinput[num/2])/2
}
return sortinput[(num-1)/2];
};