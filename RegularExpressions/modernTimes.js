function modernTimes(text){
   /* let result = []
    let collecting = false;
    let currentWord = '';

    for(let char of text){
        if(collecting){
            if(char == ' '){
                if(currentWord.length > 0){
                    result.push(currentWord);
                }
                collecting = false;
                currentWord = '';
            } else {
                let code = char.charCodeAt(0)
                if((code >= 65 && code <= 90) || (code >= 97 && code <= 122)){
                    currentWord += char;
                } else {
                    collecting = false;
                }
            }
        } else {
            if(char == '#'){
                collecting = true;
            }
        }
    }

    if(collecting && currentWord.length > 0){
        result.push(currentWord);
    }

    for(let word of result){
        console.log(word);
    }*/

    const tokens = text.split(' ');
    const result = [];

    for( let token of tokens){
        if(token.length > 0 && token[0] == '#'){
            let valid = true;
            for(let char of token.substring(1)){
                let code = char.charCodeAt(0)
                if((code < 65 || code > 122) || (code >= 91 && code <= 96)){
                  valid = false;  
                }
            }

            if(valid){
                result.push(token.substring(1));
            }
        }
    }

    for(let word of result){
        console.log(word);
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');