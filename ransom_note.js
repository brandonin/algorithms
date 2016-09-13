var canConstruct = function(ransomNote, magazine) {
    var map1 = {};
    var map2 = {};

    addToMap(ransomNote, map1);
    addToMap(magazine, map2);
    
    for (var x in map1) {
        if (!map2[x] || map1[x] > map2[x]) {
            return false;
        }
    }
    return true;
    
    function addToMap(string, map) {
        var trim = string.replace(/ /g, '');
        for (var i = 0; i < trim.length; i++) {
            if (!map[trim[i]]) {
                map[trim[i]] = 1;
            } else {
                map[trim[i]] ++;
            }
        }
    }
};

console.log(canConstruct('helloa world', "dlroawolldslkdjfdlkseh"));