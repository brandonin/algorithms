function armstrong(line) {
        var array = line.split('');
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += Math.pow(parseInt(array[i]), array.length);
        }
        if (sum === parseInt(array.join(''))) {
            console.log('True');
        } else {
            console.log('False');
        }

armstrong(6);