function minimum(line){
    var count = parseInt(line);
    line = line.split(' ');
    var sum = 0;
    for(var i = 1; i < line.length; i++){
        sum += parseInt(line[i]);
    }
    var average = Math.ceil(sum/count);
    var length = 0;
    for(var i = 1; i < line.length; i++){
        length += Math.abs(average - parseInt(line[i]));
    }
    console.log(length);
}
var line = "6 1 5 1 3 6 5";
minimum(line);