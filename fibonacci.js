function fibonacci(number) {
	var fib = [];
	for (var i = 0; i <= number; i ++) {
		if (i === 0) {
			fib[i] = 0;
		} else if (i === 1) {
			fib[i] = 1;
		} else {
			fib[i] = fib[i-1] + fib[i-2];
		}
	}
	console.log(fib[number]);
}

fibonacci(5);