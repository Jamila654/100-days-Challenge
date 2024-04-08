function checkCountry(country:string){
    const countries = new Map([
        ["Kuala Lumpur","Malaysia"],
        ["New York","America"],
        ["Tokyo","Japan"]
    ])
    if(countries.has("canada")){
        return (`The capital of Canada is ${countries.get("canada")}`)
    }else{
        return("Canada is not on the map.")
    }

}
console.log(checkCountry("canada"))