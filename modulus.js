var line = "60,6";
        var array = line.split(',');
        var n = parseInt(array[0]);
        var m = parseInt(array[1]);
        var answer = n;
        while (n >= m) {
            n -= m;
            answer = n;
        }
        console.log(answer);