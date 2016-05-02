/* Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

// function unique(string){
// 	if(string.length == 1){
// 		return true;
// 	}
// 	for(var i = 0; i < string.length; i ++){
// 		for(var j = 0; j < string.length; j ++){
// 			if(string[i] === string[j] && i != j){
// 				return false;
// 			}
// 		}
// 		if(i == string.length-1){
// 			return true;
// 		}
// 	}
// }
// var string = "hello";
// console.log(unique(string));


function uniquechars(string){
	if(string.length > 256){
		return false;
	}
	var charset = {};
	for(var i = 0; i < string.length; i++){
		if(charset[string[i]]){
			console.log(charset)
			return false;
		} else{
			charset[string[i]] = true;
		}
	}
	console.log(charset)
	return true;
}
var string = "string";
console.log(uniquechars(string));