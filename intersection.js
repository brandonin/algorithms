var group = line.split(';');
var set1 = group[0].split(',');
var set2 = group[1].split(',');
var max;
var flag = 0;
var array = [];
if (set1.length > set2.length) {
    max = set1.length;
    flag = 1;
} else {
    max = set2.length;
    flag = 2;
}
for (var i = 0; i < max; i++) {
    if (flag === 1) {
        if (set2.indexOf(set1[i]) > -1) {
            array.push(set1[i]);
        }
    } else {
        if (set1.indexOf(set2[i]) > -1) {
            array.push(set2[i]);       
        }
    }
}
console.log(array.join(','))