var matrix = [
	[3,0,1,4,2],
	[5,6,3,2,1],
	[1,2,0,1,5],
	[4,1,0,1,7],
	[1,0,3,0,5]
];

function sumRegion(matrix, row1, col1, row2, col2){
	var count = 0;
	for(var i = row1; i <= row2; i++){
		for(var j = col1; j <=col2; j++){
			count += matrix[i][j];
		}
	}
	console.log(count);
}

function update(matrix, row, col, value){
	matrix[row][col] = value;
}

sumRegion(matrix, 2, 1, 4, 3);
update(matrix, 3, 2, 2);
sumRegion(matrix, 2, 1, 4, 3);
// sumRegion(matrix, 1, 1, 2, 2);
// sumRegion(matrix, 1, 2, 2, 4);
