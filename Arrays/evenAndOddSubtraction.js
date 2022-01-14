function evenAndOdd(array){
    let sumOfEven = 0;
    let sumOfOdd = 0;

    for(let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);
        if(currentNum % 2 === 0){
            sumOfEven += currentNum;
        } else {
            sumOfOdd += currentNum;
        }
    }

    let result = sumOfEven - sumOfOdd;
    console.log(result);
}

evenAndOdd([1,2,3,4,5,6]);