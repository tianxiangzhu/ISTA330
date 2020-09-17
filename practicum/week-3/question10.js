/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
if (s ===''){
    return true;
}
s = s.toLowerCase();
s = s.replace(/[^a-z\d]+/g, '');
if (s===s.split('').reverse().join('')){
    return true;
}
else{
    return false;
}
};