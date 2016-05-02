// function processData(input, start, end) {
//     var arr = input, position;
//     if(!pivot){
// 	    var pivot = arr.length-1;
//     }
//     var map = {flag: false};
//     if(arr.length <= 1){
//         return;
//     }
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > arr[pivot] && map.flag == false){
//             position = i;
//             map.flag = true;
//         } 
//         else if(arr[i] < arr[pivot] && map.flag == true){
//         	swap(arr, i, position);
//             position++;
//         }
//     }
// 	swap(arr, pivot, position);
// 	console.log(arr);
// } 

// function swap(arr, i, position){
//     var temp = arr[i];
//     arr[i] = arr[position];
//     arr[position] = temp;	
// }
var test = [1, 3, 9, 8, 2, -1, -10, -50, 7, 5, 6, 99];

console.log(processData(test));

function processData(arr){
    var left = [], right = [];
    if( arr.length < 1){
        return [];
    }
    var pivot = arr[0];
    for(var i = 1; i < arr.length; i ++){
        if( arr[i] < pivot){
            left.push(arr[i]);
        } else{
            right.push(arr[i]);
        }
    }
    return processData(left).concat(pivot, processData(right));
}

// function quickSort(arr, lo, hi){
//     if(arr <= 1){
//         return;
//     }
//     // if(!lo && !hi){
//     // 	lo = arr[0];
//     // 	hi = arr[arr.length-1];
//     // }
//     if(lo < hi ){
//         var p = partition(arr, lo, hi);
//         quickSort(arr, lo, p-1);
//         quickSort(arr, p-1, hi);
//     }
// }

// function partition(arr, lo, hi){
//     pivot = arr[hi];
//     position = lo;
//     for(var i = lo; i < hi-1; i++){
//         if(arr[position] <= pivot){
//             var temp = arr[position];
//             arr[position] = arr[i];
//             arr[i] = temp;
//             position++;
//         }
//     }
//     var temp = pivot;
//     pivot = arr[position];
//     arr[position] = temp;
//     console.log(arr);
//     return position;
// }

// quickSort(test);




// function sort(array) {
 
//   function swap(i, j) {
//     var t = array[i];
//     array[i] = array[j];
//     array[j] = t;
//   }
 
//   function quicksort(left, right) {
//     if (left < right) {
//       var pivot = array[left],
//           left_new = left,
//           right_new = right;
 
//        while (left_new <= right_new) {
//             while (array[left_new] < pivot) {
//               left_new += 1;
//             }
//             while (pivot < array[right_new]) {
//               right_new -= 1;
//             }
//             if (left_new <= right_new) {
//               swap(left_new, right_new);
//               left_new += 1;
//               right_new -= 1;
//             }
//       };
//       quicksort(left, right_new);
//       quicksort(left_new, right);
 
//     }
//   }
 
//   quicksort(0, array.length - 1);
 
//   return array;
// }

// var test_array = [10, 3, 22, 69, 20, 2, 4, -1, 11, 10, 20, 22, 11, 15, 19, 1];
// var sorted_array = sort(test_array);
// console.log(sorted_array)


// function sort(arr){
//     function swap(i, j){
//         temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }

//     function quicksort(arr, left, right){
//         if (left - right === 0){
//             return [];
//         }
//         var pivot = right, left_new, right_new;
//         for(var left = 0; left <arr.length; left ++){

//             for(var position = left; position < arr.length; position++){
//                 if(arr[position] < arr[pivot]){
//                     swap(position, left);
//                     left++;
//                 } 
//                 else if(position === pivot){
//                     swap(left, pivot);
//                     right_new = pivot-1;
//                 }
//             }
//         }
//         quicksort(arr, 0, right_new)
//     }        
//     quicksort(arr, 0, arr.length-1);
//     console.log(arr);
// }

// var array = [1, 29, 1, 5, 9, 6, 2, 21 ,4, 10, 8, 2, 12, 21, 2, 3, -1, 36, 36, 12, 7];
// sort(array);