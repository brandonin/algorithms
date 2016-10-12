function ransom(note, magazine) {
	const no_spaces_note = remove_spaces(note);
	const no_spaces_magazine = remove_spaces(magazine);

	if (no_spaces_note.length > no_spaces_magazine.length) return false;
	let note_map = {};
	let magazine_map = {};

	map_letters(note_map, no_spaces_note);
	map_letters(magazine_map, no_spaces_magazine);

	for (const x in note_map) {
		if (magazine_map[x] && magazine_map[x] >= note_map[x]) {
			return true;
		} else {
			return false;
		}
	}

	function remove_spaces(string) {
		return string.replace(/\s/g, '');
	}

	function map_letters(map, string) {
		for (const x in string) {
			map[string[x]] = map[string[x]] ? map[string[x]]+= 1 : 1;
		}			
	}
}

console.log(ransom("hello there how are you", "hello there how are you"));