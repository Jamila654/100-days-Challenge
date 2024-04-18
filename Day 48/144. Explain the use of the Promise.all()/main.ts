import { resolve } from "path"
const p1 = Promise.resolve(3)
const p2 = (50)
const p3 = new Promise<string>((resolve)=>
{
    setTimeout(()=>
    {
        resolve("Hello")
    },100)
})

Promise.all([p1,p2,p3]).then((values)=> console.log(values))