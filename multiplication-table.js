var table = [];
for (var i = 0; i < 12; i++) {
    table[i] = [];
}

for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {
    	if ((i+1)*(j+1) < 10) {
        	table[i].push("   " + ((i+1)*(j+1)));
        } else if ((i+1)*(j+1) < 100) {
        	table[i].push("  " + ((i+1)*(j+1)));
        } else {
        	table[i].push(" " + ((i+1)*(j+1)));
        }
    }
}

for (var i = 0; i <= 11; i++) {
    table[i] = table[i].join(' ');
}

table = table.join('\n');
console.log(table)
