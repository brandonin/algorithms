function realFake(line){ 
   var line = line.split(' ');
   line = line.join('');
   line = line.split('');
   var count = 0;
   for(var i = 0; i < line.length; i ++){
   		if(i%2 ==0){
		   line[i] = parseInt(line[i])*2;
	    }
	    count += parseInt(line[i]);
   }

   console.log(count);
   if(count %10 === 0){
       console.log(true);
   }else {
       console.log(false);
   }
}

var line = "9904 6881 3959 8444";
var line2 = "8078 8934 7554 4139";
realFake(line);
realFake(line2);