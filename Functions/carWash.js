function carWash(array){
    let value = 0;
    for(let i = 0; i < array.length; i++){
        let command = array[i];

        switch(command){
            case "soap": value += 10; break;
            case "water": value *= 1.2; break;
            case "vacuum cleaner": value *= 1.25; break;
            case "mud": value *= 0.9; break;
        }
    }
    
    let result = `The car is ${value.toFixed(2)}% clean.`;
    return result;
}

let result = carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])
console.log(result);