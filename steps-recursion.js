function stairs(steps){
	if(steps < 0){
		return 0;
	}
	else if(steps == 0){
		return 1;
	} else{
		return stairs(steps-1) + stairs(steps-2) + stairs(steps-3);
	}
}

console.log(stairs(3));
// function stairs(steps, map){
// 	if(steps < 0){
// 		return 0;
// 	}
// 	else if(steps == 0){
// 		return 1;
// 	} else if( map[steps] > -1){
// 		return map[steps];
// 	} else{
// 		map[steps] = stairs(steps-1, map) + stairs(steps-2, map) + stairs(steps-3, map);
// 		return map[steps];
// 	}
// }

// console.log(stairs(3));