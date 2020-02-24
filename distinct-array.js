// for a sorted array that is distinct, find the number of elements in common.
function findCommon() {
    var array1 = [1,2,3,4];
    var array2 = [1,2,4,5];
    var count = 0;

    array2.forEach(function(number) {
        if (array1.indexOf(number) > -1) {
            count++;
        }
    })
    return count;
}

console.log(findCommon());
