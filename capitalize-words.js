var string = "HeLlo world";

function capitalize(input) {
	return input.replace(/\w\S*/g, function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1);
	})
}

console.log(capitalize(string));