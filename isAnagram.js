var isAnagram = function(s, t) {
    var map1 = {}, map2 = {}, sort1, sort2;

    addToMap(s, map1);
    addToMap(t, map2);
    console.log(map1, map2)
    if (JSON.stringify(map1) === JSON.stringify(map2)) {
    	return true;
    } else{
    	return false;
    }

    function addToMap (set, map) {
    	var array = set.sort();
	    for (var i = 0; i < array.length; i++) {
	        if (map[array[i]]) {
	        	map[array[i]]++;
	        } else {
	        	map[array[i]] = 1;
	        }
	    }
	    return map;
    }
};

console.log(isAnagram(['b'], ['b']));