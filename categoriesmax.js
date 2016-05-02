function max(line){
    var participant = line.split(" | ");
    var categories = participant[0].split(" ");
    var max = [];
    for(var i = 0; i < categories.length; i++ ){
        var somemax = categories[i][0];
        for(var j = 1; j < participant.length; j++){
            if (somemax < categories[i][j]){
                somemax = categories[i][j];
            }
        }
        max.push(somemax);
    }
    console.log(max.join(' '));}
}