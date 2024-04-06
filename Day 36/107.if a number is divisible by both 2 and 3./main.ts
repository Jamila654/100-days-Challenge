function checkNumber(num:number):boolean{
    return num % 2 === 0 && num % 3 === 0
}
console.log(checkNumber(6))
console.log(checkNumber(4))