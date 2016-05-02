var pattern1 = "abba";
var string1 = "dog cat cat dog";
var pattern2 = "abba";
var string2 = "dog dog dog dog";

function wordPattern(pattern, string){
	var map = {};
	var pattern = pattern.split('');
	var string = string.split(' ');
	for(var i = 0; i < pattern.length; i++){
		if(!map[pattern[i]]){
			map[pattern[i]] = string[i];
		} else if(map[pattern[i]] != string[i]){
			return false;
		}
	}
	return true;
}

console.log(wordPattern(pattern1, string1));
console.log(wordPattern(pattern2, string2));