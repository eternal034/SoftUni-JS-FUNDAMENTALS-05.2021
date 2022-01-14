function radioCrystals(array) {
    let neededTickness = array[0];

    for (let i = 1; i < array.length; i++) {
        let currentTickness = array[i];
        console.log(`Processing chunk ${currentTickness} microns`);

        let cut = (tickness) => tickness / 4;
        let lap = (tickness) => tickness * 0.8;
        let grind = (tickness) => tickness - 20;
        let etch = (tickness) => tickness - 2;
        let xray = (tickness) => tickness + 1;

        let cutCount = 0;
        let lapCount = 0;
        let grindCount = 0;
        let etchCount = 0;

        while (currentTickness !== neededTickness) {
            while (currentTickness / 4 >= neededTickness) {
                currentTickness = cut(currentTickness);
                cutCount++;
            }
            if (cutCount > 0) {
                console.log(`Cut x${cutCount}`);
                console.log(`Transporting and washing`);
                currentTickness = Math.floor(currentTickness);
            }

            while (currentTickness * 0.8 >= neededTickness) {
                currentTickness = lap(currentTickness);
                lapCount++;
            }
            if (lapCount > 0) {
                console.log(`Lap x${lapCount}`);
                console.log(`Transporting and washing`);
                currentTickness = Math.floor(currentTickness);
            }

            while (currentTickness - 20 >= neededTickness) {
                currentTickness = grind(currentTickness);
                grindCount++;
            }
            if (grindCount > 0) {
                console.log(`Grind x${grindCount}`);
                console.log(`Transporting and washing`);
                currentTickness = Math.floor(currentTickness);
            }

            while (currentTickness - 2 >= neededTickness - 1) {
                currentTickness = etch(currentTickness);
                etchCount++;
            }
            if (etchCount > 0) {
                console.log(`Etch x${etchCount}`);
                console.log(`Transporting and washing`);
                currentTickness = Math.floor(currentTickness);
            }

            if (currentTickness < neededTickness) {
                currentTickness = xray(currentTickness);
                console.log(`X-ray x1`);
            }
        }
        console.log(`Finished crystal ${neededTickness} microns`);
    }
}

radioCrystals([1000, 4000, 8100])