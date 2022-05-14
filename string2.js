const string = "never odd or even"

function StringTwoChallenge(string){

    const original = string.slice(0).replaceAll(" ", "")
    let reverse = ""

    for(i = original.length - 1 ; i >= 0 ; i--){
        reverse += original[i]
    }
    
   return reverse === original

}

console.log(StringTwoChallenge(string))
