function numberGreater(...numbers:number[]):number[]{
    return numbers.filter((number=> number > 10))
}

console.log(numberGreater(10,3,20,6,76))