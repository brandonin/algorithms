function find(array, number){
	if(array.length < 1){
		return -1;
	}
	for(var i = 0; i < array.length; i ++){
		if(number == array[i]){
			return i;
		}
	}
	return -1;
}

var array = [9, 4, 3, 2, 6, 7, 1, 5];
var number = 5;
console.log(find(array, 8));