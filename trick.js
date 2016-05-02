function average(list){
    // var list = line.match(/\d+/g);
    var candy = (list[0]*3 + list[1]*4 + list[2]*5) * list[3];
    var sum = list[0] + list[1] + list[2];
    var dispersed = candy/sum;
    console.log(dispersed);
}

var array = [1, 1, 1, 1];
average(array);