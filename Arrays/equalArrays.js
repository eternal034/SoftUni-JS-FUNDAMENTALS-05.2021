function equalArrays(array1, array2){
    let sum = 0;
    let areEqual = false;
    for(let k = 0; k < array1.length; k++){
        if(array1[k] === array2[k]){
            array1[k] = Number(array2[k]);
            sum += array1[k]
            areEqual = true
        } else {
            console.log(`Arrays are not identical. Found difference at ${k} index`);
            areEqual = false
            break;
        }
    }
    if(areEqual){
    console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);