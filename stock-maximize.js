// Brute force approach - least optimal
// function maximize(prices) {
// 	var profit = 0;
// 	var min, max;

// 	for (var i = 0; i < prices.length; i++) {
// 		for (var j = i + 1; j < prices.length; j++) {
// 			profit = Math.max(profit, prices[j] - prices[i]);
// 			min = i;
// 			max = j;
// 		}
// 	}
// 	return [profit, min, max];
// }


// dynamic programming - most optimal
function maximize(prices) {
	let min = prices[0],
	profit = -Infinity;
	for (var i = 1; i < prices.length; i++) {
		if (prices[i] < min) {
			min = prices[i];
		} else if (prices[i] > min && prices[i] - min > profit) {
			profit = prices[i] - min;
		}
	}

	return isFinite(profit) ? profit : 0;
}

console.log(maximize([10, 12, 4, 12, 5, 4, 3, 2, 1, 8]));
