describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });

    // expect(swapCounter).toEqual(100).

    it('getting to call swap', function () {
        spyOn(swap()).and.callThrough();
        expect(swap.calls.count()).toEqual(0);
    });
});