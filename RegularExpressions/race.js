function race(array) {
    let racers = array.shift().split(', ');
    let racersData = {};

    for (let name of racers) {
        racersData[name] = 0;
    }

    let patternRacers = /[A-Za-z]/g;
    let patternDigits = /\d/g;

    while (array[0] != 'end of race') {
        let line = array.shift();
        let totalDistance = 0;

        let letters = line.match(patternRacers);
        let digits = line.match(patternDigits);

        let racerName = letters.join('');
        let distances = digits.map(Number);

        for (let distance of distances) {
            totalDistance += distance;
        }

        if (racersData[racerName] != undefined) {
            racersData[racerName] += totalDistance;
        }
    }
    let sortedRacers = Object.keys(racersData).sort((a, b) => racersData[b] - racersData[a]);
    sortedRacers.length = 3

    for (let i = 0; i < sortedRacers.length; i++) {
        let title = '';
        if (i == 0) {
            title = '1st';
        } else if (i == 1) {
            title = '2nd';
        } else if (i == 2) {
            title = '3rd'
        }

        console.log(`${title} place: ${sortedRacers[i]}`);
    }
}

race(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"]);