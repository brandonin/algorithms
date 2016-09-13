// Iteratively
var isPowerOfTwo = function(n) {
    if (n === 0) return false;
    while (n % 2 === 0) n /= 2;
    return n === 1;
};
// Mathematically
var isPowerOfTwo = function(n) {
    return n != 0 && Math.log2(n) % 1 === 0;
};