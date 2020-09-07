/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var map = new Map();
    for (var i = 1; i<=n; i++) {
        let x = i.toString().split("").map(x => Number(x));
        let sum = x.reduce((acc, cur) => acc + cur);
        if (map.has(sum)) {
            map.get(sum).push(x);
        } else {
            map.set(sum, [x]);
        }
    }
    let arr = Array.from(map.values()).map(x => x.length);
    arr.sort((a, b) => b - a);
    if ([...new Set(arr)].length == 1){
        return arr.length;
    }
    for (var j = 1; j < arr.length; j++) {
        if (arr[j - 1] != arr[j]) {
            return j;
        }
    }
};
