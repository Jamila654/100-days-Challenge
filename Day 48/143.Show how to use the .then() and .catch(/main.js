"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conditionPromise = new Promise((resolve, rejects) => {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5) {
        resolve("Success");
    }
    else {
        rejects(new Error("Failure"));
    }
});
conditionPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
