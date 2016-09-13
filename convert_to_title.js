var convertToTitle = function(n) {
    // ascii is 65 - 90
    if (n <= 26) {
        return String.fromCharCode(n + 64);   
    }
    var letter = [];
    var count = n;
    while (count > 0) {
        letter.push(String.fromCharCode((count-1) % 26 + 65));
        count =  Math.floor((count-1)/26);
    }
    return letter.join('');
};

console.log(convertToTitle(27));