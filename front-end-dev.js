// What is the value of foo?
var foo = 10 + "20";

console.log(foo)

// Make this work.

function add(a) {
	var sum = 0;
	if (arguments.length > 1) {
		for (var x in arguments) {
			sum += arguments[x];
		}
	} else {
		return function(b) {
			return a + b;
		}
	}
	return sum;
}
console.log(add(2,5));
console.log(add(2)(5));

console.log("i'm a lasagna hog".split("").reverse().join(""));

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x)