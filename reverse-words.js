function reverse(string){
	var compare= string.split('');
	for(var i = 0; i < string.length/2; i++){
		swap(compare, i, string.length-i);
	}
	var compare = compare.join('');
	console.log(compare);
}
function swap(string, i, j){
	var temp = string[i];
	string[i] = string[j];
	string[j] = temp;
}
reverse("hello");