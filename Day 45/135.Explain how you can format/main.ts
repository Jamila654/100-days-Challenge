const student = {
    "name": "Ana",
    "Age": 19,
    "education": "Bachelors"
}

console.log(student)
const jsonObject = JSON.stringify(student,null, 2)
console.log(jsonObject)