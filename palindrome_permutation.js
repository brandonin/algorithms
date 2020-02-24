function palindromePermutation(string) {
	var trim = string.replace(/\s/g, '');
	if (trim.split('').reverse().join('') === trim) return true;
}

console.log(palindromePermutation('ollo'));