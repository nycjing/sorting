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

    if (array1.length > array2.length) {
        var len = array1.length
    }
    else {
        var len = array2.length
    }

    for (i=0; i<len; i++) {
         if (sample1[i]>sample2[i])

    }

}