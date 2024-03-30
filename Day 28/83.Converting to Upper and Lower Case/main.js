"use strict";
function convert(word) {
    let lower = word.toLowerCase();
    let upper = word.toUpperCase();
    console.log(`lower: ${lower} and upper: ${upper}.`);
}
console.log(convert("hello,world"));
