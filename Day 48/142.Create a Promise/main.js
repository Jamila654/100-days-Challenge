"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloWorld = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello, World!");
    }, 5000);
});
helloWorld.then((message) => console.log(message));
