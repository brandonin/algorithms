function oneAway(string1, string2) {
	var length = string1.length > string2.length ? string1.length : string2.length; 
	var count = 0;
	for (var i = 0; i < length; i++) {
		if (string1[i] === string2[i]) {
			continue;
		} else {
			count++;
		}
	}
	return count <= 1;
}

console.log(oneAway('bales', 'bles'));