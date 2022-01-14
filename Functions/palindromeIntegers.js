function palindromeIntegers(array){
    for(let num of array){
        let numAsString = String(num);
        let reversedNum = numAsString.split('').reverse().join('');
        if(numAsString == reversedNum){
            console.log(true);
        } else { 
            console.log(false);
        }
    }
}

palindromeIntegers([123,323,421,121])