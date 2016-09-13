var canWinNim = function(n) {
    if (!n) {
        return false;
    }
    if (n % 4 === 0) {
    	return false;
    } else {
    	return true;
    }
};

console.log(canWinNim(9));