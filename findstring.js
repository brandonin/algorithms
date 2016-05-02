function findString(array, string){
	if (array.length < 1){
		return -1;
	}
	for(var i = 0; i < array.length; i++){
		if(array[i] == string){
			return i;
		}
	}
	return -1;
}

var array = ["", "hello", "", "", "bye", ""];
var string = 'bye';
console.log(findString(array, string));