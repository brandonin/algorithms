// solve a sudoku and see if it's valid

'use  strict';

// var _ = require('underscore');


var good_sudoku = [
                    [7,8,4,1,5,9,3,2,6], 
                    [5,3,9,6,7,2,8,4,1], 
                    [6,1,2,4,3,8,7,5,9], 
                    [9,2,8,7,1,5,4,6,3], 
                    [3,5,7,8,4,6,1,9,2], 
                    [4,6,1,9,2,3,5,8,7], 
                    [8,7,6,3,9,4,2,1,5], 
                    [2,4,3,5,6,1,9,7,8], 
                    [1,9,5,2,8,7,6,3,4] 
    ];

// part 1 - all rows have unique digits 1-9
function check(row) {
	var map = {};
	for (var i = 0; i < row.length; i++) {
		if (map[row[i]] || row[i] > 9 || row[i] < 1) {
			console.log('false');
			return false;
		}
		map[row[i]] = true;
	}
	return true;
}

// for ( var i = 0 ; i < good_sudoku.length; i++) {
// 	check(good_sudoku[i]);
// }

// part 2 - all columns have unique digits 1-9

function check_column(sudoku) {
	for (var i = 0; i < sudoku.length; i++) {
		var map = {};
		for(var j = 0; j < sudoku[i].length; j++) {
			if (map[sudoku[i][j]] || map[sudoku[i][j]] > 9 || map[sudoku[i][j]] < 1) {
				console.log("false");
				return false;
			}
			map[sudoku[i][j]] = true;
		}
	}
	console.log('true')
	return true;
}

// check_column(good_sudoku);
// part 3 - every 3x3 matrix (there are 9) have unique digits 1-9

function check_matrix(count, sudoku) {
	var i;
	map = {};
	for (i = count; i < 3; i++) {
		console.log(count)
		for (var j = 0; j < 3; j++) {
			if (map[sudoku[i][j]] || map[sudoku[i][j]] > 9 || map[sudoku[i][j]] < 1) {
				console.log('false');
				return false;
			}
			map[sudoku[i][j]] = true;
		}
	}
	console.log('true');
	return true;
}

// for (var i = 0; i < 3; i ++) {
// 	check_matrix(i, good_sudoku);
// }
// var valid = true;
// good_sudoku.forEach(function(arr) {
//     valid = valid && arr.every(function(val, i) { return arr.indexOf(i + 1) > -1; });
// });
// console.log(valid)
good_sudoku.forEach(function(arr) {
	arr.every(function(val, i) {
		return arr.indexOf(i + 1) > -1; 
	})
})

// nathan latka the top