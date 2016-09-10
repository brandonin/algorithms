// fibonacci sequence. Exponential increase/inefficient
// var climbStairs = function(n) {
//     if (!n) {
//         return 0;
//     } else if (n === 1) {
//     	return 1;
//     }
//     return fib(n+1);

// 	function fib(n) {
// 		if (n <= 1) {
// 			return n;
// 		}

// 	    return fib(n-1) + fib(n-2);
// 	}
// };


// Dynamically O(n);

var climbStairs = function(n) {
	if (!n) {
		return 0;
	}
	var a = 1;
	var b = 1;
	for (var i = 1; i < n; i++) {
		var c = a;
		a = b;
		b += c;
	}
	return b;
}

console.log(climbStairs(5));

