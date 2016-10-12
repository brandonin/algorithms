function isUnique(string) {
	var set = new Set(string);
	return set.size === string.length;
}

isUnique('helo');

