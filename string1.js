const sen = "fun&!! time"

function StringChallenge(string){

    // separar as palavras
    const words = sen.split(" ")
    
    // variável que guardará as palavras modificadas para serem enviadas ao novo array
    

    // array que guardará as palavras
    let words2 = words.map(word => {
        // laço que percorrerá letra a letra procurando por divergências da regex
        let pal = ""
        for(i = 0; i < word.length; i++){
            if(word[i].match(/^[A-Za-z0-9]+$/)){
                pal += word[i]
            }
        }
        
        return pal
    })

    // definir qual é a maior palavra
    let biggestWord = ""
    words2.forEach(word => {
        if(word.length > biggestWord.length) biggestWord = word
    })

    return biggestWord
}

console.log(StringChallenge(sen))