function factorialDevision(num1 , num2){

    function factorialNum1(num1){
        let result = 1;
        for(let i = 1; i <= num1; i++){
            result *= i;
        }

        return result;
    }

    function factorialNum2(num2){
        let result = 1;
        for(let i = 1; i <= num2; i++){
            result *= i;
        }

        return result;
    }

    let num1Facotiral = factorialNum1(num1);
    let num2Factorial = factorialNum2(num2);

    let result = Number(num1Facotiral / num2Factorial).toFixed(2);
    return result;
}
let result = factorialDevision(5,2)
console.log(result);