"use strict";
function favorite(...fruits) {
    let index = fruits.indexOf("banana");
    const updtaed = fruits[index] = "mango";
    console.log(fruits);
}
favorite("apple", "banana", "orange");
