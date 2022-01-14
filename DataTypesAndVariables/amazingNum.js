function amazingNum(num){
    let numToString = num.toString();
    let sum = 0;
    for(let i = 0; i < numToString.length; i++){
        let currentChar = Number(numToString[i]);
        sum += currentChar;
    }

    let sumToString = sum.toString();
    let hasNine = false;

    for(let i = 0; i < sumToString.length; i++){
        let currentChar = sumToString[i];
        if(currentChar == '9'){
            hasNine = true;
            break;
        }
    }

    console.log(`${num} Amazing? ${hasNine ? 'True' : 'False'}`);
    
}

amazingNum(12)