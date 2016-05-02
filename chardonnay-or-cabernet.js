function chardonnay(line){
    line = line.split(' | ');
    var indicate = line[1].split('');
    var words = line[0].split(' ');
    var solution = [];
    for(var i = 0; i < words.length; i++){
        map = {};
        for(var j = 0; j < indicate.length; j++){
            if(!words[i].indexOf(indicate[j])){
                map.flag = false;
            }
        }
        if(!map.flag){
            solution.push(words[i]);
        }
    }
    console.log(solution.join(' '));
}