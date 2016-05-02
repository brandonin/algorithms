function swap(array, number1, number2){
	var index1, index2;
	for(var i = 0; i < array.length; i++){
		if(array[i] == number1){
			index1 = i;
		}
		if(array[i] == number2){
			index2 = i;
		}
	}
	array.push(number2);
	array[index2] = array[index1];
	array[index1] = array[array.length-1];
	array.pop();
	return array;
}

var array = [1,2,3,4];
var number1 = 1;
var number2 = 4;
console.log(swap(array, number1, number2));