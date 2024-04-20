"use strict";
function greet(name, callback) {
    const message = ` Hello ${name}`;
    callback(message);
}
function display(message) {
    console.log(message);
}
greet("Jam", display);
