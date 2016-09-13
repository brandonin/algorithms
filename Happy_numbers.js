function happyNumber(line) {
	var array = [0,2,3,4,5,6,8,9];
	if (!line) {
		return false;
	}
	if (line === 1 || line === 7) {
		return true;
	} 
	if (array.indexOf(line) >= 0) {
		return false;
	}
	var split = (line.toString()).split('');
	
	for(var i = 0; i < split.length; i++) {
		split[i] = Math.pow(split[i], 2);
	}
	var sum = split.reduce(function(a,b) {
		return a + b;
	})

	return happyNumber(sum);
}

console.log(happyNumber(998));