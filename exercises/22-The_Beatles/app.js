function singLetItBe(times) {
    let letItBe= "let it be, ";
    
    for (let i = 0; i< times-1; i++) {
        letItBe+="let it be, ";
    }

    return letItBe;
}

function sing() {
    let lyrics = "";

    lyrics += singLetItBe(4) + "whisper words of wisdom, " + singLetItBe(5) + "there will be an answer, " + singLetItBe(1).slice(0, -2);
    return lyrics;
}

//Your code above ^^^

console.log(sing());