function addAndSubstract(list) {
    let oldSum = 0;
    let newSum = 0;

    for (let i = 0; i <= list.lenght - 1; i++) {

        let currentNumber = list[i];
        let newNumber = 0;

        if (currentNumber % 2 === 0) {
            newNumber = currentNumber + i;
            list[i] = newNumber;
        } else {
            newNumber = currentNumber - i;
            list[i] = newNumber;
        }

        oldSum += currentNumber;
        newSum += newNumber;
    }
    console.log(list);
    console.log(oldSum);
    console.log(newSum);
}

addAndSubstract([5, 15, 23, 56, 35]);