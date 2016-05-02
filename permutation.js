function compression(string){
	if(string.length == 0){
		return false;
	}
	var count = {}, new_string = [];
	for(var i = 0; i < string.length; i ++){
		if(!count[string[i]]){
			count[string[i]] = 1;
		} else{
			count[string[i]]++;
		}
	}
	for(x in count){
		new_string.push(x);
		new_string.push(count[x]);
	}
	if(new_string.length <= string.length){
		return new_string.join('');
	} else{
		return string;
	}
}
var test = "aaaabcd";
console.log(compression(test));