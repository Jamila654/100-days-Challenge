"use strict";
function currentdate() {
    const currentdate = new Date();
    const day = currentdate.getDate();
    const month = currentdate.getMonth();
    const year = currentdate.getFullYear();
    return `${day}-${month}-${year}`;
}
console.log(currentdate());
