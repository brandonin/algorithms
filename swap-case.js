var string = "HeLlo World!";

// function swap(line) {
// 	var split = line.split('');
// 	for (var i = 0; i < split.length - 1; i++) {
// 		var ascii = split[i].charCodeAt();
// 		if (ascii >= 65 && ascii <= 90) {
// 			ascii += 32;
// 		} else if (ascii >= 97 && ascii <= 122) {
// 			ascii -= 32;
// 		}
// 		split[i] = String.fromCharCode(ascii);
// 	}
// 	var join = split.join('');
// 	console.log(join)
// }

function swap(line) {
	var newLine = "";
	for (var i = 0; i <line.length; i++) {
		if (line[i] === line[i].toLowerCase()) {
			newLine += line[i].toUpperCase();
		} else {
			newLine += line[i].toLowerCase();
		}
	}
	console.log(newLine)
}

swap(string);