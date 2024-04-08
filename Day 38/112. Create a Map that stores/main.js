"use strict";
const contries = new Map([
    ["Kuala Lumpur", "Malaysia"],
    ["New York", "America"],
    ["Tokoyo", "Japan"]
]);
contries.forEach((a, b) => { console.log(`${a} - ${b}`); });
console.log(contries);
