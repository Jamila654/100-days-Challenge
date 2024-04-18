import { json } from "stream/consumers"

const student = {
    name: "Ana",
    age: 19,
    education: "Bachelors"
}
const jsonString = JSON.stringify(student)
console.log(jsonString)