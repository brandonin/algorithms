var longestCommonPrefix = function(strs) {
    strs = strs.split(' ');
    var map = {};
    strs.forEach(function(x) {
    	if(!map[x]) {
    		map[x] = 1;
    	} else {
    		map[x] += 1;
    	}
    })
	var arr = Object.keys(map).map(function (key) { 
		return map[key]; 
	});
	var max = Math.max.apply( null, arr);
	return max
};

longestCommonPrefix('hello hello hello');