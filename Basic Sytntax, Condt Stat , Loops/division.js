function devision(num){

    let devidionBy = 0
    if(num % 10 === 0){
        devidionBy = 10;
        console.log(`The number is divisible by ${devidionBy}`);
    } else if(num % 7 === 0){
        devidionBy = 7;
        console.log(`The number is divisible by ${devidionBy}`);
    } else if(num % 6 === 0){
        devidionBy = 6;
        console.log(`The number is divisible by ${devidionBy}`);
    } else if(num % 3 === 0){
        devidionBy = 3;
        console.log(`The number is divisible by ${devidionBy}`);
    } else if(num % 2 === 0){
        devidionBy = 2;
        console.log(`The number is divisible by ${devidionBy}`);
    } else {
        devidionBy = 'Not divisible';
        console.log(`${devidionBy}`);
    }
}

devision(30);
devision(1643);