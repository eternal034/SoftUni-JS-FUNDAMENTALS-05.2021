function fuelMoney(distance, passengerCount, pricePerL ){
    let neededByEmptyBus = (distance / 100) * 7;
    let increasedFuel = passengerCount * 0.1;

    let totalFuel = neededByEmptyBus + increasedFuel;
    let neededMoney = totalFuel * pricePerL;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);


}

fuelMoney(90, 14, 2.88)