// false, if n is 40, this is not a prime

function isPrime(n) {
	var check = 0;
	while (check < n) {
		check = Math.pow(n) + n + 41;
	}
	if (check === n) {
		return true;
	}
	return false;
}


