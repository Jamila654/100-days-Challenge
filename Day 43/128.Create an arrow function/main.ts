function productNumbers(...num:number[]):number{
    return num.reduce((a,b) => a * b)
}
console.log(productNumbers(3,5,2))