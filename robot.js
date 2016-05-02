function path(x, y){
	var xinstance = 0;
	var yinstance = 0;
	if(x==0 && y ==0){
		return 0;
	} else if(xinstance == x && yinstance == y){
		return 
	} 
	else{
		return path(xinstance+1, yinstance) + path(xinstance, yinstance+1);
	}
}

console.log(path(1,1));