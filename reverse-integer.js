var reverse = function(x) {
	x = x.toString().split('');
	if (x[0] === '-') {
		x.shift();
		return x.reverse().join('') *-1;
	} else {
		return parseInt(x.reverse().join(''));
	}
};

console.log(reverse(100));