function convert(word:string){
    let lower: string = word.toLowerCase()
    let upper: string = word.toUpperCase()
    console.log(`lower: ${lower} and upper: ${upper}.`)
}

console.log(convert("hello,world"))

