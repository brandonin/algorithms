// solve a sudoku and see if it's valid

'use  strict';

// var _ = require('underscore');


var good_sudoku = [
                    [7,7,4,1,5,9,3,2,6], 
                    [5,3,9,6,7,2,8,4,1], 
                    [6,1,2,4,3,8,7,5,9], 
                    [9,2,8,7,1,5,4,6,3], 
                    [3,5,7,8,4,6,1,9,2], 
                    [4,6,1,9,2,3,5,8,7], 
                    [8,7,6,3,9,4,2,1,5], 
                    [2,4,3,5,6,1,9,7,8], 
                    [1,9,5,2,8,7,6,3,4] 
    ];

var isValidSudoku = function(board) {
    // check horizontally

    for (var i = 0; i < 9; i++) {
        var row = new Set();
        var column = new Set();
        for (var j = 0; j < 9; j++) {
        	console.log(row.add(board[i][j]))
            if (board[i][j] != '.' && !row.add(board[i][j])) return false;
            if (board[j][i] != '.' && !column.add(board[j][i])) return false;
        }
    }
    return true;
}

isValidSudoku(good_sudoku);