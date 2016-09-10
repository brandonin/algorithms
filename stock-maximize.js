// Brute force approach - least optimal
// function maximize(array) {
// 	var profit = 0;
// 	var min, max;

// 	for (var i = 0; i < array.length; i++) {
// 		for (var j = i + 1; j <array.length; j++) {
// 			profit = Math.max(profit, array[j] - array[i]);
// 			min = i;
// 			max = j;
// 		}
// 	}
// 	return [profit, min, max];
// }


// dynamic programming - most optimal
function maximize(array) {
	var length = array.length,
	min = array[0],
	profit = -Infinity;
	for (var i = 1; i < length; i++) {
		if (array[i] < min) {
			min = array[i];
		} else if (array[i] > min && array[i] - min > profit) {
			profit = array[i] - min;
		}
	}

	if (isFinite(profit)) {
		return profit;
	} else {
		return 0;
	}
}

console.log(maximize([10, 12, 4, 12, 5, 4, 3, 2, 1, 8]));