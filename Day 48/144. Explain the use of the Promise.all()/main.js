"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const p1 = Promise.resolve(3);
const p2 = (50);
const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello");
    }, 100);
});
Promise.all([p1, p2, p3]).then((values) => console.log(values));
