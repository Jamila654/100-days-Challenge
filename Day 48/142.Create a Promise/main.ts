import { resolve } from "path";

const helloWorld = new Promise<string>((resolve)=>
{
    setTimeout(()=>
    {
        resolve("Hello, World!")
    },5000)
})

helloWorld.then((message)=> console.log(message))