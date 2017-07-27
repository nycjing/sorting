describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    // expect(swapCounter).toEqual(100)

    it('getting to call swap', function () {
        spyOn(window, 'swap').and.callThrough();
        expect(swap.calls.count()).toEqual(0);
    });

    it('sorts correctly', function() {
        spyOn(window, 'swap').and.callThrough();
        var unsorted = [5, 8, 2, 4, 12, 1, 3];
        expect( bubbleSort(unsorted) ).toEqual( [1, 2, 3, 4, 5, 8, 12] );
        console.log(swap.calls.count());
    });
});
