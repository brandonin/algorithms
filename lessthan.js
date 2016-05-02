function lessThan(array, number){
	count = 0;
	var map = {flag: false};
	for(var i =0; i < array.length; i ++){
		if(array[i] < number){
			count++;
		} else if(array[i] == number & map.flag == false){
			map.flag = true;
		} else if(array[i] == number & map.flag == true){
			count++;
		}
	}
	return count;
}
var array = [5, 4, 2, 9, 5, 1];
var number = 2;
console.log(lessThan(array, number));