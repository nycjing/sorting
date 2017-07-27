function bubbleSort(array) {
    var swapCount = 1;
    var roundCount = 0;

    while (swapCount) {
        swapCount = 0;
        for (var i = 0; i < array.length - roundCount; i++) {
            if (array[i] > array[i + 1]) {
                swapCount++;
                var temp = swap(array[i], array[i + 1]);
                array[i] = temp[0];
                array[i + 1] = temp[1];
            }
        }
        roundCount++;
    }

    return array;
}

function swap(a, b) {
    return [b, a];
}
