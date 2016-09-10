// Find the sum of all primes within a given range
function primeSumRange(number) {
	var factor = Math.sqrt(number);
    var object = {};
    var output = 0;
    for (var i = 0; i < number; i++) {
        object[i] = true;
    }
    
    for (var i = 2; i < factor; i++) {
        if (object[i] === true) {
	        for (var j = i*i; j < number; j+=i) {
               object[j] = false; 
            }
        }
    }

    for (var value in object) {
    	if (object[value] === true) {
    		output += parseInt(value);
    	}
    }
    console.log(output)
}

// primeSumRange(1000);

// Find the Sum of all the primes up to a certain number in an array

function primeSum(range) {
	var count = 0;
	var output = 0;
	var number = 2;
	while (count <= range) {
		if (checkPrime(number)) {
			output += number;
			count ++;
		}
		number++;
	}
	
	console.log(output);

	function checkPrime(argument) {
		for (var i = 2; i < argument; i++) {
			if (argument % i === 0) {
				return false;
			}
		}
		return true;
	}
}

primeSum(1000);