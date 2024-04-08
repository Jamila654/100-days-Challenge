"use strict";
function season(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("It is winter.");
            break;
        case 3:
        case 4:
        case 5:
            console.log("It is spring.");
            break;
        case 6:
        case 7:
        case 8:
            console.log("It is summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("It is fall.");
            break;
        default:
            console.log("Enter a valid month");
            break;
    }
}
season(53);
