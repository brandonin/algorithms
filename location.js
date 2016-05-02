function location(coordinates){
    var split = line.split(' ');
    var container = "";
    var coordinates = [parseInt(split[0]), parseInt(split[1])];
    var destination = [parseInt(split[2]), parseInt(split[3])];
    if(destination[0] > coordinates[0]){
        container.concat("N");
    } else if (destination[0] < coordinates[0]) {
        container.concat("S");
    }
    if(destination[1] > coordinates[1]){
        container.concat("E");
    } else if (destination[1] < coordinates[1]){
        container.concat("W");
    }
    if (destination[0] == coordinates[0] && destination[1] == coordinates[1]) {
        container = "here";
    }
    console.log(container);
}