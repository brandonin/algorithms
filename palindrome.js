var string = "aabb aa";
var empty = "";
function palindrome(string){
	if(!string){
		return -1;
	}
	var temp = string.split('');
	var onlyletters = replace(temp);
	var reversed = onlyletters.split('').reverse().join('');
	if(onlyletters == reversed){
		console.log(true)
	} else {
		console.log(false);
	}
}

// palindrome(string);
// palindrome(empty);
function replace(string){
	for(var i = 0; i < string.length; i++){
		string[i] = string[i].replace(/[^a-zA-Z]/, "").toLowerCase();
	}
	return string.join('');
}
palindrome(string);