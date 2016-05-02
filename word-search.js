var words = ['oath', 'pea', 'eat', 'rain'];
var board = [
	["o", "a", "a", "n"],
	['e', 't', 'a', 'e'],
	['i', 'h', 'k', 'r'],
	['i', 'f', 'l', 'v']
];

function word(words, board){
	var map = {};
	var array = [];
	numbersCount(map, board);
	countCheck(map, array, words, board);
	console.log(array);
}
word(words, board);
function numbersCount(map, board){
	for(var i = 0; i < board.length; i++){
		for(var j = 0; j < board[i].length; j++){
			if(map[board[i][j]]){
				map[board[i][j]]++;
			} else{
				map[board[i][j]] = 1;
			}
		}
	}
}
function countCheck(map, array, words, board){
	var map2 = {};
	for(var i = 0; i < words.length; i++){
		for(var j = 0; j < words[i].length; j++){
			if(map2[words[i][j]]){
				map2[words[i][j]]++;
			} else{
				map2[words[i][j]] = 1;
			}
		}
		for(var x in map2){
			if(!map[x] || map2[x]> map[x]){
				return false;
			}
		}
		array.push[words[i]];
	}
}