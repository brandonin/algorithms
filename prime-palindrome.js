// https://www.codeeval.com/open_challenges/3/submit/

function primePalindrome(max) {
	var answer;
	// var i = 2;
	for (var i = max; i > 2; i--) {
	    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 && i % 11 != 0) {
	    	var string = i.toString();
	    	var array = [];
	    	for (var j = 0; j < string.length; j++) {
	    		array.push(string[j]);
	    	}

	    	if (array.reverse() === array) {
		        answer = i;
		        break;
	        }
	    }
	}
	console.log(answer);
}

primePalindrome(1000);