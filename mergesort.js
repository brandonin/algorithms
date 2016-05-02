function mergesort(value1, value2){
	var i;
	if(!value1 && !value2){
		return -1;
	}
	for(i = 0; i < value2.length; i++){
		value1.push(value2[i]);
	}
	return value1.sort(function(a,b){
		return a - b;
	});
}


a = [1,9,3,4,5,7,2,6,8,3];
b = [7,5,3,5,55,393,20934,324,342,1];
console.log(mergesort(a,b));