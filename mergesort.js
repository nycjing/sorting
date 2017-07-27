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
    var i = 0;
    var j = 0
    while (i < array1.length && j < array2.length)
        if (array1[i] > array2[j]) {
            result.push(array2[j]);
            j++;
        } else {
            result.push(array1[i]);
            i++
        }
    if (i < array1.length)
        return result.concat(array1.slice(i));
    else
        return result.concat(array2.slice(j));
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
