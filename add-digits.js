// This was not correct
// var addDigits = function(num) {
//     if (num < 9) {
//     	return num;
// 	}
//     var sum = sumfn(num);

//     function sumfn(number) {
// 	    var seperate = (number.toString()).split('');
// 	    var add = 0;
// 	    for (var i = 0; i < seperate.length; i++) {
// 	    	add += parseInt(seperate[i]);
// 	    }    	
// 	    return add;
//     }

//     if (sum > 9) {
//     	sumfn(sum);
//     } else {
//     	return sum;
//     }
// };


// Correct in constant time
var addDigits = function(num) {
    if (num === 0) {
       return 0; 
    }
    if (num % 9 === 0) {
        return 9;
    }
	return num % 9;
};

console.log(addDigits(18));