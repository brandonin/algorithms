function replaceSpace(string) {
	return string.trim().replace(/\s/g, "%20");
}

console.log(replaceSpace('   hello there '))