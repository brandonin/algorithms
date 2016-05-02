function clever(line){
    if(line == 0){
        return;
    }
    var x = line.split(" | ");
    var times = x[1];
    var y = x[0].split(' ');
    for(var i = 0; i < times; i++){
        if(y[i] > y[i+1]){
            var temp = y[i];
            y[i] = y[i+1];
            y[i+1] = temp;
            i = -1;
        }
    }
    console.log(y.join(" "));
}

var test = "4 3 2 1 | 1";
clever(test);