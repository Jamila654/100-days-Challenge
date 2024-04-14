function stopVowel(charachters:string){
    const vowel: string = "aeiouAEIOU"
    for(let chr of charachters){
        if(vowel.includes(chr)){
            break
        }
        console.log(chr)
    }
}
stopVowel("ghtas")