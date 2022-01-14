function mergeArrays(array1 , array2){
    let array3 = [];
    for(let i = 0; i < array1.length; i++){
        let array1currentNum = array1[i];
        let array2currentNum = array2[i];
        if(i % 2 === 0){
            array1currentNum = Number(array1[i]);
            array2currentNum = Number(array2[i])
            array3.push(`${(array1currentNum) + (array2currentNum)}`);
        } else {
            let result = array1currentNum + array2currentNum;
            array3.push(result);
        }
    }

    let finalResult = (array3.join(' - '));
    console.log(finalResult)
}


mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11'])