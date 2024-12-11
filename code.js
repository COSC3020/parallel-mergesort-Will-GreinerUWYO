// my old merge logic
function merge(array, start, leftEnd, rightEnd) {
    while (start < leftEnd && leftEnd < rightEnd) {
        if (array[start] < array[leftEnd]) {
            start++;
        }    
        else {
            let currentMove = array[leftEnd];
            let index = leftEnd;

            while (index > start) {
                array[index] = array[index - 1];
                index--;
            }
            array[start] = currentMove;
            start++;
            leftEnd++;
        }
    }
    return array;
}

// based on logic from the slides
function mergeSortMapReduce(array, cb) {
    // base case, array is sorted
    if (array.length <= 1) {
        cb(array);
        return;
    }

    // splits the array and stores points
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);

    // processes p for a left and right, waiting on both to be present to do the function
    Parallel = require('paralleljs'),
    p = new Parallel([left, right]);

    // processes the array chunk, performing merge on each chunk
    p.map(function(chunk) { 
        function mapMergeSort(arr){
            const arrLength = arr.length;
            // base cases
            if(arrLength === 0 || arrLength === 1){
                return arr;
            }
            // uses the iterative logic to handle it for each case
            for(let i = 1; i < arrLength; i = i*2){
                for(let j = 0; j < arrLength; j += 2*i){
                    let start = j;
                    let leftEnd = Math.min(j + 1, arrLength);
                    let rightEnd = Math.min(j+2*i, arrLength);
                    merge(arr,start,leftEnd,rightEnd);
                }
            }
            return arr;
        }
        return mapMergeSort(chunk);
     })
     // works to merge the arrays without having all the extra data passed in for my old in-place
    .then(function(halves) {
        let left = halves[0];
        let right = halves[1];
        let merged = [];
        let i = 0;
        let j = 0;
        while(i < left.length && j < right.length) {
            if(left[i] <= right[j]){
                merged.push(left[i++]);
            }
            else{
                merged.push(right[j++]);
            }
        }
        while(i < left.length){
            merged.push(left[i++]);
        }
        while(j < right.length){
            merged.push(left[j++])
        }
        cb(merged);
    });
}

// what the code was based on from earlier in the semester
//function mergesort(array) {
//    const arrLength = array.length;
    //base case, only one element in the array
//    if (arrLength <= 1) {
//        return array;
//    }
//    for (let i = 1; i < arrLength; i = (2 * i)) {
//       for (let j = 0; j < arrLength; j += (2 * i)) {
//            // Math.min ensures the midpoint and endpoint never leave the bounds of the function
//            let start = j;
//              let leftEnd = Math.min(j + i, arrLength);
//            let rightEnd = Math.min(j + (2 * i), arrLength);
//            
//            merge(array,start,leftEnd,rightEnd);
//        }
//    }
//    return array;
//}
