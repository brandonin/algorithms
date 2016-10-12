// O(n^2)
// function isPermutation(string1, string2) {
	
// 	let array1 = toString(toArray(string1).sort());
// 	let array2 = toString(toArray(string2).sort());

// 	return array1 === array2;

// 	function toArray (string) {
// 		var array = [];
// 		for (var i = 0; i < string.length; i++) {
// 			array.push(string[i]);
// 		}
// 		return array;
// 	}
// }

// O(n)
function isPermutation(string1, string2) {
	
	let object1 = toObject(string1);
	let object2 = toObject(string2);
	if (string1.length >= string2.length) {
		return checkPerm(object1, object2);
	} else {
		return checkPerm(object2, object1);
	}

	function checkPerm(object1, object2) {
		for (var x in object2) {
			if (!object1[x] || object1[x] < object2[x]) return false;
		}
		return true;
	}

	function toObject (string) {
		var object = {};
		for (var i = 0; i < string.length; i++) {
			object[string[i]] = object[string[i]] ? object[string[i]] += 1 : 1;
		}
		return object;
	}
}

console.log(isPermutation("aleecd", "aled"));