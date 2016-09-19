// For some reason this doesn't work for leet code
// This is O(1) runtime and I believe O(1) space unless creating the new set without storing it provides space

var removeDuplicates = function(nums) {
    return Array.from(new Set(nums));
};

// One that works for leetCode but is O(n^2) runtime and O(1) memory

var removeDuplicates = function(nums) {
    for (var i = 0; i < nums.length; i++) {
    	if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) {
    		return false;
    	}
    }
    return true;
};