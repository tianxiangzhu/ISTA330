/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
var answer=new Array(input.length);
for (var i=0; i<input.length;i++){
    var result=1;
    for(var j=0; j<input.length;j++){
        if(j!=i){
            result = result*input[j];
        }
    }
    answer[i]=result;
}
return answer;
};

