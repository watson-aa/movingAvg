'use strict';

function compute(windowSize, array) {
    // parameter validation
    if (!Number.isInteger(windowSize) || !Array.isArray(array) || windowSize <= 0) {
        return [];
    }

    let window = [];
    return array.map((y,i) => {
        window.push(y);
        if (i >= windowSize) {
            // remove the first item in the array
            window.shift();
        }

        // window average
        return window.reduce((a,b) => a+b) / window.length;
    });
}

module.exports = compute;