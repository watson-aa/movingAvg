const movingAvg = require('./movingAvg');

test('computes moving average', () => {
    // given examples
    expect(movingAvg(3, [0, 1, 2, 3])).toEqual([0, 0.5, 1, 2]);
    expect(movingAvg(5, [0, 1, -2, 3, -4, 5, -6, 7, -8, 9])).toEqual([0, 0.5, -0.3333333333333333, 0.5, -0.4, 0.6, -0.8, 1, -1.2, 1.4]);

    // bad input edges
    expect(movingAvg(null, null)).toEqual([]);
    expect(movingAvg('foo', [0, 1, 2, 3])).toEqual([]);
    expect(movingAvg(2, 'foo')).toEqual([]);
    expect(movingAvg(0.5, [0,1,2,3])).toEqual([]);

    // zero window size
    expect(movingAvg(0, [0,1,2,3])).toEqual([]);

    // single window size
    expect(movingAvg(1, [0,1,2,3])).toEqual([0,1,2,3]);
});

