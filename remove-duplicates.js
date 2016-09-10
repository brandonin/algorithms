line = "1,1,1,2,3,3,3,4,5,5,5";
var array = [];
var line = line.split(',');
for (var i = 0; i < line.length; i++) {
    if (array.indexOf(line[i]) === -1) {
        array.push(line[i]);
    }
}
console.log(array.join(','))