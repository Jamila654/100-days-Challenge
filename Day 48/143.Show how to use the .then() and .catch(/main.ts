import { rejects } from "assert";
import { resolve } from "path";

const conditionPromise = new Promise<string>((resolve, rejects)=>
{
    const randomNumber = Math.floor(Math.random()* 10)
    if(randomNumber > 5){
        resolve("Success")
    }else{
        rejects(new Error("Failure"))
    }
})
conditionPromise
.then((result)=>console.log(result))
.catch((error)=>console.log(error))