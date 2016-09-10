function mergeSort(A) {
	var array1 = [],
	array2 = [];
	var half = Math.ceil(A.length/2);
	for (var i = 0; i < half; i++) {
		array1.push(A[i]);
	}
	for (var i = half; i < A.length; i++) {
		array2.push(A[i]);
	}
	var index1 = 0;
	var index2 = 0;
	// console.log(array2)
	for (var i = 0; i < A.length; i++) {
		console.log(array1[index1], array2[index2])
		if (array1[index1] < array2[index2]) {
			A[i] = array1[index1];
			index1++;
		} else {
			A[i] = array2[index2];
			index2++;
		}
	}
	return A;
}

mergeSort([4,9,2,5,1,4,58,20,4]);