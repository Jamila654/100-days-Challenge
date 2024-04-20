function greet(name:string, callback:(message:string)=>void){
    const message = ` Hello ${name}`
    callback(message)
}

function display(message: string){
    console.log(message)
}

greet("Jam",display)