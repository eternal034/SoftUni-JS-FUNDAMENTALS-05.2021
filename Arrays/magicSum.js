function magicSum(array, num){
    for(let i=0; i<array.length; i++){
        let firstNum = Number(array[i]);
        for(let j = i + 1; j<array.length; j++){
            let secondNum = Number(array[j]);
            if(firstNum + secondNum === num){
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}

magicSum([18,6,12],18)