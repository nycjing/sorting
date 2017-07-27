function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    if (wholeArray.length > 0) {

        var midIndex = Math.floor(wholeArray.length / 2)
        var firstHalf = wholeArray.slice(0, midIndex);
        var secondHalf = wholeArray.slice(midIndex);
        return [firstHalf, secondHalf];

    }
    else
        return [];
}

function merge(array1, array2) {
    var result = [];

    while (array1.length) {
         if (array1[0] > array2[0]) {
             result.push(array2[0]);
             array2 = array2.slice(1);
         } else {
             result.push(array1[0]);
             array1 = array1.slice(1);
         }
    }

    return result.concat(array2);
}

function mergeSort(array) {
    if (array.length === 1) {
        return array;
    } else if (array.length === 2) {
        var smallArrays = split(array);
        return merge(smallArrays[0], smallArrays[1]);
    } else {
        var smallArrays = split(array);
        return merge(mergeSort(smallArrays[0]), mergeSort(smallArrays[1]));
    }
}
