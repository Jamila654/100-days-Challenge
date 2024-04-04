"use strict";
function daysUntilNewYear() {
    var today = new Date();
    var nextYear = new Date(today.getFullYear() + 1, 0, 1);
    var millisecondsInADay = 24 * 60 * 60 * 1000;
    var daysLeft = Math.round((nextYear - today) / millisecondsInADay);
    return daysLeft;
}
console.log("There are " + daysUntilNewYear() + " days left until New Year.");
