// Runtime is O(n^2), memory is constant
var containsDuplicate = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) != nums.lastIndexOf(nums[i])) {
            return true;
        }
    }
    return false;
};


// Runtime is O(n), doesn't work for some reason

function containsDuplicate(nums) {
	var set = new Set(nums);
	if (Array.from(set) === nums) {
		return false;
	}
	return true;
}

console.log(containsDuplicate([3, 1]))