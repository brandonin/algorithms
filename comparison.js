function compare(number1, number2){
	while(number1 > number2){
		return number1;
	}
	return number2;
}
var number1 = 1;
var number2 = 2;

console.log(compare(number1, number2));