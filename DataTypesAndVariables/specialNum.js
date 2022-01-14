function specialNums(n){

    for(let i = 1; i <= n; i++){
        let numToString = i.toString();
        let sum = 0;
        let isSpecial = false;

        if(numToString.length == 1 && (numToString == 5 || numToString == 7)){
            isSpecial = true;
        } else if (numToString.length > 1) {
            for(let j = 0; j < numToString.length; j++){
                let currentDig = Number(numToString[j]);
                sum += currentDig;
            }
            if(sum == 5 || sum == 7 || sum == 11){
                isSpecial = true;
            }
        }
        console.log(`${numToString} -> ${isSpecial ? `True` : `False`}`);
    }
}

specialNums(101);