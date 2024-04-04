function daysUntilNewYear() {
    var today:any = new Date();
    var nextYear:any = new Date(today.getFullYear() + 1, 0, 1)
    var millisecondsInADay = 24 * 60 * 60 * 1000; 
    var daysLeft = Math.round((nextYear - today) / millisecondsInADay)
    return daysLeft;
}

console.log("There are " + daysUntilNewYear() + " days left until New Year.");
