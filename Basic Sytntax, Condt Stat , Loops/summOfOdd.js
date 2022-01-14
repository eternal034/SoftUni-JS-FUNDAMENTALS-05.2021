function sumOfOdd(oddCount){
    let sum = 0;
    let counter = 0;

    for(let i = 1; i <= 100; i++){
        if(i % 2 == 1){
            counter++;
            sum += i;
            console.log(i);
        }
        if(counter === oddCount){
            console.log(`Sum: ${sum}`);
            break;
        }
    }
}

sumOfOdd(5);