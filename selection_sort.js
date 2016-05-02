function processData(input) {
    var input = input.split("\n");
    var N = input[0];
    var Arr = input[1].split(" ");
    for(var i = 0; i < N; i ++){
        var min = Arr[i];
        var position;
        for(var j = i+1; j < N; j ++){
           if (min > Arr[j]){
               min = Arr[j];
               position = j;
           } 
        }
        if(min != Arr[i]){
            Arr[position] = Arr[i];
            Arr[i] = min;
        }
        console.log(Arr.join(' '));
    }
} 

function processData(input) {
    var input = input.split("\n");
    var N = input[0];
    var Arr = input[1].split(" ");
    for(var i = 0; i < Arr.length; i ++){
        var min = Arr[i];
        var position = i;
        for(var j = i; j < Arr.length; j++){
            if( Arr[j] < min){
                min = Arr[j];
                Arr.splice(j, 1);
                Arr.splice(position, 0, min);
            }
        }
        console.log(Arr.join(' '));
    }
} 