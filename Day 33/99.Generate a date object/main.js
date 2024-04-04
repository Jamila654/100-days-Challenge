"use strict";
function nextBirthday(month, day) {
    const today = new Date();
    const currentYear = today.getFullYear();
    let birthday = new Date(currentYear, month, day);
    if (today > birthday) {
        birthday = new Date(currentYear + 1, month, day);
    }
    return `Your next birthday is ${birthday}`;
}
console.log(nextBirthday(4, 6));
