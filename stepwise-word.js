function stepwise(line){
   line = line.split(" ");
   var max = line[0];
   var solution = [];
   for(var i = 1; i < line.length; i++){
        if(max.length < line[i].length){
            max = line[i];
        }   
   }
   for(var i = 0; i < max.length; i++){
       var word = [];
       for(var j = 0; j < i; j++){
           word.push("*");
       }
       word.push(max[i]);
       solution.push(word.join(''));
   }
   console.log(solution.join(' '));
}
stepwise('ef fd dg bg big');
