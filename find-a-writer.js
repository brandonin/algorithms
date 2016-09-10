var input = "3Kucdq9bfCEgZGF2nwx8UpzQJyHiOm0hoaYP6ST1WM7Nks5XjrR4IltBeDLV vA| 2 26 33 55 34 50 33 61 44 28 46 32 28 30 3 50 34 61 40 7 1 31";

function writer(line) {
	var split = line.split("| ");
	var string = split[0];
	var key = split[1].split(" ");
	var newString = "";
	var count = 0;
	for (var i = 0; i < key.length; i++) {
		newString += string[key[i]-1];
	}
	console.log(newString);
}

writer(input);