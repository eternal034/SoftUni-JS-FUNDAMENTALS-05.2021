function calc(a, b, operator){
    let result;

    switch(operator){
        case 'add': result = a + b;
        break;
        case 'subtract': result = a - b;
        break;
        case 'multiply': result = a * b;
        break;
        case 'divide': result = a / b;
        break;
    }

    console.log(result);
}

calc(5,5,'multiply')