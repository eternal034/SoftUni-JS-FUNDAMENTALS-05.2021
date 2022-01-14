function rightPlace(firstString , charNeeded, secondString){
    let tmp = ''
    firstStringL = firstString.length

    for(let i = 0; i < firstStringL; i++){
        let currentChar = firstString[i];

        if(currentChar === '_'){
            tmp += charNeeded;
        } else{
            tmp += currentChar;
        }
    }

    if(tmp === secondString){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng' , 'o', 'String')