function multiplicationTable(num){
    for (let i = 1; i <= 10; i++){
        let multipliedNum = num * i;
        console.log(`${num} X ${i} = ${multipliedNum}`);
    }
}

multiplicationTable(5);