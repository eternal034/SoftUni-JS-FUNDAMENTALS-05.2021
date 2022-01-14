function charsInRange(char1 , char2){
    let min = char1.charCodeAt(0);
    let max = char2.charCodeAt(0);
    
    let char1AsNum = char1.charCodeAt(0);
    let char2AsNum = char2.charCodeAt(0);

    if(char1AsNum > char2AsNum){
        min = char2.charCodeAt(0);
        max = char1.charCodeAt(0);
    }

    let result = '';

    for(let i = min + 1; i < max; i++){
        let char = String.fromCharCode(i);
        result += `${char} `;
    }

    return result;
}

let result = charsInRange('a', 'd');
console.log(result);