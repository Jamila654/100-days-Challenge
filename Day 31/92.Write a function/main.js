"use strict";
function fruits(...favorite) {
    console.log(favorite);
    return favorite.pop();
}
console.log(fruits("apple", "banana", "mango"));
