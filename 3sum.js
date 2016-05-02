var array = [-1, 0, 1, 2, -1, -4];

function threeSum(array){
	var solution = [];
	var array = array.sort(function(a, b){
		return a - b;
	});
	if(array.length<3){
		return -1;
	}
	for(var i = 0; i < array.length -2; i++){
		for(var j = i +1; j < array.length -1; j++){
			for(var k = j+1; k < array.length; k++){
				if(array[i] + array[j] + array[k] == 0){
					solution.push([array[i], array[j], array[k]]);
				}
			}
		}
	}
	for(var x in solution){
		if(solution[x] == solution[x+1]){
			solution.splice(x+1,1);
		}
	}
	console.log(solution);
}
threeSum(array);
