/*
Given a non-negative integer, we want to reduce it to zero. 
We are allowed to do one of the following three operations:
1. divide the number by 3
2. divide the number by 4
3. subtract 1 from the number
Find the minimum number of operations to reduce a given number to zero.
Example: 
input: 12
output: 3
12 divided by 4 becomes 3 which divided by 3 becomes 1. The third and last step is the substraction by one operation.
*/

var minimalReduction = function(n) {
var count = 0;
var num1 =  n%4 ;
count ++;
var num2 = num1%3;
count ++;
while (num2 != 0){
    num2 -= 1;
    count ++;
}
return count;
};

console.log('hi');