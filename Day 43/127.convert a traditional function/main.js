"use strict";
const traditionalFunction = function (a, b) {
    return a + b;
};
const arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(5, 3));
console.log(arrowFunction(5, 3));
