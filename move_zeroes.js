// Initial function
var moveZeroes = function(nums) {
    var array = [];
       
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] ===0) {
            array.unshift(i);
        }
    }

    
    for (var i = 0; i < array.length; i++) {
        nums.splice(array[i], 1);
        nums.push(0);
    }
};

// Refractored function I think

var moveZeroes = function(nums) {
    var array = [];
    nums.forEach(function(i, index) {
        if (i === 0) {
            array.unshift(index);
        }        
    })

    array.forEach(function(i) {
        nums.splice(i, 1);
        nums.push(0)        
    })
};