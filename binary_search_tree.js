function binarySearchTree() {
	this._root = null;
}

binarySearchTree.prototype.add = function(value) {
	var node = {
		value : value,
		left : null,
		right : null
	}

	if (!this._root) {
		this._root = node;
		return this;
	}
	
	current = this._root;
	while (current) {
		if (value < current.)
	}
}

binarySearchTree.prototype.contains = function(value) {
	if (!this._root) {
		return false;
	}
	
	var current = this._root;
	var found = false;

	while (!found && current) {
		if (value < current.value) {
			current = current.left;
		} else if (value > current.value) {
			current = current.right;
		} else {
			found = true;
		}
	}
	return found;
}