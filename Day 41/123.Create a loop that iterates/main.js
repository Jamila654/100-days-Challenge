"use strict";
function stopVowel(charachters) {
    const vowel = "aeiouAEIOU";
    for (let chr of charachters) {
        if (vowel.includes(chr)) {
            break;
        }
        console.log(chr);
    }
}
stopVowel("ghtas");
