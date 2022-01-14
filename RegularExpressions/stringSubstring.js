function stringSubstring(word, text){
    let textArray = text.split(' ');

    for(let token of textArray){
        if(word.toLowerCase() == token.toLowerCase()){
            return console.log(word);
        }
    }

    console.log(`${word} not found!`);
}

stringSubstring('javascript',
'JavaScript is the best programming language');