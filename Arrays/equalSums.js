function equalSums(array){
    
    let isEqual = false;
    let oneLength = false;
    for(let i = 0; i < array.length; i++){
        let sum1 = 0;
        let sum2 = 0;
        if(array.length <= 1){
            oneLength = true;
            break;
        }
        for(let j = 0; j < i; j++){
            let currentNum = Number(array[j]);
            sum1 += currentNum;
        }
        for(let k = i + 1; k < array.length; k++){
            let newNum = Number(array[k]);
            sum2 += newNum;
        }
        if(sum1 == sum2){
            isEqual = true;
            console.log(i);
            break;
        }
    }
    if(oneLength){
        let result = 0;
        console.log(result);
    }else if(!isEqual){
        console.log('no');
    }
}

equalSums([1,]);