function checkLeapyear(year:number){
    if(year % 4 === 0 && year % 100 !== 0){
        return `This ${year} is a leap year`
    }else{
        return `This ${year} is not a leap year.`
    }
}

console.log(checkLeapyear(1900))
console.log(checkLeapyear(2024))