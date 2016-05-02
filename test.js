// function solution(S) {
//     var string = S.match(/\d+/g);
//     console.log(string);
// }

// solution('00-44  48 5555 8361');

function solution(S) {
    var string = S.split('\n')
    string = string.join(',');
    string = string.split(',');
    var map = {};
    var cost = 0;
    for(var i = 1; i < string.length; i+= 2){
            if(!map[string[i]]){
            	var time = string[i-1].split(":");
	    		var seconds = (parseInt(time[0]*60*60)) + (parseInt(time[1])*60)+(parseInt(time[2]));
                map[string[i]] = seconds;
            } else{
            	var time = string[i-1].split(":");
	    		var seconds = (parseInt(time[0]*60*60)) + (parseInt(time[1])*60)+(parseInt(time[2]));
	    		map[string[i]] += seconds;
            }
    }
    var max;
    for(var x in map){
    	if(!max){
    		max = map[x];
    	} else if(max < map[x]){
    		max = map[x];
    	}
    }
    for(var x in map){
    	if(max == map[x]){
    		delete map[x];
    		break;
    	}
    }
    for(var x in map){
    	if(map[x]<300){
    		cost += 3*map[x];
    	} else if(map[x] >= 300){
    		cost += Math.ceil(map[x]/60)*150;
    	}
    }
	return cost;    
}

var S = "00:01:07,400-234-090\n00:05:01,701-080-080\n00:05:00,400-234-090";
console.log(solution(S));
// function solution(M, A) {
//     var N = A.length;
//     var count = new Array(M + 1);
//     var i;
//     for (i = 0; i <= M; i++)
//         count[i] = 0;
//     var maxOccurence = 1;
//     var index = 0;
//     for (i = 0; i < N; i++) {
//         if (count[A[i]] > 0) {
//             var tmp = count[A[i]];
//             if (tmp > maxOccurence) {
//                 maxOccurence = tmp;
//                 index = i;
//             }
//             count[A[i]] = tmp + 1;
//         } else {
//             count[A[i]] = 1;
//         }
//     }
//     // console.log(count);
//     console.log(A[index]);
// }

// var array = [1, 2, 3];
// solution(3, array);