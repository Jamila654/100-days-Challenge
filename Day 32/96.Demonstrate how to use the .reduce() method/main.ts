function sumNumbers(...number:number[]):number{
    return number.reduce((a,b)=> a + b)
}

console.log(sumNumbers(3,6,10))