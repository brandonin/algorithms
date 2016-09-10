// Not space optimized
// var singleNumber = function(nums) {
//     var map = {};
//     for (var i = 0; i < nums.length; i++) {
//         if (map[nums[i]]) {
//            map[nums[i]]++; 
//         } else {
//             map[nums[i]] = 1;
//         }
//     }
//     console.log(map)
//     for(var x in map) {
//         if (map[x] === 1) {
//             return parseInt(x);
//         }
//     }
// };

// Space optimized, but run time is O(n^2)

var singleNumber = function(nums) {

    for (var i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
        	return nums[i];
        }
    }
};


console.log(singleNumber([1,1,2,2,3]))

