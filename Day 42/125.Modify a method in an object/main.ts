let student = {
    name: "Jamila",
    age: 19,
    education: "",
    getEducation: function(){
        return this.education = "Bachelors"
    }
}
console.log(student.getEducation())