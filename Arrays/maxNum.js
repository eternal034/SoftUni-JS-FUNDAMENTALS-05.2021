function maxNumber(array){
    let newArray = []
    for(let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);
        let greatThanCounter = 0;
        for(j = i + 1; j < array.length; j++){
            let newNum = Number(array[j]);
            if(currentNum > newNum){
                greatThanCounter++;
            }
        }
        if(greatThanCounter === array.length - (i + 1)){
            newArray.push(currentNum);
        }
    }
    console.log(newArray.join(' '))
}

maxNumber([14, 24, 3, 19, 15, 17])