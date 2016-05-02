function magic(array){
	if(array.length < 1){
		return 0;
	} else {
		for(var i = 0; i < array.length; i++){
			if (array[i] == i){
					return i;
				}
		}
		return false;
	}
}
console.log(magic([5,4,3,2,1,0]));