describe('Split Array function', function() {
    it('is able to split an array into two halves', function() {
        // your code here
        expect( split([]) ).toEqual( [] );
    });

    // expect(swapCounter).toEqual(100)


    it('split into two correctly', function() {

        var sample1 = [5, 8, 2, 4, 12, 1];
        expect( split(sample1) ).toEqual( [[5, 8, 2],[4, 12,1]] );

    });

    it('split into two correctly', function() {

        var sample1 = [5, 8, 2, 4, 12, 1, 13];
        expect( split(sample1) ).toEqual( [[5, 8, 2],[4, 12, 1, 13]] );

    });


});

describe('Merge Function', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        var sample1 = [2,5,8]
        var sample2 = [1,4, 12,13];
        expect( merge(sample1,sample2) ).toEqual( [1,2,4,5,8,12,13] );
    });

    it('is able to merge two sorted arrays into one sorted array', function(){
        var sample1 = [1, 2, 4]
        var sample2 = [5, 8, 12,13];
        expect( merge(sample1,sample2) ).toEqual( [1,2,4,5,8,12,13] );
    });

    it('is able to merge two sorted arrays into one sorted array', function(){
        var sample2 = [1, 2, 4]
        var sample1 = [5, 8, 12,13];
        expect( merge(sample1,sample2) ).toEqual( [1,2,4,5,8,12,13] );
    });
});

describe('Merge Sort', function(){
    it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        var sample1 = [5, 2]
        expect( mergeSort(sample1) ).toEqual( [2, 5] );
    });

        it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        var sample1 = [5, 2, 8]
        expect( mergeSort(sample1) ).toEqual( [2, 5, 8] );
    });

        it('is able to merge two sorted arrays into one sorted array', function(){
        // test the merging algorithm
        var sample1 = [5, 2, 8, 1]
        expect( mergeSort(sample1) ).toEqual( [1, 2, 5, 8] );
    });
});
