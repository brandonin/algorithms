// This a solution with O(n^2) runtime
// var productExceptSelf = function(nums) {
//     var array = [];
//     for (var i=0; i < nums.length; i++) {
//         var combination = 1;
//         for (var j= 0; j < nums.length; j++) {
//             if(i != j) {
//                 combination *=nums[j];    
//             }
//         }
//         array.push(combination);
//     }
//     return array;
// };

// Solution with O(n) runtime
var productExceptSelf = function(nums) {
    var array = [];
    for (var i=0, left= 1; i < nums.length; i++) {
    	array[i] = left;
    	left *= nums[i];
    }

    for (var i=nums.length-1, right=1; i >= 0; i--) {
    	array[i] *= right;
    	right *= nums[i];
    }
    console.log(array);
    // return array;
};

productExceptSelf([1,2,3,4, 1, 2]);