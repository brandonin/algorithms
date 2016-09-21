var topKFrequent = function(nums, k) {
    var map = {};
    var array = [];
    for (var i = 0; i <nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    while (k > array.length) {
        var max = 0;
        var index = [];
        for (var x in map) {
            if (map[x] > max) {
                max = map[x];
                index = x;
            }
        }
        array.push(parseInt(index));
        delete map[index];
    }
    return array;
};











