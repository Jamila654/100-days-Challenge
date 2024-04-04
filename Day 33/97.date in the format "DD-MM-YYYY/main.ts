function currentdate():string{
    const currentdate: Date = new Date()
    const day: number = currentdate.getDate()
    const month: Number = currentdate.getMonth()
    const year: number = currentdate.getFullYear()
    return `${day}-${month}-${year}`
}

console.log(currentdate())