/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
var str = n.toString();
var min = parseInt(str[0]);
var max = parseInt(str[0]);
for (var i =1;i<str.length; i++){
    if (max < parseInt(str[i])){
        max = parseInt(str[i]);
    }
    else if (min > parseInt(str[i])){
        min = parseInt(str[i]);
    }
}
return (max-min);
};