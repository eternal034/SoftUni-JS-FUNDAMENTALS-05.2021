function negOrPosNumbers(array){
    let result = [];

    for(let i=0; i<array.length; i++){
        let num = array[i];
        if(num < 0){
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    console.log(`${result.join('\n')}`);
}

negOrPosNumbers([7, -2, 8, 9]);