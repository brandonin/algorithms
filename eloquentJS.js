// Write a function arrayToList that builds a list.

function arrayToList(array) {
	for(var i = 0; array.length; i++){
		// var list.
	}
}
// Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the input arrays.

// function flatten(array) {
// 	array.reduce(function(a, b){
// 		console.log(a.concat(b));
// 		return a.concat(b);
// 	})
// }
var bang = [[1,2,3], [4,5,6], [7,8,9]];
// console.log(flatten(bang));	

// console.log(bang.reduce(function(a, b){
// 		return a.concat(b);
// 	}))

var obj = {key1: "something"};

var test = {
	key2: "something new",
	key3: "something else new"
}
var test2 = {
	bla: "even more stuff"
}

function extend(obj){
	for(var i = 1; i<arguments.length; i++){
		for(var a in arguments[i]){
			obj[a] = arguments[i][a];
		}
	}
	return obj;
}
console.log(extend(obj, test, test2));


