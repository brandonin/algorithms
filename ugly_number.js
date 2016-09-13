var isUgly = function(num) {
	for (var x of [2,3,5]) {
		while (num && num % x === 0) {
			num /= x;
		}
	}
	return num === 1;
};