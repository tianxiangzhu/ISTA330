/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    A.sort((a,b)=>a-b);
    var answer = 0;
    for (var i=1;i<A.length;i++) {
        if (A[i] <= A[i-1]) {
            answer += A[i-1] + 1 - A[i];
            A[i] = A[i-1] + 1
        }
    }
    return answer;
};