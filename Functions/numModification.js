function numModification(num) {

    let numToString = String(num);
    let numLength = Number(numToString.length);
    let sumOfDigit = 0;
    for (let digit of numToString) {
        let currentDigit = Number(digit)
        sumOfDigit += currentDigit;
    }

    let averageValue = sumOfDigit / numLength;

    if (averageValue > 5){
        console.log(num);
        return;
    } else {
        let ninesCount = 6 - numLength;

        for(let i = 0; i <= ninesCount; i++){
            numToString += "9";
            sumOfDigit += 9;
            numLength++;
            averageValue = sumOfDigit / numLength;
            if(averageValue > 5){
                break;
            }
        }
        num = Number(numToString);
        console.log(num);
    }
}

numModification(5555);
