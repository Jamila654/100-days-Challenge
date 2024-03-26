function swapValues(){
    let a = 5
    let b = 10
    console.log(`a value is ${a} and b value is ${b}`)

    let temp = a
    a = b
    b = temp
    console.log(`a value is ${a} and b value is ${b}`)
}

swapValues()