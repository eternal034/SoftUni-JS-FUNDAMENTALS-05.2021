function pointsValidator(array){
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    function firstPoint(){
        let firstChek = Math.sqrt(Math.pow(x1 , 2) + Math.pow(y1 , 2));

        return firstChek;
    }

    function secondPoint(){
        let secondChek = Math.sqrt(Math.pow(x2 , 2) + Math.pow(y2 , 2));

        return secondChek;
    }

    function thirdPoint(){
        let thirdChek = Math.sqrt(Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2));

        return thirdChek;
    }

    let checkFirstPoint = firstPoint(array);
    let checkSecondPoint = secondPoint(array);
    let checkThirdPoint = thirdPoint(array);

    if (checkFirstPoint === Math.trunc(checkFirstPoint)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
 
    if (checkSecondPoint === Math.trunc(checkSecondPoint)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
 
    if (checkThirdPoint === Math.trunc(checkThirdPoint)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidator([3, 0, 0, 4])