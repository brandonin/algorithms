function reverse(input){
	var input = input.split('');
	for(var i = 0; i < input.length/2; i++){
		var temp = input[i];
		input[i] = input[input.length-i-1];
		input[input.length-i-1] = temp;
	}
	console.log(input.join(''));
}

reverse('hello');

function reverse1(input){
	var input = input.split('');
	for(var i = input.length-1; i >=0; i--){
		input.push(input[i]);
	}
	input.splice(0, input.length);
	console.log(input.join(''));
}
reverse1("hello");