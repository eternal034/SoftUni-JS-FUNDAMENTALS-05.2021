function piccolo(array){
    let cars = [];

    for(let command of array){
        let [direction, number] = command.split(', ');
        if(direction === 'IN'){
            if(!cars.includes(number)){
                cars.push(number);
            }
        } else {
            if(cars.includes(number)){
                cars.splice(cars.indexOf(number), 1);
            }
        }
    }

    let sortedCars = cars.sort((a,b) => a.localeCompare(b));

    if(sortedCars.length > 0){
        console.log(sortedCars.join('\n'));
    } else {
        console.log('Parking Lot is Empty');
    }
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);