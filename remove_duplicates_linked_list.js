function Node(val) {
	this.value = val;
	this.next = null;
}

function SinglyList () {
	this._length = 0;
	this.head = null;
}

SinglyList.prototype.add = function(value) {
	var node = new Node(value);
	var currentNode = this.head;

	if (!currentNode) {
		this.head = node;
		this._length++;	
		return node;
	} 

	while (currentNode.next) {
		currentNode = currentNode.next;
	}

	currentNode.next = node;
	this._length++;
	
	return node;
}

SinglyList.prototype.removeDuplicates = function() {
	var set = new Set();
	var count = 0;
	var currentNode = this.head;

	if (!currentNode) {
		return "List does not exist";
	}

	while (currentNode) {
		set.add(currentNode.value);
		if (currentNode.next && set.has(currentNode.next.value)) {
			currentNode.next = currentNode.next.next;
			this._length--;
		} else {
			currentNode = currentNode.next;
		}
	}
	console.log(this)
	return this.head;
}

SinglyList.prototype.removeFromEnd = function(position) {
	var count = 1;
	if ( position === null || position > this._length) console.log("Position does not exist");
	
	var currentNode = this.head;
	
	if ( position === this._length) this.head = currentNode.next;

	var remove_position = this._length - position - 1;
	
	while (count < remove_position) {
		currentNode = currentNode.next;
		count++;
	}

	currentNode.next = currentNode.next.next;
	this._length--;
	console.log(this);
	return this;
}

var sumList = function(list1, list2) {
	// if (!list1 || !list2) return list1.reverse().join('') || list2.reverse().join('');
	if (list1) {
		var number1 = toInt(list1);
	} else {
		return toInt(list2);
	}

	if (list2) {
		var number2 = toInt(list2);
	} else {
		return toInt(list1);
	}

	return number1 + number2;
	
	function toInt(list) {
		var currentNode = list.head;
		var array = []
		while (currentNode) {
			array.push(currentNode.value);
			currentNode = currentNode.next;	
		}		
		return parseInt(array.reverse().join(''));
	}

}

var test = new SinglyList();
var test2 = new SinglyList();
test.add(1);
// test.add(1);
test.add(2);
test.add(3);
test2.add(4);
test2.add(5);
// test.removeDuplicates();
// test.removeFromEnd(5);
console.log(sumList(test, test2));
