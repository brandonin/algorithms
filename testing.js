var pattern = ["abb","a"];
var input = "redbluebluered";

function patterns(a, b){
	var pattern = a.entries();
	console.log(pattern.next().value);
	console.log(pattern.next().value);
}
patterns(pattern, input);