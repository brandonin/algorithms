function swapNumbers(line){
   line = line.split(' ');
   for(var i = 0; i < line.length;i++){
   		var holding = line[i].split('');
       var temp = holding[0];
       holding[0] = holding[line[i].length - 1];
       holding[line[i].length - 1] = temp;
       line[i] = holding.join('');
   }
   console.log(line.join(' '));
}
var test = "3What3 8is6 7the1 1airspeed4 1velocity4 7of3 6an4 1unladen3 3swallow6";
swapNumbers(test);