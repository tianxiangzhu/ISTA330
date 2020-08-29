/*
We have a string, input, and an integer array, shuffleIndices.
We want to shuffle the string based on the shufleIndices array.

Example:
input: 'llheo', shuffleIndices = [2, 3, 0, 1, 4]
output: 'hello'

*/

var suffleString = function(input, shuffleIndices) {
var result ='';
var arr = new Array(input.length);
for (var i = 0; i < input.length; i++){
    arr[i]=input[i];
}
for (var j = 0; j < shuffleIndices.length; j++){
    result += arr[shuffleIndices[j]];
}
return result;
};