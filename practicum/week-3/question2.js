
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

var findDuplicates = function(input) {
var answer =[];
for (var i=0; i<input.length;i++){
    for(var j=0; j<input.length;j++){
        if(input[i]===input[j] && i!=j && !answer.includes(input[i])){
            answer.push(input[i]);
        }
    }
}
answer.sort();
return answer;
};
