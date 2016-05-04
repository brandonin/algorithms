// Similar to splice with arrays, but strings are immutable. this will allow you to remove characters out of a string.
function remove(array, index) {
	return array.slice(0, index)
		.concat(array.slice(index + 1));
}
console.log(remove(["a", 'b', "c", "d", "e"], 2))
// trim method allows you to take out any spaces, newlines, tabs, etc. out of a string.
console.log("   okay   \n".trim());

// array.filter();