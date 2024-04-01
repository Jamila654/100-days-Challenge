function fruits(...favorite:string[]){
    console.log(favorite)
    return favorite.pop()
    
}

console.log(fruits("apple","banana","mango"))